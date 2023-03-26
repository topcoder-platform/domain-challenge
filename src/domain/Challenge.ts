import { ChallengeDomain as LegacyChallengeDomain } from "@topcoder-framework/domain-acl";
import { DomainHelper } from "@topcoder-framework/lib-common";
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
import { ChallengeStatuses, ES_INDEX, ES_REFRESH } from "../common/Constants";
import ElasticSearch from "../helpers/ElasticSearch";
import { ScanCriteria } from "../models/common/common";
import legacyMapper from "../util/LegacyMapper";

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
    for (const key of ["phases", "terms", "tags", "metadata", "events", "prizeSets"]) {
      try {
        if (key === "metadata") {
          if (item["metadata"].kind?.$case === "listValue") {
            item["metadata"] = {
              kind: {
                $case: "listValue",
                listValue: item["metadata"].kind.listValue.map((v) => {
                  try {
                    return JSON.stringify(JSON.parse(v.toString()));
                  } catch (e) {
                    return v;
                  }
                }),
              },
            };
          }
        }

        item[key] = JSON.parse(item[key].toString());
      } catch (e) {
        // do nothing
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

      input.legacy = {
        ...input.legacy,
        track,
        subTrack,
        pureV5Task: isTask,
        forumId: 0,
        directProjectId: input.legacy == null ? 0 : input.legacy.directProjectId, // v5 API can set directProjectId
        reviewType: input.legacy == null ? "INTERNAL" : input.legacy.reviewType, // v5 API can set reviewType
        confidentialityType: input.legacy == null ? "private" : input.legacy.confidentialityType, // v5 API can set confidentialityType
      };

      if (status === ChallengeStatuses.Draft) {
        try {
          // prettier-ignore
          const legacyChallengeCreateInput = LegacyCreateChallengeInput.fromPartial(await legacyMapper.mapChallengeDraftUpdateInput(input));
          // prettier-ignore
          const legacyChallengeCreateResponse = await legacyChallengeDomain.create(legacyChallengeCreateInput, metadata);

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

    const totalPrizes = this.calculateTotalPrizesInCents(input.prizeSets ?? []);
    const now = new Date().getTime();

    // Begin Anti-Corruption Layer

    // prettier-ignore
    const { legacy, legacyChallengeId } = await this.createLegacyChallenge(input, input.status, input.trackId, input.typeId, input.tags, metadata);

    // End Anti-Corruption Layer

    const challenge: Challenge = {
      id: IdGenerator.generateUUID(),
      created: now,
      createdBy: handle,
      updated: now,
      updatedBy: handle,
      winners: [],
      overview: {
        totalPrizes: totalPrizes / 100,
        totalPrizesInCents: totalPrizes,
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

    return super.create(challenge, metadata);
  }

  public async update(
    scanCriteria: ScanCriteria[],
    input: UpdateChallengeInput_UpdateInput,
    metadata: Metadata
  ): Promise<ChallengeList> {
    const { items } = await this.scan(scanCriteria, undefined);
    let challenge = items[0] as Challenge;

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
        const { legacy, legacyChallengeId } = await this.createLegacyChallenge(createChallengeInput, input.status, challenge!.trackId, challenge!.typeId, challenge!.tags, metadata);

        input.legacy = legacy;
        legacyId = legacyChallengeId;
      } else if (challenge.status !== ChallengeStatuses.New) {
        // prettier-ignore
        const updateChallengeInput = await legacyMapper.mapChallengeUpdateInput(challenge.legacyId!, challenge.legacy?.subTrack!, input);

        const { updatedCount } = await legacyChallengeDomain.update(updateChallengeInput, metadata);

        if (updatedCount === 0) {
          throw new StatusBuilder()
            .withCode(Status.ABORTED)
            .withDetails("Failed to update challenge")
            .build();
        }
      }
    }
    // End Anti-Corruption Layer

    // prettier-ignore
    const totalPrizesInCents = this.calculateTotalPrizesInCents(input.prizeSetUpdate?.prizeSets ?? challenge.prizeSets ?? []);

    return super.update(
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
  }

  public async updateForAcl(
    scanCriteria: ScanCriteria[],
    input: UpdateChallengeInputForACL_UpdateInputForACL
  ): Promise<void> {
    const updatedBy = "tcwebservice"; // TODO: Extract from interceptors
    let challenge: Challenge | undefined = undefined;
    const id = scanCriteria[0].value;
    const data: IUpdateDataFromACL = {};
    if (!_.isUndefined(input.status)) {
      data.status = input.status;
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
      if (_.isUndefined(challenge)) {
        try {
          challenge = await this.lookup(DomainHelper.getLookupCriteria("id", id));
        } catch (err) {
          console.error(err);
          throw err;
        }
      }
      data.legacy = _.assign({}, challenge.legacy, input.legacy);
    }

    if (!_.isUndefined(input.prizeSets)) {
      if (_.isUndefined(challenge)) {
        challenge = await this.lookup(DomainHelper.getLookupCriteria("id", id));
      }
      const prizeSets = _.filter(
        [
          ..._.intersectionBy(input.prizeSets.prizeSets, challenge.prizeSets, "type"),
          ..._.differenceBy(challenge.prizeSets, input.prizeSets.prizeSets, "type"),
        ],
        (entry) => entry.type !== "copilot"
      );
      const copilotPayments = _.filter(
        input.prizeSets.prizeSets,
        (entry) => entry.type === "copilot"
      );
      if (!_.isEmpty(copilotPayments)) {
        prizeSets.push(...copilotPayments);
      }
      data.prizeSets = prizeSets.map((prizeSet) => {
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
    }

    data.updated = new Date();
    data.updatedBy = updatedBy;

    await super.update(
      scanCriteria,
      _.omit(data, [
        "currentPhase",
        "currentPhaseNames",
        "registrationStartDate",
        "registrationEndDate",
        "submissionStartDate",
        "submissionEndDate",
      ])
    );

    // if (input.phases?.phases && input.phases.phases.length) {
    //   await ChallengeScheduler.schedule({
    //     action: "schedule",
    //     challengeId: id,
    //     phases: input.phases.phases.map((phase) => ({
    //       name: phase.name,
    //       scheduledStartDate: phase.scheduledStartDate,
    //       scheduledEndDate: phase.scheduledEndDate,
    //     })),
    //   });
    // }

    await this.esClient.update({
      index: ES_INDEX,
      type: process.env.OPENSEARCH === "true" ? undefined : "_doc",
      refresh: ES_REFRESH,
      id,
      body: {
        doc: data,
      },
    });
  }

  private calculateTotalPrizesInCents(prizeSets: Challenge_PrizeSet[]): number {
    let totalPrizes = 0;
    if (prizeSets) {
      for (const { prizes } of prizeSets) {
        for (const { amountInCents } of prizes) {
          totalPrizes += amountInCents!;
        }
      }
    }

    return totalPrizes;
  }
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

export default new ChallengeDomain(
  ChallengeSchema.tableName,
  ChallengeSchema.attributes,
  ChallengeSchema.indices
);
