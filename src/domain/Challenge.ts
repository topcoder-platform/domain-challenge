import { ChallengeDomain as LegacyChallengeDomain } from "@topcoder-framework/domain-acl";
import { DomainHelper, PhaseFactRequest, PhaseFactResponse } from "@topcoder-framework/lib-common";
import xss from "xss";
import CoreOperations from "../common/CoreOperations";
import { Value } from "../dal/models/nosql/parti_ql";
import IdGenerator from "../helpers/IdGenerator";
import {
  Challenge,
  ChallengeList,
  Challenge_Legacy,
  Challenge_Overview,
  Challenge_Phase,
  Challenge_PrizeSet,
  CreateChallengeInput,
  UpdateChallengeInputForACL_UpdateInputForACL,
  UpdateChallengeInputForACL_WinnerACL,
  UpdateChallengeInput_UpdateInput,
} from "../models/domain-layer/challenge/challenge";

import { ChallengeSchema } from "../schema/Challenge";

import { Metadata, StatusBuilder } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { CreateChallengeInput as LegacyCreateChallengeInput } from "@topcoder-framework/domain-acl";
import _ from "lodash";
import { ChallengeStatuses, ES_INDEX, ES_REFRESH, Topics } from "../common/Constants";
import BusApi from "../helpers/BusApi";
import ElasticSearch from "../helpers/ElasticSearch";
import { LookupCriteria, ScanCriteria } from "../models/common/common";
import legacyMapper from "../util/LegacyMapper";
import ChallengeScheduler from "../util/ChallengeScheduler";
import * as BillingAccount from "../api/BillingAccount";

if (!process.env.GRPC_ACL_SERVER_HOST || !process.env.GRPC_ACL_SERVER_PORT) {
  throw new Error("Missing required configurations GRPC_ACL_SERVER_HOST and GRPC_ACL_SERVER_PORT");
}

const legacyChallengeDomain = new LegacyChallengeDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);

class ChallengeDomain extends CoreOperations<Challenge, CreateChallengeInput> {
  private esClient = ElasticSearch.getESClient();

  protected toEntity(item: { [key: string]: Value }): Challenge {
    const fieldsPossiblyUsingLegacyDataTypes = [
      "legacy",
      "billing",
      "metadata",
      "task",
      "phases",
      "events",
      "terms",
      "prizeSets",
      "tags",
      "winners",
      "discussions",
      "overview",
      "groups",
      "events",
    ];

    for (const field of fieldsPossiblyUsingLegacyDataTypes) {
      if (item[field] != null && typeof item[field] === "string") {
        item[field] = JSON.parse(item[field] as string);
      }
    }

    return Challenge.fromJSON(item);
  }

  private async createLegacyChallenge(
    input: CreateChallengeInput,
    status: string,
    trackId: string,
    typeId: string,
    tags: string[],
    metadata: Metadata = new Metadata()
  ) {
    let legacyChallengeId: number | null = null;

    if (input.legacy == null || input.legacy.pureV5Task !== true) {
      const { track, subTrack, isTask, technologies } = legacyMapper.mapTrackAndType(
        trackId,
        typeId,
        tags
      );
      const directProjectId = input.legacy == null ? 0 : input.legacy.directProjectId; // v5 API can set directProjectId
      const reviewType = input.legacy == null ? "INTERNAL" : input.legacy.reviewType; // v5 API can set reviewType
      const confidentialityType =
        input.legacy == null ? "private" : input.legacy.confidentialityType; // v5 API can set confidentialityType
      input.legacy = _.assign({}, input.legacy, {
        track,
        subTrack,
        pureV5Task: isTask,
        forumId: 0,
        directProjectId,
        reviewType,
        confidentialityType,
      });

      if (status === ChallengeStatuses.Draft) {
        try {
          // prettier-ignore
          const legacyChallengeCreateInput = LegacyCreateChallengeInput.fromPartial(await legacyMapper.mapChallengeDraftUpdateInput(input));
          // prettier-ignore
          const legacyChallengeCreateResponse = await legacyChallengeDomain.create(legacyChallengeCreateInput, metadata);

          legacyMapper.backFillPhaseCriteria(input, legacyChallengeCreateInput.phases);

          if (legacyChallengeCreateResponse.kind?.$case === "integerId") {
            legacyChallengeId = legacyChallengeCreateResponse.kind.integerId;
          }
        } catch (err) {
          console.log("err", err);
          throw new StatusBuilder()
            .withCode(Status.INTERNAL)
            .withDetails("Failed to create legacy challenge")
            .build();
        }
      }
    }

    return {
      legacy: input.legacy,
      legacyChallengeId,
      phases: input.phases,
    };
  }

