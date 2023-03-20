const {
  V5_TERMS_API_URL,
  V5_RESOURCES_API_URL,
  COPILOT_ROLE_ID,
  COPILOT_PAYMENT_TYPE,
  V5_GROUPS_API_URL,
  V5_TERMS_NDA_ID,
  LEGACY_TERMS_NDA_ID,
  LEGACY_TERMS_STANDARD_ID,
  LEGACY_SUBMITTER_ROLE_ID,
  V5_TERMS_STANDARD_ID,
} = process.env;
import moment from "moment";
import xss from "xss";
import CoreOperations from "../common/CoreOperations";
import { Value } from "../dal/models/nosql/parti_ql";
import IdGenerator from "../helpers/IdGenerator";
import {
  DomainHelper,
  Value as ProtobufValue,
} from "@topcoder-framework/lib-common";
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

import {
  ChallengeDomain as LegacyChallengeDomain,
  GroupContestEligibilityDomain as LegacyGroupContestEligibilityDomain,
  PaymentDomain as LegacyPaymentDomain,
  PhaseDomain as LegacyPhaseDomain,
  PrizeDomain as LegacyPrizeDomain,
  ProjectInfoDomain as LegacyProjectInfoDomain,
  ResourceDomain as LegacyResourceDomain,
  ReviewDomain as LegacyReviewDomain,
  TermDomain as LegacyTermDomain,
  CreateChallengeInput as LegacyCreateChallengeInput,
} from "@topcoder-framework/domain-acl";
import _ from "lodash";
import * as v5Api from "../api/v5Api";
import {
  PaymentTypeIds,
  PrizeSetTypes,
  PrizeTypeIds,
  ProjectInfoIds,
  ProjectPaymentTypeIds,
  ResourceRoleTypes,
  ES_INDEX,
  ES_REFRESH,
  ChallengeStatuses,
} from "../common/Constants";
import m2m from "../helpers/MachineToMachineToken";
import ElasticSearch from "../helpers/ElasticSearch";
import { ScanCriteria } from "../models/common/common";
import constants from "../util/constants";
import legacyMapper from "../util/LegacyMapper";
import { CreateResult, Operator } from "@topcoder-framework/lib-common";
import { StatusBuilder } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";
import ChallengeScheduler from "../util/ChallengeScheduler";

if (!process.env.GRPC_ACL_SERVER_HOST || !process.env.GRPC_ACL_SERVER_PORT) {
  throw new Error(
    "Missing required configurations GRPC_ACL_SERVER_HOST and GRPC_ACL_SERVER_PORT"
  );
}

const legacyPrizeDomain = new LegacyPrizeDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);
const legacyChallengeDomain = new LegacyChallengeDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);
const legacyProjectInfoDomain = new LegacyProjectInfoDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);
const legacyPaymentDomain = new LegacyPaymentDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);
const legacyResourceDomain = new LegacyResourceDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);
const legacyReviewDomain = new LegacyReviewDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);
const legacyPhaseDomain = new LegacyPhaseDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);
const legacyGroupContestEligibilityDomain =
  new LegacyGroupContestEligibilityDomain(
    process.env.GRPC_ACL_SERVER_HOST,
    process.env.GRPC_ACL_SERVER_PORT
  );
const legacyTermDomain = new LegacyTermDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);
interface GetGroupsResult {
  groupsToBeAdded: any[];
  groupsToBeDeleted: any[];
}

class ChallengeDomain extends CoreOperations<Challenge, CreateChallengeInput> {
  private esClient = ElasticSearch.getESClient();

