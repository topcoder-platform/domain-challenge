import {
  ChallengeDomain as LegacyChallengeDomain,
  CreateChallengeInput as LegacyCreateChallengeInput,
} from "@topcoder-framework/domain-acl";
import { DomainHelper, PhaseFactRequest, PhaseFactResponse } from "@topcoder-framework/lib-common";
import { sanitize } from "../helpers/Sanitizer";
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
  UpdateChallengeInputForACL_PaymentACL,
  UpdateChallengeInputForACL_UpdateInputForACL,
  UpdateChallengeInputForACL_WinnerACL,
  UpdateChallengeInput_UpdateInput,
} from "../models/domain-layer/challenge/challenge";

import { ChallengeSchema } from "../schema/Challenge";
import { Metadata, StatusBuilder } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";
import _ from "lodash";
import {
  ChallengeStatuses,
  ES_INDEX,
  ES_REFRESH,
  PrizeSetTypes,
  TGBillingAccounts,
  Topics,
} from "../common/Constants";
import BusApi from "../helpers/BusApi";
import OpenSearch from "../helpers/OpenSearch";
import { LookupCriteria, ScanCriteria } from "../models/common/common";
import legacyMapper from "../util/LegacyMapper";
import ChallengeScheduler from "../util/ChallengeScheduler";
import { BAValidation, lockConsumeAmount } from "../api/BillingAccount";
import { ChallengeEstimator } from "../util/ChallengeEstimator";
import { V5_TRACK_IDS_TO_NAMES, V5_TYPE_IDS_TO_NAMES } from "../common/ConversionMap";
import FinanceApi, { PaymentDetail } from "../util/FinanceApi";
import { getChallengeResources, loadInformixSubmissions } from "../api/v5Api";
import m2mToken from "../helpers/MachineToMachineToken";

if (!process.env.GRPC_ACL_SERVER_HOST || !process.env.GRPC_ACL_SERVER_PORT) {
  throw new Error("Missing required configurations GRPC_ACL_SERVER_HOST and GRPC_ACL_SERVER_PORT");
}

const legacyChallengeDomain = new LegacyChallengeDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);

const NUM_REVIEWERS = 2;
const EXPECTED_REVIEWS_PER_REVIEWER = 3;
const ROLE_COPILOT = process.env.ROLE_COPILOT ?? "cfe12b3f-2a24-4639-9d8b-ec86726f76bd";
const PURE_V5_CHALLENGE_TEMPLATE_IDS = process.env.PURE_V5_CHALLENGE_TEMPLATE_IDS
  ? JSON.parse(process.env.PURE_V5_CHALLENGE_TEMPLATE_IDS)
  : ["517e76b0-8824-4e72-9b48-a1ebde1793a8"];