  public async create(input: CreateChallengeInput, metadata: Metadata): Promise<Challenge> {
    input.name = xss(input.name);

    // prettier-ignore
    const handle = metadata?.get("handle").length > 0 ? metadata?.get("handle")?.[0].toString() : "tcwebservice";

    if (Array.isArray(input.discussions)) {
      for (const discussion of input.discussions) {
        discussion.id = IdGenerator.generateUUID();
        discussion.name = xss(discussion.name.substring(0, 100));
      }
    }

    const totalPrizesInCents = this.calculateTotalPrizesInCents(input.prizeSets ?? []);
    const now = new Date().getTime();

    // Lock amount
    const baValidation: BAValidation = {
      billingAccountId: input.billing?.billingAccountId,
      status: input.status,
      totalPrizesInCents,
      prevTotalPrizesInCents: 0,
    };
    await this.lockConsumeAmount(baValidation);
    let newChallenge;
    try {
      // Begin Anti-Corruption Layer

      // prettier-ignore
      const { legacy, legacyChallengeId, phases } = await this.createLegacyChallenge(input, input.status, input.trackId, input.typeId, input.tags, metadata);

      // End Anti-Corruption Layer

      const challenge: Challenge = {
        id: IdGenerator.generateUUID(),
        created: now,
        createdBy: handle,
        updated: now,
        updatedBy: handle,
        winners: [],
        overview: {
          totalPrizes: totalPrizesInCents / 100,
          totalPrizesInCents,
        },
        ...input,
        prizeSets: (input.prizeSets ?? []).map((prizeSet) => {
          return {
            ...prizeSet,
            prizes: (prizeSet.prizes ?? []).map((prize) => {
              return {
                ...prize,
                value: prize.amountInCents! / 100,
              };
            }),
          };
        }),
        legacy,
        phases,
        legacyId: legacyChallengeId != null ? legacyChallengeId : undefined,
        description: xss(input.description ?? ""),
        privateDescription: xss(input.privateDescription ?? ""),
        metadata:
          input.metadata.map((m) => {
            let parsedValue = m.value;
            try {
              parsedValue = JSON.parse(m.value);
            } catch (e) {
              // ignore error and use unparsed value
            }
            return {
              name: m.name,
              value: parsedValue,
            };
          }) ?? [],
      };

      newChallenge = await super.create(challenge, metadata);
    } catch (err) {
      // Rollback lock amount
      await this.lockConsumeAmount(baValidation, true);
      throw err;
    }

    if (input.phases && input.phases.length && this.shouldUseScheduler(newChallenge)) {
      await ChallengeScheduler.schedule(newChallenge.id, input.phases);
    }

    return newChallenge;
  }