  protected toEntity(item: { [key: string]: Value }): Challenge {
    for (const key of [
      "phases",
      "terms",
      "tags",
      "metadata",
      "events",
      "prizeSets",
    ]) {
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

  public async create(input: CreateChallengeInput): Promise<Challenge> {
    input.name = xss(input.name);

    if (Array.isArray(input.discussions)) {
      for (const discussion of input.discussions) {
        discussion.id = IdGenerator.generateUUID();
        discussion.name = xss(discussion.name.substring(0, 100));
      }
    }

    let placementPrizes = 0;
    if (input.prizeSets) {
      for (const { type, prizes } of input.prizeSets) {
        if (type === "placement") {
          for (const { value } of prizes) {
            placementPrizes += value;
          }
        }
      }
    }

    const now = new Date().getTime();

    // Begin Anti-Corruption Layer

    const { track, subTrack, isTask, technologies } =
      legacyMapper.mapTrackAndType(input.trackId, input.typeId, input.tags);

    input.legacy = {
      ...input.legacy,
      track,
      subTrack,
      pureV5Task: isTask,
      forumId: 0,
      directProjectId: input.legacy!.directProjectId,
      reviewType: input.legacy!.reviewType,
      confidentialityType: input.legacy!.confidentialityType,
    };

    let legacyChallengeId: number | null = null;
    if (input.status === "Draft") {
      try {
        // prettier-ignore
        const legacyChallengeCreateInput = LegacyCreateChallengeInput.fromPartial(legacyMapper.mapChallengeDraftUpdateInput(input));
        // prettier-ignore
        const legacyChallengeCreateResponse = await legacyChallengeDomain.create(legacyChallengeCreateInput);
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

    // End Anti-Corruption Layer

    const challenge: Challenge = {
      id: IdGenerator.generateUUID(),
      created: now,
      createdBy: "tcwebservice", // TODO: extract from JWT
      updated: now,
      updatedBy: "tcwebservice", // TODO: extract from JWT
      winners: [],
      overview: {
        totalPrizes: placementPrizes,
      },
      ...input,
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

    return super.create(challenge);
  }

  async syncChallengePhases(
    legacyId: number,
    v5Phases: any[],
    isSelfService: boolean,
    numOfReviewers: number,
    isBeingActivated: boolean
  ) {
    const { phaseTypes } = await legacyPhaseDomain.getPhaseTypes({});
    const { projectPhases: phasesFromIFx } =
      await legacyPhaseDomain.getProjectPhases({ projectId: legacyId });
    console.log(`Phases from v5: ${JSON.stringify(v5Phases)}`);
    console.log(`Phases from IFX: ${JSON.stringify(phasesFromIFx)}`);
    let phaseGroups: any = {};
    _.forEach(phasesFromIFx, (p) => {
      if (!phaseGroups[p.phaseTypeId]) {
        phaseGroups[p.phaseTypeId] = [];
      }
      phaseGroups[p.phaseTypeId].push(p);
    });
    _.forEach(_.cloneDeep(phaseGroups), (pg, pt) => {
      phaseGroups[pt] = _.sortBy(pg, "scheduledStartTime");
    });

    for (const key of _.keys(phaseGroups)) {
      let phaseOrder = 0;
      let v5Equivalents = undefined;
      for (const phase of phaseGroups[key]) {
        const phaseName = _.get(
          _.find(phaseTypes, (pt) => pt.phaseTypeId === phase.phaseTypeId),
          "name"
        );
        if (_.isUndefined(v5Equivalents)) {
          v5Equivalents = _.sortBy(
            _.filter(v5Phases, (p) => p.name === phaseName),
            "scheduledStartDate"
          );
        }
        if (v5Equivalents.length > 0) {
          if (v5Equivalents.length === phaseGroups[key].length) {
            const v5Equivalent = v5Equivalents[phaseOrder];
            console.log(
              `Will update phase ${phaseName}/${v5Equivalent.name} from ${
                phase.duration
              } to duration ${v5Equivalent.duration * 1000} milli`
            );
            let newStatus = _.toInteger(phase.phaseStatusId);
            if (
              v5Equivalent.isOpen &&
              _.toInteger(phase.phaseStatusId) ===
                constants.PhaseStatusTypes.Closed
            ) {
              newStatus = constants.PhaseStatusTypes.Scheduled;
            }

            if (
              isBeingActivated &&
              ["Registration", "Submission"].indexOf(v5Equivalent.name) != -1
            ) {
              const scheduledStartDate = v5Equivalent.scheduledStartDate;
              const now = new Date().getTime();
              if (
                scheduledStartDate != null &&
                new Date(scheduledStartDate).getTime() < now
              ) {
                newStatus = constants.PhaseStatusTypes.Open;
              }

              console.log(
                `Challenge phase ${v5Equivalent.name} status is being set to: ${newStatus} on challenge activation.`
              );
            }
            console.log({
              projectPhaseId: phase.projectPhaseId,
              phaseStatusId: newStatus,
              fixedStartTime: moment(phase.fixedStartTime).format(
                "yyyy-MM-DD HH:mm:ss"
              )
                ? moment(v5Equivalent.scheduledStartDate).format(
                    "yyyy-MM-DD HH:mm:ss"
                  )
                : undefined,
              scheduledStartTime: moment(
                v5Equivalent.scheduledStartDate
              ).format("yyyy-MM-DD HH:mm:ss"),
              scheduledEndTime: moment(v5Equivalent.scheduledEndDate).format(
                "yyyy-MM-DD HH:mm:ss"
              ),
              duration: v5Equivalent.duration * 1000,
              ...(isBeingActivated &&
              newStatus == constants.PhaseStatusTypes.Open
                ? { actualStartTime: moment().format("yyyy-MM-DD HH:mm:ss") }
                : {}),
            });

            await legacyPhaseDomain.updateProjectPhase({
              projectPhaseId: phase.projectPhaseId,
              phaseStatusId: newStatus,
              fixedStartTime: moment(phase.fixedStartTime).format(
                "yyyy-MM-DD HH:mm:ss"
              )
                ? moment(v5Equivalent.scheduledStartDate).format(
                    "yyyy-MM-DD HH:mm:ss"
                  )
                : undefined,
              scheduledStartTime: moment(
                v5Equivalent.scheduledStartDate
              ).format("yyyy-MM-DD HH:mm:ss"),
              scheduledEndTime: moment(v5Equivalent.scheduledEndDate).format(
                "yyyy-MM-DD HH:mm:ss"
              ),
              duration: v5Equivalent.duration * 1000,
              ...(isBeingActivated &&
              newStatus == constants.PhaseStatusTypes.Open
                ? { actualStartTime: moment().format("yyyy-MM-DD HH:mm:ss") }
                : {}),
            });
          } else {
            console.log(`number of ${phaseName} does not match`);
          }
        } else {
          console.log(`No v5 Equivalent Found for ${phaseName}`);
        }
        if (isSelfService && phaseName === "Review") {
          // make sure to set the required reviewers to 2
          const { phaseCriteriaList } =
            await legacyPhaseDomain.getPhaseCriteria({
              projectPhaseId: phase.projectPhaseId,
              phaseCriteriaTypeId: 6, // TODO: fix magic number here
            });
          if (phaseCriteriaList && phaseCriteriaList.length > 0) {
            // delete existing criteria
            await legacyPhaseDomain.deletePhaseCriteria({
              projectPhaseId: phase.projectPhaseId,
              phaseCriteriaTypeId: 6,
            });
          }
          // create
          await legacyPhaseDomain.createPhaseCriteria({
            projectPhaseId: phase.projectPhaseId,
            phaseCriteriaTypeId: 6,
            parameter: _.toString(numOfReviewers),
          });
        }
        phaseOrder = phaseOrder + 1;
      }
    }
    // TODO: What about iterative reviews? There can be many for the same challenge.
    // TODO: handle timeline template updates
  }

  async addPhaseConstraints(legacyId: number, v5Phases: any[]) {
    console.log(
      `addPhaseConstraints :: start: ${legacyId}, ${JSON.stringify(v5Phases)}`
    );

    const { phaseTypes } = await legacyPhaseDomain.getPhaseTypes({}); // TODO: Update framework to not require any params
    console.log(
      `addPhaseConstraints :: phaseTypes: ${JSON.stringify(phaseTypes)}`
    );

    const { projectPhases: phasesFromIFx } =
      await legacyPhaseDomain.getProjectPhases({
        projectId: legacyId,
      });

    for (const phase of v5Phases) {
      console.log(
        `addPhaseConstraints :: phase: ${legacyId} -> ${JSON.stringify(phase)}`
      );
      if (phase.constraints == null || phase.constraints.length === 0) continue;

      const phaseLegacyId = _.get(
        _.find(phaseTypes, (pt) => pt.name === phase.name),
        "phaseTypeId"
      );
      const existingLegacyPhase = _.find(
        phasesFromIFx,
        (p) => p.phaseTypeId === phaseLegacyId
      );

      const projectPhaseId = _.get(existingLegacyPhase, "projectPhaseId");
      if (!projectPhaseId) {
        console.log(`Could not find phase ${phase.name} on legacy!`);
        continue;
      }

      let constraintName: any = null;
      let constraintValue = null;
      let phaseCriteriaTypeId = null;

      if (phase.name === "Submission") {
        const numSubmissionsConstraint = phase.constraints.find(
          (c: any) => c.name === "Number of Submissions"
        );
        if (numSubmissionsConstraint) {
          constraintName = "Submission Number";
          constraintValue = numSubmissionsConstraint.value;
          phaseCriteriaTypeId = 3;
        }
      }

      if (phase.name === "Registration") {
        const numRegistrantsConstraint = phase.constraints.find(
          (c: any) => c.name === "Number of Registrants"
        );
        if (numRegistrantsConstraint) {
          constraintName = "Registration Number";
          constraintValue = numRegistrantsConstraint.value;
          phaseCriteriaTypeId = 2;
        }
      }

      if (phase.name === "Review") {
        const numReviewersConstraint = phase.constraints.find(
          (c: any) => c.name === "Number of Reviewers"
        );
        if (numReviewersConstraint) {
          constraintName = "Reviewer Number";
          constraintValue = numReviewersConstraint.value;
          phaseCriteriaTypeId = 6;
        }
      }

      // We have an interesting situation if a submission phase constraint was added but
      // no registgration phase constraint was added. This ends up opening Post-Mortem
      // phase if registration closes with 0 submissions.
      // For now I'll leave it as is and handle this better in the new Autopilot implementation
      // A quick solution would have been adding a registration constraint with value 1 if none is provided when there is a submission phase constraint

      if (constraintName && constraintValue) {
        constraintValue = _.toString(constraintValue);
        const { phaseCriteriaList } = await legacyPhaseDomain.getPhaseCriteria({
          projectPhaseId,
        });
        console.log(`phaseCriteriaList: ${JSON.stringify(phaseCriteriaList)} for projectPhaseId: ${projectPhaseId}`)
        if (
          phaseCriteriaList &&
          phaseCriteriaList.length > 0
        ) {
          console.log(
            `Will create phase constraint ${constraintName} with value ${constraintValue}`
          );
          // Ideally we should update the existing phase criteria, but this processor will go away in weeks
          // and it's a backend processor, so we can just drop and recreate without slowing down anything
          await legacyPhaseDomain.deletePhaseCriteria({
            projectPhaseId,
            phaseCriteriaTypeId: phaseCriteriaTypeId as number,
          });
          await legacyPhaseDomain.createPhaseCriteria({
            projectPhaseId,
            phaseCriteriaTypeId: phaseCriteriaTypeId as number,
            parameter: constraintValue,
          });
        } else {
          console.log(
            `Could not find phase criteria type for ${constraintName}. Will create it with value ${constraintValue}`
          );
          await legacyPhaseDomain.createPhaseCriteria({
            projectPhaseId,
            phaseCriteriaTypeId: phaseCriteriaTypeId as number,
            parameter: constraintValue,
          });
        }
      }
    }
    console.log("addPhaseConstraints :: end");
  }

  private async updateMemberPayments(legacyId: number, v5PrizeSets: any) {
    const { prizes: prizesFromIfx } = await legacyPrizeDomain.get({
      criteria: [
        {
          key: "projectId",
          value: legacyId,
          operator: Operator.OPERATOR_EQUAL,
        },
        {
          key: "prizeTypeId",
          value: PrizeTypeIds.Contest,
          operator: Operator.OPERATOR_EQUAL,
        },
      ],
    });
    const { prizes: checkpointPrizes } = await legacyPrizeDomain.get({
      criteria: [
        {
          key: "projectId",
          value: legacyId,
          operator: Operator.OPERATOR_EQUAL,
        },
        {
          key: "prizeTypeId",
          value: PrizeTypeIds.Checkpoint,
          operator: Operator.OPERATOR_EQUAL,
        },
      ],
    });

    const checkpointPrizesFromIfx = checkpointPrizes
      ? checkpointPrizes[0]
      : null;
    const v5Prizes = _.map(
      _.get(
        _.find(v5PrizeSets, (p) => p.type === PrizeSetTypes.ChallengePrizes),
        "prizes",
        []
      ),
      (prize) => prize.value
    );
    const v5CheckPointPrizes = _.map(
      _.get(
        _.find(v5PrizeSets, (p) => p.type === PrizeSetTypes.CheckPoint),
        "prizes",
        []
      ),
      (prize) => prize.value
    );
    // compare prizes
    if (v5Prizes && v5Prizes.length > 0) {
      v5Prizes.sort((a, b) => b - a);
      for (let i = 0; i < v5Prizes.length; i += 1) {
        const ifxPrize = _.find(prizesFromIfx, (p) => p.place === i + 1);
        if (ifxPrize) {
          if (_.toInteger(ifxPrize.prizeAmount) !== v5Prizes[i]) {
            await legacyPrizeDomain.update({
              updateCriteria: {
                prizeId: ifxPrize.prizeId,
                projectId: legacyId,
              },
              updateInput: {
                place: i + 1,
                prizeAmount: v5Prizes[i],
              },
            });
          }
        } else {
          await legacyPrizeDomain.create({
            projectId: legacyId,
            place: i + 1,
            prizeAmount: v5Prizes[i],
            prizeTypeId: PrizeTypeIds.Contest,
            numberOfSubmissions: 1,
          });
        }
      }
      if (prizesFromIfx.length > v5Prizes.length) {
        const prizesToDelete = _.filter(
          prizesFromIfx,
          (p) => p.place > v5Prizes.length
        );
        for (const prizeToDelete of prizesToDelete) {
          await legacyPrizeDomain.delete({
            prizeId: prizeToDelete.prizeId,
            projectId: legacyId,
          });
        }
      }
    }
    // compare checkpoint prizes
    if (
      checkpointPrizesFromIfx &&
      v5CheckPointPrizes &&
      v5CheckPointPrizes.length > 0
    ) {
      // we assume that all checkpoint prizes will be the same
      if (
        v5CheckPointPrizes.length !==
          checkpointPrizesFromIfx.numberOfSubmissions ||
        v5CheckPointPrizes[0] !==
          _.toInteger(checkpointPrizesFromIfx.prizeAmount)
      ) {
        await legacyPrizeDomain.update({
          updateCriteria: {
            prizeId: checkpointPrizesFromIfx.prizeId,
            projectId: legacyId,
          },
          updateInput: {
            prizeAmount: v5CheckPointPrizes[0],
            numberOfSubmissions: v5CheckPointPrizes.length,
          },
        });
      }
    } else if (checkpointPrizesFromIfx) {
      await legacyPrizeDomain.delete({
        prizeId: checkpointPrizesFromIfx.prizeId,
        projectId: legacyId,
      });
    }
  }

  async associateChallengeTerms(v5Terms: any[], legacyChallengeId: number) {
    // console.log(`v5Terms Terms Array: ${JSON.stringify(v5Terms)}`)
    const { terms: legacyTermsArray } =
      await legacyTermDomain.GetProjectRoleTermsOfUseXrefs({
        projectId: legacyChallengeId,
      });
    // console.log(`Legacy Terms Array: ${JSON.stringify(legacyTermsArray)}`)
    const nda = _.find(v5Terms, (e: any) => e.id === V5_TERMS_NDA_ID);
    const legacyNDA: any = _.find(
      legacyTermsArray,
      (e: any) => _.toNumber(e.termsOfUseId) === _.toNumber(LEGACY_TERMS_NDA_ID)
    );

    const standardTerms = _.find(v5Terms, (e) => e.id === V5_TERMS_STANDARD_ID);
    const legacyStandardTerms: any = _.find(
      legacyTermsArray,
      (e: any) =>
        _.toNumber(e.termsOfUseId) === _.toNumber(LEGACY_TERMS_STANDARD_ID)
    );

    // console.log(`NDA: ${config.V5_TERMS_NDA_ID} - ${JSON.stringify(nda)}`)
    // console.log(`Standard Terms: ${config.V5_TERMS_STANDARD_ID} - ${JSON.stringify(standardTerms)}`)
    // console.log(`Legacy NDA: ${JSON.stringify(legacyNDA)}`)
    // console.log(`Legacy Standard Terms: ${JSON.stringify(legacyStandardTerms)}`)

    const m2mToken = await m2m.getM2MToken();
    if (standardTerms && standardTerms.id && !legacyStandardTerms) {
      console.log(
        "Associate Challenge Terms - v5 Standard Terms exist, not in legacy. Adding to Legacy."
      );
      const v5StandardTerm = await v5Api.getRequest(
        `${V5_TERMS_API_URL}/${standardTerms.id}`,
        m2mToken
      );
      await legacyTermDomain.createProjectRoleTermsOfUseXref({
        projectId: legacyChallengeId,
        resourceRoleId: _.toInteger(LEGACY_SUBMITTER_ROLE_ID),
        termsOfUseId: v5StandardTerm.legacyId,
      });
    } else if (
      !standardTerms &&
      legacyStandardTerms &&
      legacyStandardTerms.id
    ) {
      console.log(
        "Associate Challenge Terms - Legacy NDA exist, not in V5. Removing from Legacy."
      );
      await legacyTermDomain.deleteProjectRoleTermsOfUseXref({
        projectId: legacyChallengeId,
        resourceRoleId: _.toInteger(LEGACY_SUBMITTER_ROLE_ID),
        termsOfUseId: legacyStandardTerms.id,
      });
    }

    if (nda && nda.id && !legacyNDA) {
      console.log(
        "Associate Challenge Terms - v5 NDA exist, not in legacy. Adding to Legacy."
      );
      const v5NDATerm = await v5Api.getRequest(
        `${V5_TERMS_API_URL}/${nda.id}`,
        m2mToken
      );
      await legacyTermDomain.createProjectRoleTermsOfUseXref({
        projectId: legacyChallengeId,
        resourceRoleId: _.toInteger(LEGACY_SUBMITTER_ROLE_ID),
        termsOfUseId: v5NDATerm.legacyId,
      });
    } else if (!nda && legacyNDA && legacyNDA.id) {
      console.log(
        "Associate Challenge Terms - Legacy NDA exist, not in V5. Removing from Legacy."
      );
      await legacyTermDomain.deleteProjectRoleTermsOfUseXref({
        projectId: legacyChallengeId,
        resourceRoleId: _.toInteger(LEGACY_SUBMITTER_ROLE_ID),
        termsOfUseId: legacyNDA.id,
      });
    }

    // console.log('Associate Challenge Terms - Nothing to Do')
  }

  async getGroup(v5GroupId: string) {
    const token = await m2m.getM2MToken();
    return await v5Api.getRequest(`${V5_GROUPS_API_URL}/${v5GroupId}`, token);
  }

  async getGroups(v5Groups: any[], legacyId: number): Promise<GetGroupsResult> {
    const { contestEligibilities } =
      await legacyGroupContestEligibilityDomain.getContestEligibilities({
        contestId: legacyId,
      });
    const v4GroupIds = [];
    for (const ce of contestEligibilities) {
      const { groupContestEligibilities } =
        await legacyGroupContestEligibilityDomain.getGroupContestEligibilities({
          contestEligibilityId: ce.contestEligibilityId,
        });
      for (const gce of groupContestEligibilities) {
        v4GroupIds.push(gce.groupId);
      }
    }
    // get groupContestEligibilities -> groupId
    let groupsToBeAdded: any[] = [];
    let groupsToBeDeleted: any[] = [];
    if (v5Groups && v5Groups.length > 0) {
      const oldGroups = _.map(v4GroupIds, (g) => _.toString(g));
      const newGroups = [];

      for (const group of v5Groups) {
        try {
          const groupInfo = await this.getGroup(group);
          if (!_.isEmpty(_.get(groupInfo, "oldId"))) {
            newGroups.push(_.toString(_.get(groupInfo, "oldId")));
          }
        } catch (e) {
          console.log(`Failed to load details for group ${group}`);
        }
      }
      groupsToBeAdded = _.difference(newGroups, oldGroups);
      groupsToBeDeleted = _.difference(oldGroups, newGroups);
      if (groupsToBeAdded.length > 0) {
        console.log(
          `parsePayload :: Adding Groups ${JSON.stringify(groupsToBeAdded)}`
        );
      }
      if (groupsToBeDeleted.length > 0) {
        console.log(
          `parsePayload :: Deleting Groups ${JSON.stringify(groupsToBeDeleted)}`
        );
      }
    } else if (v4GroupIds && v4GroupIds.length > 0) {
      groupsToBeDeleted = _.map(v4GroupIds, (g) => _.toString(g));
    }
    return {
      groupsToBeAdded,
      groupsToBeDeleted,
    };
  }

  async associateChallengeGroups(
    v5groups: any[],
    legacyId: number,
    isStudio: number
  ) {
    const { groupsToBeAdded, groupsToBeDeleted } = await this.getGroups(
      v5groups,
      legacyId
    );
    console.log(
      `Groups to add to challenge: ${legacyId}: ${JSON.stringify(
        groupsToBeAdded
      )}`
    );
    for (const group of groupsToBeAdded) {
      // await groupService.addGroupToChallenge(legacyId, group)
      const createdContestEligibility: CreateResult =
        await legacyGroupContestEligibilityDomain.createContestEligibility({
          contestEligibilityId: group,
          contestId: legacyId,
          isStudio,
        });
      const ceId = createdContestEligibility.kind
        ? _.get(
            createdContestEligibility.kind,
            createdContestEligibility.kind?.$case,
            undefined
          )
        : undefined;
      if (!ceId) throw new Error("cannot create contest eligibility");
      await legacyGroupContestEligibilityDomain.createGroupContestEligibility({
        contestEligibilityId: ceId,
        groupId: group,
      });
    }
    console.log(
      `Groups to remove from challenge: ${legacyId}: ${JSON.stringify(
        groupsToBeDeleted
      )}`
    );
    for (const group of groupsToBeDeleted) {
      // await groupService.removeGroupFromChallenge(legacyId, group)
      const { contestEligibilities } =
        await legacyGroupContestEligibilityDomain.getContestEligibilities({
          contestId: legacyId,
        });
      const contestEligibilityToRemove = _.find(
        contestEligibilities,
        (ce) => ce.contestEligibilityId === group
      );
      if (contestEligibilityToRemove) {
        await legacyGroupContestEligibilityDomain.deleteContestEligibility({
          contestEligibilityId: contestEligibilityToRemove.contestEligibilityId,
        });
        await legacyGroupContestEligibilityDomain.deleteGroupContestEligibility(
          {
            contestEligibilityId:
              contestEligibilityToRemove.contestEligibilityId,
            groupId: group,
          }
        );
      }
    }
  }

  async setCopilotPayment(
    challengeId: string,
    legacyChallengeId: number,
    prizeSets: any = []
  ) {
    try {
      const token = await m2m.getM2MToken();
      const amount = _.get(
        _.find(prizeSets, (p) => p.type === COPILOT_PAYMENT_TYPE),
        "prizes[0].value",
        0
      );
      console.log("Fetching challenge copilot...");
      const [copilotResource] = await v5Api.getRequest(
        `${V5_RESOURCES_API_URL}?challengeId=${challengeId}&roleId=${COPILOT_ROLE_ID}`,
        token
      );
      if (!copilotResource) {
        console.log(
          `Copilot does not exist for challenge ${challengeId} (legacy: ${legacyChallengeId})`
        );
        return;
      }
      console.log(
        `Setting Copilot Payment: ${amount} for legacyId ${legacyChallengeId} for copilot ${copilotResource.memberId}`
      );
      const { resources } = await legacyResourceDomain.getResources({
        projectId: legacyChallengeId,
        resourceRoleId: ResourceRoleTypes.Copilot,
      });
      if (resources && resources.length > 0) {
        const { resourceInfos } = await legacyResourceDomain.getResourceInfos({
          resourceId: resources[0].resourceId,
          resourceInfoTypeId: PaymentTypeIds.Copilot,
        });
        if (resourceInfos && resourceInfos.length > 0) {
          // update
          await legacyResourceDomain.updateResourceInfos({
            resourceId: resources[0].resourceId,
            resourceInfoTypeId: PaymentTypeIds.Copilot,
            value: "true",
          });
        } else {
          // create
          await legacyResourceDomain.createResourceInfos({
            resourceId: resources[0].resourceId,
            resourceInfoTypeId: PaymentTypeIds.Copilot,
            value: "true",
          });
        }

        // Set payment
        const { projectPayments } = await legacyPaymentDomain.get({
          resourceId: resources[0].resourceId,
          projectPaymentTypeId: ProjectPaymentTypeIds.Copilot,
        });
        const copilotProjectPayment =
          projectPayments?.length > 0 ? projectPayments[0] : undefined;

        const { projectInfos } = await legacyProjectInfoDomain.getProjectInfo({
          projectId: legacyChallengeId,
          projectInfoTypeId: ProjectInfoIds.CopilotPayment,
        });
        const copilotPayment =
          projectInfos?.length > 0 ? projectInfos[0] : undefined;

        if (amount !== null && amount >= 0) {
          if (copilotPayment) {
            await legacyProjectInfoDomain.update({
              projectId: legacyChallengeId,
              projectInfoTypeId: ProjectInfoIds.CopilotPayment,
              value: amount,
            });
          } else {
            console.log(
              `Creating copilot payment: ${amount}... with project id: ${legacyChallengeId} and project info type id: ${ProjectInfoIds.CopilotPayment}...`
            );
            try {
              await legacyProjectInfoDomain.create({
                projectId: legacyChallengeId,
                projectInfoTypeId: ProjectInfoIds.CopilotPayment,
                value: amount,
              });
            } catch (e) {
              console.log("Failed to create copilot payment!");
              console.log(e);
            }
          }
          if (copilotProjectPayment) {
            await legacyPaymentDomain.update({
              resourceId: resources[0].resourceId,
              projectPaymentTypeId: ProjectPaymentTypeIds.Copilot,
              amount,
            });
          } else {
            await legacyPaymentDomain.create({
              resourceId: resources[0].resourceId,
              projectPaymentTypeId: ProjectPaymentTypeIds.Copilot,
              amount,
            });
          }
        } else {
          await legacyPaymentDomain.delete({
            resourceId: resources[0].resourceId,
            projectPaymentTypeId: ProjectPaymentTypeIds.Copilot,
          });
          await legacyProjectInfoDomain.delete({
            projectId: legacyChallengeId,
            projectInfoTypeId: ProjectInfoIds.CopilotPayment,
          });
        }
      }
    } catch (e) {
      console.log("Failed to set the copilot payment!");
      console.log(e);
    }
  }

  public async update(
    scanCriteria: ScanCriteria[],
    input: UpdateChallengeInput_UpdateInput
  ): Promise<ChallengeList> {
    // TODO: Use legacyChallengeDomain to backfill data in informix
    const createdByUserId = 22838965; // TODO: Extract from interceptors
    const updatedByUserId = 22838965; // TODO: Extract from interceptors

    if (!input?.legacyId) {
      const { track, subTrack, isTask, technologies } =
      legacyMapper.mapTrackAndType(input.trackId as string, input.typeId as string, input.tags);

      input.legacy = {
        ...input.legacy,
        track,
        subTrack,
        pureV5Task: isTask,
        forumId: 0,
        directProjectId: input.legacy!.directProjectId,
        reviewType: input.legacy!.reviewType,
        confidentialityType: input.legacy!.confidentialityType,
      };

      let legacyChallengeId: number | null = null;

      try {
        // prettier-ignore
        const legacyChallengeCreateInput = LegacyCreateChallengeInput.fromPartial(legacyMapper.mapChallengeDraftUpdateInput(input));
        // prettier-ignore
        const legacyChallengeCreateResponse = await legacyChallengeDomain.create(legacyChallengeCreateInput);
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
      input.legacyId = legacyChallengeId as number;
    }

    if (input?.legacyId) {
      const legacyId = input.legacyId;
      const legacyChallenge = await legacyChallengeDomain.getLegacyChallenge({
        legacyChallengeId: legacyId,
      });

      // Handle metadata (project_info)
      let metaValue;
      const { projectInfos } = await legacyProjectInfoDomain.getProjectInfo({
        projectId: legacyId,
      });
      for (const metadataKey of _.keys(constants.supportedMetadata)) {
        try {
          metaValue = _.toString(
            constants.supportedMetadata[metadataKey].method(
              input,
              constants.supportedMetadata[metadataKey].defaultValue
            )
          );
          if (metaValue !== null && metaValue !== "") {
            if (
              !_.find(
                projectInfos,
                (pi: any) => pi.projectInfoTypeId === _.toInteger(metadataKey)
              )
            ) {
              await legacyProjectInfoDomain.create({
                projectId: legacyId,
                projectInfoTypeId: _.toInteger(metadataKey),
                value: metaValue,
              });
            } else {
              await legacyProjectInfoDomain.update({
                projectId: legacyId,
                projectInfoTypeId: _.toInteger(metadataKey),
                value: metaValue,
              });
            }
          }
        } catch (e) {
          console.log(
            `Failed to set ${constants.supportedMetadata[metadataKey].description} to ${metaValue} for challenge ${legacyId}`
          );
          console.log(e);
        }
      }

      // updateMemberPayments
      await this.updateMemberPayments(legacyId, input.prizeSets);
      // associateChallengeGroups
      await this.associateChallengeGroups(
        input.groups,
        legacyId,
        _.includes(
          constants.STUDIO_CATEGORY_TYPES,
          legacyChallenge.projectCategoryId
        )
          ? 1
          : 0
      );
      // associateChallengeTerms
      await this.associateChallengeTerms(input.terms, legacyId);
      // setCopilotPayment
      await this.setCopilotPayment(
        input.id,
        legacyId,
        _.get(input, "prizeSets")
      );

      // If iterative review is open
      if (
        _.find(
          _.get(input, "phases"),
          (p) => p.isOpen && p.name === "Iterative Review"
        )
      ) {
        // Try to read reviews and insert them into informix DB
        if (input.metadata && input.legacy?.reviewScorecardId) {
          let orReviewFeedback: any = _.find(
            input.metadata,
            (meta) => meta.name === "or_review_feedback"
          );
          let orReviewScore: any = _.find(
            input.metadata,
            (meta) => meta.name === "or_review_score"
          );
          if (
            !_.isUndefined(orReviewFeedback) &&
            !_.isUndefined(orReviewScore)
          ) {
            orReviewFeedback = JSON.parse(_.toString(orReviewFeedback));
            const reviewResponses: any[] = [];
            _.each(orReviewFeedback, (value, key) => {
              if (input?.legacy?.reviewScorecardId) {
                const questionId = _.get(
                  _.find(
                    _.get(
                      constants.scorecardQuestionMapping,
                      input.legacy.reviewScorecardId
                    ),
                    (item) =>
                      _.toString(item.questionId) === _.toString(key) ||
                      _.toLower(item.description) === _.toLower(key)
                  ),
                  "questionId"
                );
                reviewResponses.push({
                  questionId,
                  answer: value,
                });
              }
            });
            orReviewScore = _.toNumber(orReviewFeedback);
            const { resources } = await legacyResourceDomain.getResources({
              projectId: input.legacyId,
              resourceRoleId: ResourceRoleTypes.IterativeReviewer,
            });
            if (resources.length === 0)
              throw new Error("Cannot find iterative reviewer");
            const iterativeReviewer = resources[0];
            const submission = await legacyReviewDomain.getSubmission({
              projectId: input.legacyId,
              resourceId: iterativeReviewer.resourceId,
            });
            if (!submission) throw new Error("Cannot find submission");
            const { projectPhases } = await legacyPhaseDomain.getProjectPhases({
              projectId: input.legacyId,
              phaseTypeId: 18,
            });
            if (projectPhases.length === 0)
              throw new Error("Cannot find project phase");
            const projectPhase = projectPhases[0];
            const review = await legacyReviewDomain.createReview({
              resourceId: iterativeReviewer.resourceId,
              submissionId: submission.submissionId,
              projectPhaseId: projectPhase.projectPhaseId,
              scorecardId: input.legacy.reviewScorecardId,
              committed: 1,
              score: orReviewScore,
              initialScore: orReviewScore,
            });
            const reviewId = review.kind
              ? _.get(review.kind, review.kind?.$case, undefined)
              : undefined;
            if (!reviewId) throw new Error("Cannot create review");
            for (let i = 0; i < reviewResponses.length; i += 1) {
              await legacyReviewDomain.createReviewItem({
                reviewId,
                scorecardQuestionId: reviewResponses[i].questionId,
                uploadId: submission.uploadId,
                answer: reviewResponses[i],
                sort: i,
              });
            }
          }
        }
      }

      let isBeingActivated = false;

      if (input.status && legacyChallenge) {
        if (
          input.status === constants.challengeStatuses.Active &&
          legacyChallenge.projectStatusId !==
            constants.legacyChallengeStatusesMap.Active
        ) {
          isBeingActivated = true;
          console.log("Activating challenge...");
          await legacyChallengeDomain.activate({
            legacyChallengeId: legacyId,
          });
          console.log(`Activated! `);
          // make sure autopilot is on
          if (!_.find(projectInfos, (pi) => pi.projectInfoTypeId === 9)) {
            try {
              await legacyProjectInfoDomain.create({
                projectId: legacyId,
                projectInfoTypeId: 9,
                value: "On",
              });
            } catch (e) {
              console.log("Failed to set autopilot to On");
              console.log(e);
            }
          } else {
            await legacyProjectInfoDomain.update({
              projectId: legacyId,
              projectInfoTypeId: 9,
              value: "On",
            });
          }
        }
        if (
          input.status === constants.challengeStatuses.Completed &&
          legacyChallenge.projectStatusId !==
            constants.legacyChallengeStatusesMap.Completed
        ) {
          if (input.task?.isTask) {
            console.log("Challenge is a TASK");
            if (!input.winners || input.winners.length === 0) {
              throw new Error("Cannot close challenge without winners");
            }
            const winnerId = _.find(
              input.winners,
              (winner) => winner.placement === 1
            )?.userId;
            console.log(
              `Will close the challenge with ID ${legacyId}. Winner ${winnerId}!`
            );
            if (!winnerId) throw new Error("Cannot find winner");
            await legacyChallengeDomain.closeChallenge({
              projectId: legacyId,
              winnerId,
            });
          } else {
            console.log(
              "Challenge type is not a task.. Skip closing challenge..."
            );
          }
        }

        if (!_.get(input, "task.isTask")) {
          const numOfReviewers = 2;
          await this.syncChallengePhases(
            legacyId,
            input.phases,
            _.get(input, "legacy.selfService", false),
            numOfReviewers,
            isBeingActivated
          );
          await this.addPhaseConstraints(legacyId, input.phases);
        } else {
          console.log("Will skip syncing phases as the challenge is a task...");
        }
        if (
          input.status === constants.challengeStatuses.CancelledClientRequest &&
          legacyChallenge.projectStatusId !==
            constants.legacyChallengeStatusesMap.CancelledClientRequest
        ) {
          console.log("Cancelling challenge...");
          await legacyChallengeDomain.update({
            projectId: legacyId,
            projectStatusId:
              constants.legacyChallengeStatusesMap.CancelledClientRequest,
          });
        }
      }
    }

    // toEntity parses the below properties thus we should now stringify them again
    // for (const key of ["phases",
    //   "terms",
    //   "tags",
    //   "metadata",
    //   "events",
    //   "prizeSets"]) {
    //     _.set(input, key, JSON.stringify(_.get(input, key)))
    //   }
    //   console.log('------ before save --------');

    //   console.log(input);
    console.log(_.omit(input, ["id"]));

    const challengeList = await super.update(
      scanCriteria,
      {
        ..._.omit(input, ["id"]),
        ...(input.prizeSets ? { prizeSets: input.prizeSets.map(ps => JSON.stringify(ps)) } : {}),
      }
    );

    console.log('------ after save --------');

    if (input.phases && input.phases.length) {
      await ChallengeScheduler.schedule({
        action: "schedule",
        challengeId: input.id,
        phases: input.phases.map((phase) => ({
          name: phase.name,
          scheduledStartDate: phase.scheduledStartDate,
          scheduledEndDate: phase.scheduledEndDate,
        })),
      });
    }

    return challengeList;
  }

  public async updateForAcl(
    scanCriteria: ScanCriteria[],
    input: UpdateChallengeInputForACL_UpdateInputForACL
  ): Promise<void> {
    console.log("updateforacl", JSON.stringify(input.phases));
    console.log("scan-criteria", scanCriteria);
    const updatedBy = "tcwebservice"; // TODO: Extract from interceptors
    let challenge: Challenge | undefined = undefined;
    const id = scanCriteria[0].value;
    const data: IUpdateDataFromACL = {};
    if (!_.isUndefined(input.status)) {
      data.status = input.status;
    }
    if (!_.isUndefined(input.phases)) {
      console.log("setting phases");
      data.phases = input.phases.phases;
      console.log("done setting phases");
      data.currentPhase = input.currentPhase;
      data.registrationEndDate = input.registrationStartDate;
      data.registrationEndDate = input.registrationEndDate;
      data.submissionStartDate = input.submissionStartDate;
      data.submissionEndDate = input.submissionEndDate;
      data.startDate = input.startDate;
      data.endDate = input.endDate;
    }
    console.log("current-phase");
    if (!_.isUndefined(input.currentPhaseNames)) {
      data.currentPhaseNames = input.currentPhaseNames.currentPhaseNames;
    }
    console.log("done-phase");
    if (!_.isUndefined(input.legacy)) {
      if (_.isUndefined(challenge)) {
        console.log("lookup challenge");
        try {
          challenge = await this.lookup(
            DomainHelper.getLookupCriteria("id", id)
          );
        } catch (err) {
          console.error(err);
          throw err;
        }
        console.log("done lookoing up challenge");
      }
      data.legacy = _.assign({}, challenge.legacy, input.legacy);
    }
    console.log("done-legacy");
    if (!_.isUndefined(input.prizeSets)) {
      if (_.isUndefined(challenge)) {
        challenge = await this.lookup(DomainHelper.getLookupCriteria("id", id));
      }
      const prizeSets = _.filter(
        [
          ..._.intersectionBy(
            input.prizeSets.prizeSets,
            challenge.prizeSets,
            "type"
          ),
          ..._.differenceBy(
            challenge.prizeSets,
            input.prizeSets.prizeSets,
            "type"
          ),
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
      data.prizeSets = prizeSets;
    }
    console.log("done with prizesets");
    if (!_.isUndefined(input.overview)) {
      data.overview = input.overview;
    }
    console.log("done with overview");
    if (!_.isUndefined(input.winners)) {
      data.winners = input.winners.winners;
    }
    console.log("done with winners");

    data.updated = new Date();
    data.updatedBy = updatedBy;

    console.log("Updating...", JSON.stringify(data, null, 2));
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

    if (input.phases?.phases && input.phases.phases.length) {
      await ChallengeScheduler.schedule({
        action: "schedule",
        challengeId: id,
        phases: input.phases.phases.map((phase) => ({
          name: phase.name,
          scheduledStartDate: phase.scheduledStartDate,
          scheduledEndDate: phase.scheduledEndDate,
        })),
      });
    }

    await this.esClient.update({
      index: ES_INDEX,
      refresh: ES_REFRESH,
      id,
      body: {
        doc: data,
      },
    });
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