class ChallengeDomain extends CoreOperations<Challenge, CreateChallengeInput> {
  private osClient = OpenSearch.getOSClient();

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
      "payments",
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
    metadata: Metadata = new Metadata(),
    id: string = ""
  ) {
    let legacyChallengeId: number | null = null;
    const trackAndTypeMapped = legacyMapper.mapTrackAndType(trackId, typeId, tags);
    // Skip creating legacy challenge if
    // 1. challenge is a Pure V5 Task, or
    // 2. challenge is not a draft, or
    // 3. challenge is a draft but track and type can not be mapped - indicating that challenge is not a legacy challenge
    if (trackAndTypeMapped != null && (input.legacy == null || !this.isPureV5Challenge(input))) {
      const { track, subTrack, isTask } = trackAndTypeMapped;
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
          const legacyChallengeCreateInput = LegacyCreateChallengeInput.fromPartial(await legacyMapper.mapChallengeDraftUpdateInput(input, id));
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
    metadata.remove("content-length");
    input.name = sanitize(input.name);

    // prettier-ignore
    const handle = metadata?.get("handle").length > 0 ? metadata?.get("handle")?.[0].toString() : "tcwebservice";
    const prizeType: "USD" | "POINT" =
      (input.prizeSets?.[0]?.prizes?.[0]?.type as "USD" | "POINT") ?? null;

    if (Array.isArray(input.discussions)) {
      for (const discussion of input.discussions) {
        discussion.id = IdGenerator.generateUUID();
        discussion.name = sanitize(discussion.name.substring(0, 100));
      }
    }
    const track = V5_TRACK_IDS_TO_NAMES[input.trackId];
    const type = V5_TYPE_IDS_TO_NAMES[input.typeId];

    const estimatedTotalInCents =
      prizeType === "USD"
        ? new ChallengeEstimator(input.prizeSets ?? [], {
            track,
            type,
          }).estimateCost(EXPECTED_REVIEWS_PER_REVIEWER, NUM_REVIEWERS)
        : null;

    const now = new Date().getTime();
    const challengeId = IdGenerator.generateUUID();

    let baValidationMarkup = input.billing?.markup;
    if (
      input.task?.isTask &&
      input.status == ChallengeStatuses.Draft &&
      input.billing?.clientBillingRate != null
    ) {
      baValidationMarkup = input.billing?.clientBillingRate;
    }

    // Lock amount
    const baValidation: BAValidation | null =
      estimatedTotalInCents != null
        ? {
            billingAccountId: input.billing?.billingAccountId,
            challengeId,
            markup: baValidationMarkup,
            status: input.status,
            totalPrizesInCents: estimatedTotalInCents,
            prevTotalPrizesInCents: 0,
          }
        : null;

    let newChallenge: Challenge;
    try {
      // Begin Anti-Corruption Layer

      // prettier-ignore
      const { legacy, legacyChallengeId, phases } = await this.createLegacyChallenge(input, input.status, input.trackId, input.typeId, input.tags, metadata);

      // End Anti-Corruption Layer

      const totalPlacementPrizes = _.sumBy(
        _.find(input.prizeSets ?? [], {
          type: PrizeSetTypes.ChallengePrizes,
        })?.prizes ?? [],
        prizeType === "USD" ? "amountInCents" : "value"
      );

      const challenge: Challenge = {
        id: challengeId,
        created: now,
        createdBy: handle,
        updated: now,
        updatedBy: handle,
        billing: input.billing ?? undefined,
        winners: [],
        payments: [],
        overview: {
          type: prizeType,
          totalPrizes: prizeType === "USD" ? totalPlacementPrizes / 100 : totalPlacementPrizes,
          totalPrizesInCents: prizeType === "USD" ? totalPlacementPrizes : undefined,
        },
        ...input,
        prizeSets: (input.prizeSets ?? []).map((prizeSet) => {
          return {
            ...prizeSet,
            prizes: (prizeSet.prizes ?? []).map((prize) => {
              return {
                ...prize,
                value: prizeType === "USD" ? prize.amountInCents! / 100 : prize.value,
              };
            }),
          };
        }),
        legacy,
        phases,
        legacyId: legacyChallengeId ?? undefined,
        description: sanitize(input.description ?? "", input.descriptionFormat),
        privateDescription: sanitize(input.privateDescription ?? "", input.descriptionFormat),
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
      // await sendHarmonyEvent("CREATE", "Challenge", newChallenge, input.billing?.billingAccountId!);
    } catch (err) {
      throw err;
    }

    if (input.phases.length && this.shouldUseScheduler(newChallenge)) {
      await ChallengeScheduler.schedule(newChallenge.id, input.phases);
    }

    return newChallenge;
  }

  public async update(
    scanCriteria: ScanCriteria[],
    input: UpdateChallengeInput_UpdateInput,
    metadata: Metadata
  ): Promise<ChallengeList> {
    metadata.remove("content-length");
    const { items } = await this.scan(scanCriteria, undefined);
    const challenge = items[0] as Challenge;
    let updatedChallenge;

    const track = V5_TRACK_IDS_TO_NAMES[challenge.trackId];
    const type = V5_TYPE_IDS_TO_NAMES[challenge.typeId];

    console.log(`Current challenge: ${JSON.stringify(challenge)}`);
    const existingPrizeType: string | null = challenge?.prizeSets?.[0]?.prizes?.[0]?.type ?? null;
    const prizeType: string | null =
      input.prizeSetUpdate?.prizeSets?.[0]?.prizes?.[0]?.type ?? null;

    if (existingPrizeType != null && prizeType != null && existingPrizeType !== prizeType) {
      throw new StatusBuilder()
        .withCode(Status.INVALID_ARGUMENT)
        .withDetails("Prize type can not be changed")
        .build();
    }

    const isLaunching = input.status?.toLowerCase().indexOf("active") !== -1;
    // PM-1141
    // If we're updating prizes on an active challenge, attempt to lock the budget
    // If we're launching, attempt to lock the budget
    let shouldLockBudget = (input.prizeSetUpdate != null && challenge?.status.toLowerCase()=="active") || isLaunching;
    const isCancelled = input.status?.toLowerCase().indexOf("cancelled") !== -1;
    let generatePayments = false;
    let baValidation: BAValidation | null = null;

    // Lock budget only if prize set is updated
    const prevTotalPrizesInCents =
      existingPrizeType == "USD"
        ? new ChallengeEstimator(challenge?.prizeSets ?? [], {
            track,
            type,
          }).estimateCost(EXPECTED_REVIEWS_PER_REVIEWER, NUM_REVIEWERS) // These are estimates, fetch reviewer number using constraint in review phase
        : 0;
    
    if ((prizeType === "USD" || existingPrizeType === "USD") && (shouldLockBudget || isCancelled)) {
      const totalPrizesInCents = _.isArray(input.prizeSetUpdate?.prizeSets)
        ? new ChallengeEstimator(input.prizeSetUpdate?.prizeSets! ?? [], {
            track,
            type,
          }).estimateCost(EXPECTED_REVIEWS_PER_REVIEWER, NUM_REVIEWERS) // These are estimates, fetch reviewer number using constraint in review phase
        : prevTotalPrizesInCents;

      baValidation = {
        challengeId: challenge?.id,
        billingAccountId: input.billing?.billingAccountId ?? challenge?.billing?.billingAccountId,
        markup:
          input.billing?.markup !== undefined && input.billing?.markup !== null
            ? input.billing?.markup
            : challenge?.billing?.markup,
        status: input.status ?? challenge?.status,
        prevStatus: challenge?.status,
        totalPrizesInCents,
        prevTotalPrizesInCents,
      };
      
      await lockConsumeAmount(baValidation);
    }

    const totalPlacementPrize = _.sumBy(
      _.find(input.prizeSetUpdate?.prizeSets ?? [], {
        type: PrizeSetTypes.ChallengePrizes,
      })?.prizes ?? [],
      prizeType == "USD" ? "amountInCents" : "value"
    );

    try {
      let legacyId: number | null = null;
      if (!this.isPureV5Challenge(challenge)) {
        // Begin Anti-Corruption Layer
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
            skills: input.skillUpdate != null ? input.skillUpdate.skills : challenge!.skills,
          };

          // prettier-ignore
          const { legacy, legacyChallengeId, phases } = await this.createLegacyChallenge(createChallengeInput, input.status, challenge!.trackId, challenge!.typeId, challenge!.tags, metadata, challenge.id);

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
        // End Anti-Corruption Layer
      } else {
        // This is a Pure V5 Challenge
        if (
          input.status === ChallengeStatuses.Completed &&
          challenge.status !== ChallengeStatuses.Completed
        ) {
          if (
            input.winnerUpdate == null ||
            input.winnerUpdate.winners == null ||
            input.winnerUpdate.winners.length === 0
          ) {
            throw new StatusBuilder()
              .withCode(Status.INVALID_ARGUMENT)
              .withDetails("A Task can not be completed without winners")
              .build();
          }

          const placementPrizes = challenge.prizeSets.find((p) => p.type === "placement")?.prizes;
          if (
            placementPrizes == null ||
            placementPrizes.length === 0 ||
            placementPrizes.length < input.winnerUpdate!.winners!.length
          ) {
            throw new StatusBuilder()
              .withCode(Status.INVALID_ARGUMENT)
              .withDetails("Task has incorrect number of placement prizes")
              .build();
          }

          input.paymentUpdate = {
            payments: input.winnerUpdate!.winners!.map((winner, i) => {
              const index = winner.placement == null ? i : winner.placement - 1;
              const prize = placementPrizes[index].amountInCents! / 100;

              return {
                amount: prize,
                handle: winner.handle,
                type: "placement",
                userId: winner.userId,
              };
            }),
          };

          const copilotPrizes = challenge.prizeSets.find((p) => p.type === "copilot")?.prizes;
          if (copilotPrizes != null && copilotPrizes.length > 0) {
            const copilot = await getChallengeResources(
              challenge.id,
              ROLE_COPILOT,
              await m2mToken.getM2MToken()
            );
            if (copilot.length === 0) {
              throw new StatusBuilder()
                .withCode(Status.INVALID_ARGUMENT)
                .withDetails("Task has a copilot prize but no copilot")
                .build();
            }

            input.paymentUpdate.payments.push({
              amount: copilotPrizes[0].amountInCents! / 100,
              type: "copilot",
              handle: copilot[0].memberHandle,
              userId: copilot[0].memberId,
            });
          }

          generatePayments = input.paymentUpdate != null && input.paymentUpdate.payments.length > 0;

          if(!challenge?.legacy?.pureV5Task){
            // Load the submission and review data from Informix into ES for caching purposes. This just makes a call to the submission
            // API with a "loadLegacy=true" flag, which will force a load from Informix --> ES.
            await loadInformixSubmissions(
              challenge.id,
              await m2mToken.getM2MToken()
            );
          }
        }
      }

      // prettier-ignore
      const dataToUpdate = {
        name: input.name != null ? sanitize(input.name) : undefined,
        typeId: input.typeId != null ? input.typeId : undefined,
        trackId: input.trackId != null ? input.trackId : undefined,
        timelineTemplateId: input.timelineTemplateId != null ? input.timelineTemplateId : undefined,
        legacy: input.legacy != null ? input.legacy : undefined,
        billing: input.billing != null ? input.billing : undefined,
        description: input.description != null ? sanitize(input.description, input.descriptionFormat ?? challenge.descriptionFormat) : undefined,
        privateDescription: input.privateDescription != null ? sanitize(input.privateDescription, input.descriptionFormat ?? challenge.descriptionFormat) : undefined,
        descriptionFormat: input.descriptionFormat != null ? input.descriptionFormat : undefined,
        task: input.task != null ? input.task : undefined,
        winners: input.winnerUpdate != null ? input.winnerUpdate.winners : undefined,
        payments: input.paymentUpdate != null ? input.paymentUpdate.payments : undefined,
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
                value: prizeType === 'USD' ? prize.amountInCents! / 100 : prize.value,
              };
            }),
          };
        }) : undefined,
        tags: input.tagUpdate != null ? input.tagUpdate.tags : undefined,
        skills: input.skillUpdate != null ? input.skillUpdate.skills : undefined,
        status: input.status ?? undefined,
        attachments: input.attachmentUpdate != null ? input.attachmentUpdate.attachments : undefined,
        groups: input.groupUpdate != null ? input.groupUpdate.groups : undefined,
        projectId: input.projectId ?? undefined,
        startDate: input.startDate ?? undefined,
        endDate: input?.status === ChallengeStatuses.Completed ? new Date().toISOString() : (input.endDate ?? undefined),
        overview: input.overview != null ? {
          type: prizeType,
          totalPrizes: prizeType === 'USD' ? totalPlacementPrize / 100 : totalPlacementPrize,
          totalPrizesInCents: prizeType === 'USD' ? totalPlacementPrize: undefined,
        } : undefined,
        legacyId: legacyId ?? undefined,
        constraints: input.constraints ?? undefined,
      };

      updatedChallenge = await super.update(scanCriteria, dataToUpdate, metadata);

      // const newChallenge = updatedChallenge.items[0];
      // if (newChallenge.billing?.billingAccountId !== challenge?.billing?.billingAccountId) {
      //   // For a New/Draft challenge, it might miss billing account id
      //   // However when challenge activates, the billing account id will be provided (challenge-api validates it)
      //   // In such case, send a CREATE event with whole challenge data (it's fine for search-indexer since it upserts for CREATE)
      //   // Otherwise, the outer customer specified by the billing account id (like Topgear) will never receive a challenge CREATE event
      //   await sendHarmonyEvent(
      //     "CREATE",
      //     "Challenge",
      //     newChallenge,
      //     newChallenge.billing?.billingAccountId
      //   );
      // } else {
      //   // Send only the updated data
      //   // Some field like chanllege description could be big, don't include them if they're not actually updated
      //   await sendHarmonyEvent(
      //     "UPDATE",
      //     "Challenge",
      //     { ...dataToUpdate, id: newChallenge.id },
      //     newChallenge.billing?.billingAccountId
      //   );
      // }
    } catch (err) {
      if (baValidation != null) {
        await lockConsumeAmount(baValidation, true);
      }
      throw err;
    }

    if (
      input.phaseUpdate?.phases &&
      input.phaseUpdate.phases.length &&
      this.shouldUseScheduler(challenge)
    ) {
      await ChallengeScheduler.schedule(challenge.id, input.phaseUpdate.phases);
    }

    // TODO: This is temporary until we have a challenge processor that handles challenge completion events by subscribing to Harmony
    if (generatePayments) {
      const completedChallenge = updatedChallenge.items[0];
      const totalAmount = await this.generatePayments(
        completedChallenge.id,
        completedChallenge.billing?.billingAccountId ?? 0,
        completedChallenge.legacy?.subTrack ?? "Task",
        completedChallenge.name,
        completedChallenge.payments,
        completedChallenge.billing?.markup ?? 0,
      );
      baValidation = {
        challengeId: challenge?.id,
        billingAccountId: input.billing?.billingAccountId ?? challenge?.billing?.billingAccountId,
        markup:
          input.billing?.markup !== undefined && input.billing?.markup !== null
            ? input.billing?.markup
            : challenge?.billing?.markup,
        status: input.status ?? challenge?.status,
        prevStatus: challenge?.status,
        totalPrizesInCents: totalAmount * 100,
        prevTotalPrizesInCents,
      };
      if (challenge.billing?.clientBillingRate != null) {
        baValidation.markup = challenge.billing?.clientBillingRate;
      }
      console.log("Task Completed. Unlocking consumed budget", baValidation);
      await lockConsumeAmount(baValidation);
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
    const prizeType = challenge?.prizeSets?.[0]?.prizes?.[0]?.type;

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

      if (!_.isUndefined(input.payments)) {
        if (prizeType === "USD") {
          data.payments = input.payments.payments;
        } else {
          console.log("Point Winners", data.winners);
          data.payments = data.winners.map((winner) => {
            const placementPrizes = challenge.prizeSets.find(
              (p) => p.type === PrizeSetTypes.ChallengePrizes
            )?.prizes;

            return {
              amount: placementPrizes?.[winner.placement - 1]?.value ?? 0,
              type: "CONTEST_PAYMENT",
              userId: winner.userId,
              handle: winner.handle,
            };
          });

          const reviewerPayments = input.payments.payments
            .filter((f) => f.type === "iterative reviewer")
            .map((p) => ({
              amount: p.amount,
              type: "REVIEW_BOARD_PAYMENT",
              userId: p.userId,
              handle: p.handle,
            }));

          if (reviewerPayments.length > 0) {
            data.payments = data.payments.concat(reviewerPayments);
          }

          console.log("Final list of payments", data.payments);
        }
      }

      raiseEvent = true;
    }

    data.updated = new Date();
    data.updatedBy = updatedBy;

    const dynamoUpdate = _.omit(data, [
      "currentPhase",
      "currentPhaseNames",
      "registrationStartDate",
      "registrationEndDate",
      "submissionStartDate",
      "submissionEndDate",
    ]);

    const challengeStatus = input.status ?? challenge?.status;
    const track = V5_TRACK_IDS_TO_NAMES[challenge?.trackId ?? ""];
    const type = V5_TYPE_IDS_TO_NAMES[challenge?.typeId ?? ""];

    let baValidation: BAValidation | null = null;

    if (prizeType === "USD") {
      const prevTotalPrizesInCents = new ChallengeEstimator(challenge?.prizeSets ?? [], {
        track,
        type,
      }).estimateCost(EXPECTED_REVIEWS_PER_REVIEWER, NUM_REVIEWERS); // These are estimates, fetch reviewer number using constraint in review phase
      const totalPrizesInCents = _.isArray(data.prizeSets)
        ? new ChallengeEstimator(data.prizeSets ?? [], {
            track,
            type,
          }).estimateCost(EXPECTED_REVIEWS_PER_REVIEWER, NUM_REVIEWERS) // These are estimates, fetch reviewer number using constraint in review phase
        : prevTotalPrizesInCents;

      baValidation = {
        challengeId: challenge?.id,
        billingAccountId: challenge?.billing?.billingAccountId,
        markup: challenge?.billing?.markup,
        status: challengeStatus,
        prevStatus: challenge?.status,
        totalPrizesInCents,
        prevTotalPrizesInCents,
      };
    }

    if (challengeStatus != ChallengeStatuses.Completed) {
      if (baValidation != null) await lockConsumeAmount(baValidation);
      try {
        await super.update(scanCriteria, dynamoUpdate);
        // await sendHarmonyEvent(
        //   "UPDATE",
        //   "Challenge",
        //   { ...data, id },
        //   challenge.billing?.billingAccountId
        // );
      } catch (err) {
        if (baValidation != null) await lockConsumeAmount(baValidation, true);
        throw err;
      }
    } else {
      await super.update(scanCriteria, dynamoUpdate);
      // await sendHarmonyEvent(
      //   "UPDATE",
      //   "Challenge",
      //   { ...data, id },
      //   challenge.billing?.billingAccountId
      // );
      console.log("Challenge Completed");

      const completedChallenge = await this.lookup(DomainHelper.getLookupCriteria("id", id));

      if (prizeType == "USD") {
        console.log("Payments to Generate", completedChallenge.payments);
        const totalAmount = await this.generatePayments(
          completedChallenge.id,
          completedChallenge.billing?.billingAccountId ?? 0,
          completedChallenge.legacy?.subTrack ?? "Task",
          completedChallenge.name,
          completedChallenge.payments,
          completedChallenge.billing?.markup ?? 0,
        );

        if (baValidation != null) {
          baValidation.totalPrizesInCents = totalAmount * 100;
          await lockConsumeAmount(baValidation);
        }
      } else {
        console.log("Need to generate POINTS");
      }
    }

    if (input.phases?.phases && input.phases.phases.length && this.shouldUseScheduler(challenge!)) {
      await ChallengeScheduler.schedule(id, input.phases.phases);
    }

    if (!_.isUndefined(input.phaseToClose) && this.shouldUseScheduler(challenge!)) {
      await ChallengeScheduler.schedulePhaseOperation(id, input.phaseToClose, "close");
    }

    this.cleanPrizeSets(data.prizeSets, data.overview);

    await this.osClient.update({
      index: ES_INDEX,
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

    const prevTotalPrizesInCents = new ChallengeEstimator(challenge?.prizeSets ?? [], {
      track: V5_TRACK_IDS_TO_NAMES[challenge?.trackId ?? ""],
      type: V5_TYPE_IDS_TO_NAMES[challenge?.typeId ?? ""],
    }).estimateCost(EXPECTED_REVIEWS_PER_REVIEWER, NUM_REVIEWERS);

    const baValidation: BAValidation = {
      challengeId: challenge?.id,
      billingAccountId: challenge?.billing?.billingAccountId,
      markup: challenge?.billing?.markup,
      status: ChallengeStatuses.Deleted,
      prevStatus: challenge?.status,
      prevTotalPrizesInCents,
      totalPrizesInCents: 0,
    };

    await lockConsumeAmount(baValidation);

    try {
      const result = await super.delete(lookupCriteria);
      // await sendHarmonyEvent(
      //   "DELETE",
      //   "Challenge",
      //   { id: challenge.id },
      //   challenge.billing?.billingAccountId
      // );
      return result;
    } catch (err) {
      await lockConsumeAmount(baValidation, true);
      throw err;
    }
  }

  public async getPhaseFacts(phaseFactRequest: PhaseFactRequest): Promise<PhaseFactResponse> {
    // Just a pass through to the legacy domain - this is fine for now, but ideally these should be handled in the "future" review-api
    return legacyChallengeDomain.getPhaseFacts(phaseFactRequest);
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

  private getPlacementMap(
    payments: UpdateChallengeInputForACL_PaymentACL[]
  ): Record<string, number> {
    return payments
      .filter((payment) => payment.type === "placement")
      .sort((a, b) => b.amount - a.amount)
      .reduce((acc, payment, index) => {
        acc[payment.handle] = index + 1;
        return acc;
      }, {} as Record<string, number>);
  }

  private placeToOrdinal(place: number) {
    if (place === 1) return "1st";
    if (place === 2) return "2nd";
    if (place === 3) return "3rd";

    return `${place}th`;
  }

  private async generatePayments(
    challengeId: string,
    billingAccountId: number,
    challengeType: string,
    title: string,
    payments: UpdateChallengeInputForACL_PaymentACL[]
    challengeMarkup: number,
  ): Promise<number> {
    const token = await m2mToken.getM2MToken();

    console.log(
      `Generating payments for challenge ${challengeId}, ${title} with payments ${JSON.stringify(
        payments
      )} for challenge type ${challengeType}`
    );

    // Check if payment already exists
    const existingPayments = await FinanceApi.getPaymentsByChallengeId(challengeId, token);
    if (existingPayments.length > 0) {
      console.log(`Payments already exist for challenge ${challengeId}, skipping payment generation`);
      return 0;
    }

    let totalAmount = 0;
    // TODO: Make this list exhaustive
    const mapType = (type: string) => {
      if (type === "placement") {
        if (challengeType === "Task") {
          return "TASK_PAYMENT";
        }
        return "CONTEST_PAYMENT";
      }
      if (type === "reviewer" || type === "iterative reviewer") return "REVIEW_BOARD_PAYMENT";
      if (type === "copilot") return "COPILOT_PAYMENT";

      // TODO: Default to "OTHER_PAYMENT" - at the moment payment api lacks this type
      return "CONTEST_PAYMENT";
    };

    const placementMap = this.getPlacementMap(payments);
    const nPayments = payments.length;
    for (let i = 0; i < nPayments; i++) {
      const payment = payments[i];
      let details: PaymentDetail[] = [
        {
          totalAmount: payment.amount,
          grossAmount: payment.amount,
          installmentNumber: 1,
          currency: "USD",
          billingAccount: `${billingAccountId}`,
          challengeMarkup,
        },
      ];

      let description = title;

      if (payment.type === "placement") {
        description =
          challengeType != "Task"
            ? `${title} - ${this.placeToOrdinal(placementMap[payment.handle])} Place`
            : title;
      }

      totalAmount += payment.amount;

      const payload = {
        winnerId: payment.userId.toString(),
        type: "PAYMENT",
        origin: "Topcoder",
        category: mapType(payment.type),
        title,
        description,
        externalId: challengeId,
        details,
        attributes: {
          billingAccountId,
          payroll: false,
        },
      };

      if (_.includes(TGBillingAccounts, billingAccountId)) {
        payload.attributes.payroll = true;
      }

      console.log("Generate payment with payload", payload);
      await FinanceApi.createPayment(payload, token);
    }

    return totalAmount;
  }

  private isPureV5Challenge(challenge: { timelineTemplateId?: string; legacy?: Challenge_Legacy }) {
    return (
      challenge.legacy?.pureV5Task === true ||
      PURE_V5_CHALLENGE_TEMPLATE_IDS.includes(challenge.timelineTemplateId ?? "")
    );
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
  payments?: UpdateChallengeInputForACL_PaymentACL[] | undefined;
  updated?: Date;
  updatedBy?: string;
}

export default new ChallengeDomain(ChallengeSchema);