  public async update(
    scanCriteria: ScanCriteria[],
    input: UpdateChallengeInput_UpdateInput,
    metadata: Metadata
  ): Promise<ChallengeList> {
    const { items } = await this.scan(scanCriteria, undefined);
    let challenge = items[0] as Challenge;
    let updatedChallenge;

    // prettier-ignore
    const prevTotalPrizesInCents = this.calculateTotalPrizesInCents(challenge?.prizeSets ?? []);

    // prettier-ignore
    const totalPrizesInCents = _.isArray(input.prizeSetUpdate?.prizeSets) ? this.calculateTotalPrizesInCents(input.prizeSetUpdate?.prizeSets!) : prevTotalPrizesInCents;

    const baValidation: BAValidation = {
      challengeId: challenge?.id,
      billingAccountId: input.billing?.billingAccountId ?? challenge?.billing?.billingAccountId,
      status: input.status ?? challenge?.status,
      prevStatus: challenge?.status,
      totalPrizesInCents,
      prevTotalPrizesInCents,
    };

    await this.lockConsumeAmount(baValidation);
    try {
      // Begin Anti-Corruption Layer
      let legacyId: number | null = null;
      if (challenge.legacy!.pureV5Task !== true) {
        if (input.status === ChallengeStatuses.Draft) {
          if (items.length === 0 || items[0] == null) {
            throw new StatusBuilder()
              .withCode(Status.NOT_FOUND)
              .withDetails("Challenge not found")
              .build();
          }
          // prettier-ignore
          const createChallengeInput: CreateChallengeInput = {
            name: input.name ?? challenge!.name,
            typeId: input.typeId ?? challenge!.typeId,
            trackId: input.trackId ?? challenge!.trackId,
            billing: challenge.billing,
            legacy: _.assign({}, challenge.legacy, input.legacy),
            metadata: input.metadataUpdate != null ? input.metadataUpdate.metadata : challenge!.metadata,
            phases: input.phaseUpdate != null ? input.phaseUpdate.phases : challenge!.phases,
            events: input.eventUpdate != null ? input.eventUpdate.events : challenge!.events,
            terms: input.termUpdate != null ? input.termUpdate.terms : challenge!.terms,
            prizeSets: input.prizeSetUpdate != null ? input.prizeSetUpdate.prizeSets : challenge!.prizeSets,
            tags: input.tagUpdate != null ? input.tagUpdate.tags : challenge!.tags,
            status: input.status ?? challenge!.status,
            attachments: input.attachmentUpdate != null ? input.attachmentUpdate.attachments : challenge!.attachments,
            groups: input.groupUpdate != null ? input.groupUpdate.groups : challenge!.groups,
            discussions: input.discussionUpdate != null ? input.discussionUpdate.discussions : challenge!.discussions,
          };

          // prettier-ignore
          const { legacy, legacyChallengeId, phases } = await this.createLegacyChallenge(createChallengeInput, input.status, challenge!.trackId, challenge!.typeId, challenge!.tags, metadata);

          input.legacy = legacy;
          input.phaseUpdate = { phases };
          legacyId = legacyChallengeId;
        } else if (challenge.status !== ChallengeStatuses.New) {
          // prettier-ignore
          const updateChallengeInput = await legacyMapper.mapChallengeUpdateInput(
            challenge.legacyId!,
            challenge.legacy?.subTrack!,
            challenge.billing?.billingAccountId,
            input
          );

          if (
            updateChallengeInput.termUpdate ||
            updateChallengeInput.groupUpdate ||
            updateChallengeInput.phaseUpdate ||
            updateChallengeInput.prizeUpdate ||
            updateChallengeInput.projectStatusId ||
            !_.isEmpty(updateChallengeInput.name) ||
            !_.isEmpty(updateChallengeInput.projectInfo)
          ) {
            const { updatedCount } = await legacyChallengeDomain.update(
              updateChallengeInput,
              metadata
            );
            if (updatedCount === 0) {
              throw new StatusBuilder()
                .withCode(Status.ABORTED)
                .withDetails("Failed to update challenge")
                .build();
            }
          }
        }
      }
      // End Anti-Corruption Layer

      updatedChallenge = await super.update(
        scanCriteria,
        // prettier-ignore
        {
          name: input.name != null ? xss(input.name) : undefined,
          typeId: input.typeId != null ? input.typeId : undefined,
          trackId: input.trackId != null ? input.trackId : undefined,
          timelineTemplateId: input.timelineTemplateId != null ? input.timelineTemplateId : undefined,
          legacy: input.legacy != null ? input.legacy : undefined,
          billing: input.billing != null ? input.billing : undefined,
          description: input.description != null ? xss(input.description) : undefined,
          privateDescription: input.privateDescription != null ? xss(input.privateDescription) : undefined,
          descriptionFormat: input.descriptionFormat != null ? input.descriptionFormat : undefined,
          task: input.task != null ? input.task : undefined,
          winners: input.winnerUpdate != null ? input.winnerUpdate.winners : undefined,
          discussions: input.discussionUpdate != null ? input.discussionUpdate.discussions : undefined,
          metadata: input.metadataUpdate != null ? input.metadataUpdate.metadata : undefined,
          phases: input.phaseUpdate != null ? input.phaseUpdate.phases : undefined,
          events: input.eventUpdate != null ? input.eventUpdate.events : undefined,
          terms: input.termUpdate != null ? input.termUpdate.terms : undefined,
          prizeSets: input.prizeSetUpdate != null ? input.prizeSetUpdate.prizeSets.map((prizeSet) => {
            return {
              ...prizeSet,
              prizes: (prizeSet.prizes ?? []).map((prize) => {
                return {
                  ...prize,
                  value: prize.amountInCents! / 100,
                };
              }),
            };
          }) : undefined,
          tags: input.tagUpdate != null ? input.tagUpdate.tags : undefined,
          status: input.status != null ? input.status : undefined,
          attachments: input.attachmentUpdate != null ? input.attachmentUpdate.attachments : undefined,
          groups: input.groupUpdate != null ? input.groupUpdate.groups : undefined,
          projectId: input.projectId != null ? input.projectId : undefined,
          startDate: input.startDate != null ? input.startDate : undefined,
          endDate: input.endDate != null ? input.endDate : undefined,
          overview: input.overview != null ? {
            totalPrizes: totalPrizesInCents / 100,
            totalPrizesInCents,
          } : undefined,
          legacyId: legacyId != null ? legacyId : undefined,
        },
        metadata
      );
    } catch (err) {
      await this.lockConsumeAmount(baValidation, true);
      throw err;
    }

    if (
      input.phaseUpdate?.phases &&
      input.phaseUpdate.phases.length &&
      this.shouldUseScheduler(challenge)
    ) {
      await ChallengeScheduler.schedule(challenge.id, input.phaseUpdate.phases);
    }

    return updatedChallenge;
  }

  public async updateForAcl(
    scanCriteria: ScanCriteria[],
    input: UpdateChallengeInputForACL_UpdateInputForACL
  ): Promise<void> {
    const updatedBy = "tcwebservice"; // TODO: Extract from interceptors
    const id = scanCriteria[0].value;

    const data: IUpdateDataFromACL = {};
    const challenge = await this.lookup(DomainHelper.getLookupCriteria("id", id));

    let raiseEvent = false;

    if (!_.isUndefined(input.status)) {
      data.status = input.status;
      if (input.status === ChallengeStatuses.Completed) {
        raiseEvent = true;
      }
    }

    if (!_.isUndefined(input.phases)) {
      data.phases = input.phases.phases;
      data.currentPhase = input.currentPhase;
      data.registrationEndDate = input.registrationStartDate;
      data.registrationEndDate = input.registrationEndDate;
      data.submissionStartDate = input.submissionStartDate;
      data.submissionEndDate = input.submissionEndDate;
      data.startDate = input.startDate;
      data.endDate = input.endDate;
    }

    if (!_.isUndefined(input.currentPhaseNames)) {
      data.currentPhaseNames = input.currentPhaseNames.currentPhaseNames;
    }

    if (!_.isUndefined(input.legacy)) {
      data.legacy = _.assign({}, challenge?.legacy, input.legacy);
    }

    if (!_.isUndefined(input.prizeSets)) {
      data.prizeSets = input.prizeSets.prizeSets.map((prizeSet) => {
        return {
          ...prizeSet,
          prizes: prizeSet.prizes.map((prize) => ({
            ...prize,
            value: prize.amountInCents! / 100,
          })),
        };
      });
    }

    if (!_.isUndefined(input.overview)) {
      data.overview = {
        ...input.overview,
        totalPrizes: input.overview.totalPrizesInCents! / 100,
      };
    }

    if (!_.isUndefined(input.winners)) {
      data.winners = input.winners.winners;
      raiseEvent = true;
    }

    data.updated = new Date();
    data.updatedBy = updatedBy;

    // prettier-ignore
    const prevTotalPrizesInCents = this.calculateTotalPrizesInCents(challenge?.prizeSets ?? []);
    // prettier-ignore
    const totalPrizesInCents = _.isArray(data.prizeSets) ? this.calculateTotalPrizesInCents(data.prizeSets!) : prevTotalPrizesInCents;

    const baValidation: BAValidation = {
      challengeId: challenge?.id,
      billingAccountId: challenge?.billing?.billingAccountId,
      status: input.status ?? challenge?.status,
      prevStatus: challenge?.status,
      totalPrizesInCents,
      prevTotalPrizesInCents,
    };

    await this.lockConsumeAmount(baValidation);
    const dynamoUpdate = _.omit(data, [
      "currentPhase",
      "currentPhaseNames",
      "registrationStartDate",
      "registrationEndDate",
      "submissionStartDate",
      "submissionEndDate",
    ]);

    try {
      await super.update(scanCriteria, dynamoUpdate);
    } catch (err) {
      await this.lockConsumeAmount(baValidation, true);
      throw err;
    }

    if (input.phases?.phases && input.phases.phases.length && this.shouldUseScheduler(challenge!)) {
      await ChallengeScheduler.schedule(id, input.phases.phases);
    }

    if (!_.isUndefined(input.phaseToClose) && this.shouldUseScheduler(challenge!)) {
      await ChallengeScheduler.schedulePhaseOperation(id, input.phaseToClose, "close");
    }

    this.cleanPrizeSets(data.prizeSets, data.overview);

    await this.esClient.update({
      index: ES_INDEX,
      type: process.env.OPENSEARCH === "true" ? undefined : "_doc",
      refresh: ES_REFRESH,
      id,
      body: {
        doc: data,
      },
    });

    if (raiseEvent) {
      let eventPayload;
      if (_.isUndefined(challenge)) {
        eventPayload = await this.lookup(DomainHelper.getLookupCriteria("id", id));
      } else {
        eventPayload = _.assign({}, challenge, dynamoUpdate);
      }
      await BusApi.postBusEvent(Topics.ChallengeUpdated, eventPayload);
    }
  }

  public async delete(lookupCriteria: LookupCriteria): Promise<ChallengeList> {
    const challenge = await this.lookup(lookupCriteria);

    // prettier-ignore
    const prevTotalPrizesInCents = this.calculateTotalPrizesInCents(challenge?.prizeSets ?? []);

    const baValidation: BAValidation = {
      challengeId: challenge?.id,
      billingAccountId: challenge?.billing?.billingAccountId,
      status: ChallengeStatuses.Deleted,
      prevStatus: challenge?.status,
      prevTotalPrizesInCents,
      totalPrizesInCents: prevTotalPrizesInCents,
    };

    await this.lockConsumeAmount(baValidation);

    try {
      return super.delete(lookupCriteria);
    } catch (err) {
      await this.lockConsumeAmount(baValidation, true);
      throw err;
    }
  }

  private async lockConsumeAmount(
    baValidation: BAValidation,
    rollback: boolean = false
  ): Promise<void> {
    console.log("Update BA validation:", baValidation);
    if (!_.isNumber(baValidation.billingAccountId)) {
      return;
    }

    let amount: number;
    if (
      baValidation.status === baValidation.prevStatus ||
      baValidation.status === ChallengeStatuses.New ||
      baValidation.status === ChallengeStatuses.Draft ||
      baValidation.status === ChallengeStatuses.Active ||
      baValidation.status === ChallengeStatuses.Approved
    ) {
      // Update lock amount
      amount = (baValidation.totalPrizesInCents - baValidation.prevTotalPrizesInCents) / 100;

      // prettier-ignore
      await BillingAccount.lockAmount(baValidation.billingAccountId, rollback ? -amount : amount);
    } else if (baValidation.status === ChallengeStatuses.Completed) {
      // Challenge completed, set consumed amount
      amount = baValidation.totalPrizesInCents / 100;

      // prettier-ignore
      await BillingAccount.consumeAmount(baValidation.billingAccountId, rollback ? -amount : amount);
    } else if (
      baValidation.status === ChallengeStatuses.Deleted ||
      baValidation.status === ChallengeStatuses.Canceled ||
      baValidation.status === ChallengeStatuses.CancelledFailedReview ||
      baValidation.status === ChallengeStatuses.CancelledFailedScreening ||
      baValidation.status === ChallengeStatuses.CancelledZeroSubmissions ||
      baValidation.status === ChallengeStatuses.CancelledWinnerUnresponsive ||
      baValidation.status === ChallengeStatuses.CancelledClientRequest ||
      baValidation.status === ChallengeStatuses.CancelledRequirementsInfeasible ||
      baValidation.status === ChallengeStatuses.CancelledZeroRegistrations ||
      baValidation.status === ChallengeStatuses.CancelledPaymentFailed
    ) {
      // Challenge canceled, update lock amount
      amount = baValidation.prevTotalPrizesInCents / 100;

      // prettier-ignore
      await BillingAccount.lockAmount(baValidation.billingAccountId, rollback ? amount : -amount);
    }
  }

  public async getPhaseFacts(phaseFactRequest: PhaseFactRequest): Promise<PhaseFactResponse> {
    // Just a pass through to the legacy domain - this is fine for now, but ideally these should be handled in the "future" review-api
    return legacyChallengeDomain.getPhaseFacts(phaseFactRequest);
  }

  private calculateTotalPrizesInCents(prizeSets: Challenge_PrizeSet[]): number {
    let totalPrizes = 0;
    if (prizeSets) {
      for (const { prizes, type } of prizeSets) {
        if (_.toLower(type) === "placement") {
          for (const { amountInCents } of prizes) {
            totalPrizes += amountInCents!;
          }
        }
      }
    }

    return totalPrizes;
  }

  private cleanPrizeSets(prizeSets?: Challenge_PrizeSet[], overview?: Challenge_Overview) {
    _.forEach(prizeSets, (prizeSet) => {
      _.forEach(prizeSet.prizes, (prize) => {
        if (prize.amountInCents != null) {
          delete prize.amountInCents;
        }
      });
    });
    if (overview && !_.isUndefined(overview.totalPrizesInCents)) {
      delete overview.totalPrizesInCents;
    }
  }

  private shouldUseScheduler(challenge: Challenge) {
    // Use scheduler only for legacy code F2Fs
    return challenge?.legacy?.subTrack === "FIRST_2_FINISH" && !challenge?.legacy.pureV5Task;
  }
}

interface BAValidation {
  challengeId?: string;
  billingAccountId?: number;
  prevStatus?: string;
  status?: string;
  prevTotalPrizesInCents: number;
  totalPrizesInCents: number;
}

interface IUpdateDataFromACL {
  status?: string | undefined;
  phases?: Challenge_Phase[] | undefined;
  currentPhase?: Challenge_Phase | undefined;
  currentPhaseNames?: string[] | undefined;
  registrationStartDate?: string | undefined;
  registrationEndDate?: string | undefined;
  submissionStartDate?: string | undefined;
  submissionEndDate?: string | undefined;
  startDate?: string | undefined;
  endDate?: string | undefined;
  legacy?: Challenge_Legacy | undefined;
  prizeSets?: Challenge_PrizeSet[] | undefined;
  overview?: Challenge_Overview | undefined;
  winners?: UpdateChallengeInputForACL_WinnerACL[] | undefined;
  updated?: Date;
  updatedBy?: string;
}

export default new ChallengeDomain(ChallengeSchema);
