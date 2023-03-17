/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface Review {
  reviewId: number;
  resourceId: number;
  submissionId: number;
  projectPhaseId: number;
  scorecardId: number;
  committed: number;
  score: number;
  initialScore: number;
  createUser: number;
  createDate: number;
  modifyUser: number;
  modifyDate: number;
}

export interface ReviewList {
  items: Review[];
}

export interface CreateReviewInput {
  resourceId: number;
  submissionId: number;
  projectPhaseId: number;
  scorecardId: number;
  committed: number;
  score: number;
  initialScore: number;
}

export interface ReviewItem {
  reviewItemId: number;
  reviewId: number;
  scorecardQuestionId: number;
  uploadId?: number | undefined;
  answer: string;
  sort: number;
  createUser?: number | undefined;
  createDate?: number | undefined;
  modifyUser?: number | undefined;
  modifyDate?: number | undefined;
}

export interface CreateReviewItemInput {
  reviewId: number;
  scorecardQuestionId: number;
  uploadId?: number | undefined;
  answer: string;
  sort: number;
}

export interface Submission {
  submissionId: number;
  uploadId: number;
  initialScore?: number | undefined;
  finalScore?: number | undefined;
  placement?: number | undefined;
  prizeId?: number | undefined;
  submissionStatusId: number;
  submissionTypeId: number;
}

export interface GetSubmissionInput {
  projectId: number;
  submissionStatusId?: number | undefined;
  uploadStatusId?: number | undefined;
  resourceId: number;
}

export interface CreateSubmissionInput {
  uploadId: number;
  initialScore?: number | undefined;
  finalScore?: number | undefined;
  placement?: number | undefined;
  prizeId?: number | undefined;
  submissionStatusId: number;
  submissionTypeId: number;
}

export interface UpdateSubmissionInput {
  submissionId: number;
  initialScore?: number | undefined;
  finalScore?: number | undefined;
  placement?: number | undefined;
  prizeId?: number | undefined;
}

export interface Upload {
  uploadId: number;
  projectId: number;
  uploadStatusId: number;
  resourceRoleId: number;
  resourceId: number;
}

export interface CreateUploadInput {
  projectId: number;
  uploadStatusId: number;
  resourceId: number;
  projectPhaseId: number;
  uploadTypeId: number;
  parameter: string;
}

export interface ReviewComment {
  reviewCommentId: number;
  resourceId: number;
  reviewId: number;
  commentTypeId: number;
  content: string;
}

export interface CreateReviewComment {
  resourceId: number;
  reviewId: number;
  commentTypeId: number;
  content: string;
}

export interface ReviewItemComment {
  reviewItemCommentId: number;
  resourceId: number;
  reviewItemId: number;
  commentTypeId: number;
  content: string;
  sort: number;
}

export interface CreateReviewItemCommentInput {
  resourceId: number;
  reviewItemId: number;
  commentTypeId: number;
  content: string;
  sort: number;
}

export interface ScorecardGroup {
  scorecardGroupId: number;
  scorecardId: number;
  name: string;
  weight: number;
  sort: number;
  version: number;
  createUser?: number | undefined;
  createDate?: number | undefined;
  modifyUser?: number | undefined;
  modifyDate?: number | undefined;
}

export interface ScorecardGroupList {
  items: ScorecardGroup[];
}

export interface GetScorecardGroupsInput {
  scorecardId: number;
}

export interface ScorecardSection {
  scorecardSectionId: number;
  scorecardGroupId: number;
  name: string;
  weight: number;
  sort: number;
  version: number;
  createUser?: number | undefined;
  createDate?: number | undefined;
  modifyUser?: number | undefined;
  modifyDate?: number | undefined;
}

export interface ScorecardSectionList {
  items: ScorecardSection[];
}

export interface GetScorecardSectionsInput {
  scorecardGroupId: number;
}

function createBaseReview(): Review {
  return {
    reviewId: 0,
    resourceId: 0,
    submissionId: 0,
    projectPhaseId: 0,
    scorecardId: 0,
    committed: 0,
    score: 0,
    initialScore: 0,
    createUser: 0,
    createDate: 0,
    modifyUser: 0,
    modifyDate: 0,
  };
}

export const Review = {
  encode(message: Review, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reviewId !== 0) {
      writer.uint32(8).int32(message.reviewId);
    }
    if (message.resourceId !== 0) {
      writer.uint32(16).int32(message.resourceId);
    }
    if (message.submissionId !== 0) {
      writer.uint32(24).int32(message.submissionId);
    }
    if (message.projectPhaseId !== 0) {
      writer.uint32(32).int32(message.projectPhaseId);
    }
    if (message.scorecardId !== 0) {
      writer.uint32(40).int32(message.scorecardId);
    }
    if (message.committed !== 0) {
      writer.uint32(48).int32(message.committed);
    }
    if (message.score !== 0) {
      writer.uint32(61).float(message.score);
    }
    if (message.initialScore !== 0) {
      writer.uint32(69).float(message.initialScore);
    }
    if (message.createUser !== 0) {
      writer.uint32(72).int32(message.createUser);
    }
    if (message.createDate !== 0) {
      writer.uint32(80).int64(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(88).int32(message.modifyUser);
    }
    if (message.modifyDate !== 0) {
      writer.uint32(96).int64(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Review {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewId = reader.int32();
          break;
        case 2:
          message.resourceId = reader.int32();
          break;
        case 3:
          message.submissionId = reader.int32();
          break;
        case 4:
          message.projectPhaseId = reader.int32();
          break;
        case 5:
          message.scorecardId = reader.int32();
          break;
        case 6:
          message.committed = reader.int32();
          break;
        case 7:
          message.score = reader.float();
          break;
        case 8:
          message.initialScore = reader.float();
          break;
        case 9:
          message.createUser = reader.int32();
          break;
        case 10:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.modifyUser = reader.int32();
          break;
        case 12:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Review {
    return {
      reviewId: isSet(object.reviewId) ? Number(object.reviewId) : 0,
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      submissionId: isSet(object.submissionId) ? Number(object.submissionId) : 0,
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : 0,
      scorecardId: isSet(object.scorecardId) ? Number(object.scorecardId) : 0,
      committed: isSet(object.committed) ? Number(object.committed) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
      initialScore: isSet(object.initialScore) ? Number(object.initialScore) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
    };
  },

  toJSON(message: Review): unknown {
    const obj: any = {};
    message.reviewId !== undefined && (obj.reviewId = Math.round(message.reviewId));
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.submissionId !== undefined && (obj.submissionId = Math.round(message.submissionId));
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    message.scorecardId !== undefined && (obj.scorecardId = Math.round(message.scorecardId));
    message.committed !== undefined && (obj.committed = Math.round(message.committed));
    message.score !== undefined && (obj.score = message.score);
    message.initialScore !== undefined && (obj.initialScore = message.initialScore);
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<Review>, I>>(base?: I): Review {
    return Review.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Review>, I>>(object: I): Review {
    const message = createBaseReview();
    message.reviewId = object.reviewId ?? 0;
    message.resourceId = object.resourceId ?? 0;
    message.submissionId = object.submissionId ?? 0;
    message.projectPhaseId = object.projectPhaseId ?? 0;
    message.scorecardId = object.scorecardId ?? 0;
    message.committed = object.committed ?? 0;
    message.score = object.score ?? 0;
    message.initialScore = object.initialScore ?? 0;
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
    return message;
  },
};

function createBaseReviewList(): ReviewList {
  return { items: [] };
}

export const ReviewList = {
  encode(message: ReviewList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Review.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReviewList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Review.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReviewList {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => Review.fromJSON(e)) : [] };
  },

  toJSON(message: ReviewList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Review.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReviewList>, I>>(base?: I): ReviewList {
    return ReviewList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReviewList>, I>>(object: I): ReviewList {
    const message = createBaseReviewList();
    message.items = object.items?.map((e) => Review.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateReviewInput(): CreateReviewInput {
  return { resourceId: 0, submissionId: 0, projectPhaseId: 0, scorecardId: 0, committed: 0, score: 0, initialScore: 0 };
}

export const CreateReviewInput = {
  encode(message: CreateReviewInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(16).int32(message.resourceId);
    }
    if (message.submissionId !== 0) {
      writer.uint32(24).int32(message.submissionId);
    }
    if (message.projectPhaseId !== 0) {
      writer.uint32(32).int32(message.projectPhaseId);
    }
    if (message.scorecardId !== 0) {
      writer.uint32(40).int32(message.scorecardId);
    }
    if (message.committed !== 0) {
      writer.uint32(48).int32(message.committed);
    }
    if (message.score !== 0) {
      writer.uint32(61).float(message.score);
    }
    if (message.initialScore !== 0) {
      writer.uint32(69).float(message.initialScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateReviewInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateReviewInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.resourceId = reader.int32();
          break;
        case 3:
          message.submissionId = reader.int32();
          break;
        case 4:
          message.projectPhaseId = reader.int32();
          break;
        case 5:
          message.scorecardId = reader.int32();
          break;
        case 6:
          message.committed = reader.int32();
          break;
        case 7:
          message.score = reader.float();
          break;
        case 8:
          message.initialScore = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateReviewInput {
    return {
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      submissionId: isSet(object.submissionId) ? Number(object.submissionId) : 0,
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : 0,
      scorecardId: isSet(object.scorecardId) ? Number(object.scorecardId) : 0,
      committed: isSet(object.committed) ? Number(object.committed) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
      initialScore: isSet(object.initialScore) ? Number(object.initialScore) : 0,
    };
  },

  toJSON(message: CreateReviewInput): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.submissionId !== undefined && (obj.submissionId = Math.round(message.submissionId));
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    message.scorecardId !== undefined && (obj.scorecardId = Math.round(message.scorecardId));
    message.committed !== undefined && (obj.committed = Math.round(message.committed));
    message.score !== undefined && (obj.score = message.score);
    message.initialScore !== undefined && (obj.initialScore = message.initialScore);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateReviewInput>, I>>(base?: I): CreateReviewInput {
    return CreateReviewInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateReviewInput>, I>>(object: I): CreateReviewInput {
    const message = createBaseCreateReviewInput();
    message.resourceId = object.resourceId ?? 0;
    message.submissionId = object.submissionId ?? 0;
    message.projectPhaseId = object.projectPhaseId ?? 0;
    message.scorecardId = object.scorecardId ?? 0;
    message.committed = object.committed ?? 0;
    message.score = object.score ?? 0;
    message.initialScore = object.initialScore ?? 0;
    return message;
  },
};

function createBaseReviewItem(): ReviewItem {
  return {
    reviewItemId: 0,
    reviewId: 0,
    scorecardQuestionId: 0,
    uploadId: undefined,
    answer: "",
    sort: 0,
    createUser: undefined,
    createDate: undefined,
    modifyUser: undefined,
    modifyDate: undefined,
  };
}

export const ReviewItem = {
  encode(message: ReviewItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reviewItemId !== 0) {
      writer.uint32(8).int32(message.reviewItemId);
    }
    if (message.reviewId !== 0) {
      writer.uint32(16).int32(message.reviewId);
    }
    if (message.scorecardQuestionId !== 0) {
      writer.uint32(24).int32(message.scorecardQuestionId);
    }
    if (message.uploadId !== undefined) {
      writer.uint32(32).int32(message.uploadId);
    }
    if (message.answer !== "") {
      writer.uint32(42).string(message.answer);
    }
    if (message.sort !== 0) {
      writer.uint32(48).int32(message.sort);
    }
    if (message.createUser !== undefined) {
      writer.uint32(56).int32(message.createUser);
    }
    if (message.createDate !== undefined) {
      writer.uint32(64).int64(message.createDate);
    }
    if (message.modifyUser !== undefined) {
      writer.uint32(72).int32(message.modifyUser);
    }
    if (message.modifyDate !== undefined) {
      writer.uint32(80).int64(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReviewItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewItemId = reader.int32();
          break;
        case 2:
          message.reviewId = reader.int32();
          break;
        case 3:
          message.scorecardQuestionId = reader.int32();
          break;
        case 4:
          message.uploadId = reader.int32();
          break;
        case 5:
          message.answer = reader.string();
          break;
        case 6:
          message.sort = reader.int32();
          break;
        case 7:
          message.createUser = reader.int32();
          break;
        case 8:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.modifyUser = reader.int32();
          break;
        case 10:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReviewItem {
    return {
      reviewItemId: isSet(object.reviewItemId) ? Number(object.reviewItemId) : 0,
      reviewId: isSet(object.reviewId) ? Number(object.reviewId) : 0,
      scorecardQuestionId: isSet(object.scorecardQuestionId) ? Number(object.scorecardQuestionId) : 0,
      uploadId: isSet(object.uploadId) ? Number(object.uploadId) : undefined,
      answer: isSet(object.answer) ? String(object.answer) : "",
      sort: isSet(object.sort) ? Number(object.sort) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : undefined,
      createDate: isSet(object.createDate) ? Number(object.createDate) : undefined,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : undefined,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : undefined,
    };
  },

  toJSON(message: ReviewItem): unknown {
    const obj: any = {};
    message.reviewItemId !== undefined && (obj.reviewItemId = Math.round(message.reviewItemId));
    message.reviewId !== undefined && (obj.reviewId = Math.round(message.reviewId));
    message.scorecardQuestionId !== undefined && (obj.scorecardQuestionId = Math.round(message.scorecardQuestionId));
    message.uploadId !== undefined && (obj.uploadId = Math.round(message.uploadId));
    message.answer !== undefined && (obj.answer = message.answer);
    message.sort !== undefined && (obj.sort = Math.round(message.sort));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<ReviewItem>, I>>(base?: I): ReviewItem {
    return ReviewItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReviewItem>, I>>(object: I): ReviewItem {
    const message = createBaseReviewItem();
    message.reviewItemId = object.reviewItemId ?? 0;
    message.reviewId = object.reviewId ?? 0;
    message.scorecardQuestionId = object.scorecardQuestionId ?? 0;
    message.uploadId = object.uploadId ?? undefined;
    message.answer = object.answer ?? "";
    message.sort = object.sort ?? 0;
    message.createUser = object.createUser ?? undefined;
    message.createDate = object.createDate ?? undefined;
    message.modifyUser = object.modifyUser ?? undefined;
    message.modifyDate = object.modifyDate ?? undefined;
    return message;
  },
};

function createBaseCreateReviewItemInput(): CreateReviewItemInput {
  return { reviewId: 0, scorecardQuestionId: 0, uploadId: undefined, answer: "", sort: 0 };
}

export const CreateReviewItemInput = {
  encode(message: CreateReviewItemInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reviewId !== 0) {
      writer.uint32(16).int32(message.reviewId);
    }
    if (message.scorecardQuestionId !== 0) {
      writer.uint32(24).int32(message.scorecardQuestionId);
    }
    if (message.uploadId !== undefined) {
      writer.uint32(32).int32(message.uploadId);
    }
    if (message.answer !== "") {
      writer.uint32(42).string(message.answer);
    }
    if (message.sort !== 0) {
      writer.uint32(48).int32(message.sort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateReviewItemInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateReviewItemInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.reviewId = reader.int32();
          break;
        case 3:
          message.scorecardQuestionId = reader.int32();
          break;
        case 4:
          message.uploadId = reader.int32();
          break;
        case 5:
          message.answer = reader.string();
          break;
        case 6:
          message.sort = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateReviewItemInput {
    return {
      reviewId: isSet(object.reviewId) ? Number(object.reviewId) : 0,
      scorecardQuestionId: isSet(object.scorecardQuestionId) ? Number(object.scorecardQuestionId) : 0,
      uploadId: isSet(object.uploadId) ? Number(object.uploadId) : undefined,
      answer: isSet(object.answer) ? String(object.answer) : "",
      sort: isSet(object.sort) ? Number(object.sort) : 0,
    };
  },

  toJSON(message: CreateReviewItemInput): unknown {
    const obj: any = {};
    message.reviewId !== undefined && (obj.reviewId = Math.round(message.reviewId));
    message.scorecardQuestionId !== undefined && (obj.scorecardQuestionId = Math.round(message.scorecardQuestionId));
    message.uploadId !== undefined && (obj.uploadId = Math.round(message.uploadId));
    message.answer !== undefined && (obj.answer = message.answer);
    message.sort !== undefined && (obj.sort = Math.round(message.sort));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateReviewItemInput>, I>>(base?: I): CreateReviewItemInput {
    return CreateReviewItemInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateReviewItemInput>, I>>(object: I): CreateReviewItemInput {
    const message = createBaseCreateReviewItemInput();
    message.reviewId = object.reviewId ?? 0;
    message.scorecardQuestionId = object.scorecardQuestionId ?? 0;
    message.uploadId = object.uploadId ?? undefined;
    message.answer = object.answer ?? "";
    message.sort = object.sort ?? 0;
    return message;
  },
};

function createBaseSubmission(): Submission {
  return {
    submissionId: 0,
    uploadId: 0,
    initialScore: undefined,
    finalScore: undefined,
    placement: undefined,
    prizeId: undefined,
    submissionStatusId: 0,
    submissionTypeId: 0,
  };
}

export const Submission = {
  encode(message: Submission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submissionId !== 0) {
      writer.uint32(8).int32(message.submissionId);
    }
    if (message.uploadId !== 0) {
      writer.uint32(16).int32(message.uploadId);
    }
    if (message.initialScore !== undefined) {
      writer.uint32(24).int32(message.initialScore);
    }
    if (message.finalScore !== undefined) {
      writer.uint32(32).int32(message.finalScore);
    }
    if (message.placement !== undefined) {
      writer.uint32(40).int32(message.placement);
    }
    if (message.prizeId !== undefined) {
      writer.uint32(48).int32(message.prizeId);
    }
    if (message.submissionStatusId !== 0) {
      writer.uint32(56).int32(message.submissionStatusId);
    }
    if (message.submissionTypeId !== 0) {
      writer.uint32(64).int32(message.submissionTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Submission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submissionId = reader.int32();
          break;
        case 2:
          message.uploadId = reader.int32();
          break;
        case 3:
          message.initialScore = reader.int32();
          break;
        case 4:
          message.finalScore = reader.int32();
          break;
        case 5:
          message.placement = reader.int32();
          break;
        case 6:
          message.prizeId = reader.int32();
          break;
        case 7:
          message.submissionStatusId = reader.int32();
          break;
        case 8:
          message.submissionTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Submission {
    return {
      submissionId: isSet(object.submissionId) ? Number(object.submissionId) : 0,
      uploadId: isSet(object.uploadId) ? Number(object.uploadId) : 0,
      initialScore: isSet(object.initialScore) ? Number(object.initialScore) : undefined,
      finalScore: isSet(object.finalScore) ? Number(object.finalScore) : undefined,
      placement: isSet(object.placement) ? Number(object.placement) : undefined,
      prizeId: isSet(object.prizeId) ? Number(object.prizeId) : undefined,
      submissionStatusId: isSet(object.submissionStatusId) ? Number(object.submissionStatusId) : 0,
      submissionTypeId: isSet(object.submissionTypeId) ? Number(object.submissionTypeId) : 0,
    };
  },

  toJSON(message: Submission): unknown {
    const obj: any = {};
    message.submissionId !== undefined && (obj.submissionId = Math.round(message.submissionId));
    message.uploadId !== undefined && (obj.uploadId = Math.round(message.uploadId));
    message.initialScore !== undefined && (obj.initialScore = Math.round(message.initialScore));
    message.finalScore !== undefined && (obj.finalScore = Math.round(message.finalScore));
    message.placement !== undefined && (obj.placement = Math.round(message.placement));
    message.prizeId !== undefined && (obj.prizeId = Math.round(message.prizeId));
    message.submissionStatusId !== undefined && (obj.submissionStatusId = Math.round(message.submissionStatusId));
    message.submissionTypeId !== undefined && (obj.submissionTypeId = Math.round(message.submissionTypeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<Submission>, I>>(base?: I): Submission {
    return Submission.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Submission>, I>>(object: I): Submission {
    const message = createBaseSubmission();
    message.submissionId = object.submissionId ?? 0;
    message.uploadId = object.uploadId ?? 0;
    message.initialScore = object.initialScore ?? undefined;
    message.finalScore = object.finalScore ?? undefined;
    message.placement = object.placement ?? undefined;
    message.prizeId = object.prizeId ?? undefined;
    message.submissionStatusId = object.submissionStatusId ?? 0;
    message.submissionTypeId = object.submissionTypeId ?? 0;
    return message;
  },
};

function createBaseGetSubmissionInput(): GetSubmissionInput {
  return { projectId: 0, submissionStatusId: undefined, uploadStatusId: undefined, resourceId: 0 };
}

export const GetSubmissionInput = {
  encode(message: GetSubmissionInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.submissionStatusId !== undefined) {
      writer.uint32(16).int32(message.submissionStatusId);
    }
    if (message.uploadStatusId !== undefined) {
      writer.uint32(24).int32(message.uploadStatusId);
    }
    if (message.resourceId !== 0) {
      writer.uint32(32).int32(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSubmissionInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSubmissionInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.submissionStatusId = reader.int32();
          break;
        case 3:
          message.uploadStatusId = reader.int32();
          break;
        case 4:
          message.resourceId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSubmissionInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      submissionStatusId: isSet(object.submissionStatusId) ? Number(object.submissionStatusId) : undefined,
      uploadStatusId: isSet(object.uploadStatusId) ? Number(object.uploadStatusId) : undefined,
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
    };
  },

  toJSON(message: GetSubmissionInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.submissionStatusId !== undefined && (obj.submissionStatusId = Math.round(message.submissionStatusId));
    message.uploadStatusId !== undefined && (obj.uploadStatusId = Math.round(message.uploadStatusId));
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSubmissionInput>, I>>(base?: I): GetSubmissionInput {
    return GetSubmissionInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetSubmissionInput>, I>>(object: I): GetSubmissionInput {
    const message = createBaseGetSubmissionInput();
    message.projectId = object.projectId ?? 0;
    message.submissionStatusId = object.submissionStatusId ?? undefined;
    message.uploadStatusId = object.uploadStatusId ?? undefined;
    message.resourceId = object.resourceId ?? 0;
    return message;
  },
};

function createBaseCreateSubmissionInput(): CreateSubmissionInput {
  return {
    uploadId: 0,
    initialScore: undefined,
    finalScore: undefined,
    placement: undefined,
    prizeId: undefined,
    submissionStatusId: 0,
    submissionTypeId: 0,
  };
}

export const CreateSubmissionInput = {
  encode(message: CreateSubmissionInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uploadId !== 0) {
      writer.uint32(8).int32(message.uploadId);
    }
    if (message.initialScore !== undefined) {
      writer.uint32(16).int32(message.initialScore);
    }
    if (message.finalScore !== undefined) {
      writer.uint32(24).int32(message.finalScore);
    }
    if (message.placement !== undefined) {
      writer.uint32(32).int32(message.placement);
    }
    if (message.prizeId !== undefined) {
      writer.uint32(40).int32(message.prizeId);
    }
    if (message.submissionStatusId !== 0) {
      writer.uint32(48).int32(message.submissionStatusId);
    }
    if (message.submissionTypeId !== 0) {
      writer.uint32(56).int32(message.submissionTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubmissionInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubmissionInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploadId = reader.int32();
          break;
        case 2:
          message.initialScore = reader.int32();
          break;
        case 3:
          message.finalScore = reader.int32();
          break;
        case 4:
          message.placement = reader.int32();
          break;
        case 5:
          message.prizeId = reader.int32();
          break;
        case 6:
          message.submissionStatusId = reader.int32();
          break;
        case 7:
          message.submissionTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSubmissionInput {
    return {
      uploadId: isSet(object.uploadId) ? Number(object.uploadId) : 0,
      initialScore: isSet(object.initialScore) ? Number(object.initialScore) : undefined,
      finalScore: isSet(object.finalScore) ? Number(object.finalScore) : undefined,
      placement: isSet(object.placement) ? Number(object.placement) : undefined,
      prizeId: isSet(object.prizeId) ? Number(object.prizeId) : undefined,
      submissionStatusId: isSet(object.submissionStatusId) ? Number(object.submissionStatusId) : 0,
      submissionTypeId: isSet(object.submissionTypeId) ? Number(object.submissionTypeId) : 0,
    };
  },

  toJSON(message: CreateSubmissionInput): unknown {
    const obj: any = {};
    message.uploadId !== undefined && (obj.uploadId = Math.round(message.uploadId));
    message.initialScore !== undefined && (obj.initialScore = Math.round(message.initialScore));
    message.finalScore !== undefined && (obj.finalScore = Math.round(message.finalScore));
    message.placement !== undefined && (obj.placement = Math.round(message.placement));
    message.prizeId !== undefined && (obj.prizeId = Math.round(message.prizeId));
    message.submissionStatusId !== undefined && (obj.submissionStatusId = Math.round(message.submissionStatusId));
    message.submissionTypeId !== undefined && (obj.submissionTypeId = Math.round(message.submissionTypeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubmissionInput>, I>>(base?: I): CreateSubmissionInput {
    return CreateSubmissionInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubmissionInput>, I>>(object: I): CreateSubmissionInput {
    const message = createBaseCreateSubmissionInput();
    message.uploadId = object.uploadId ?? 0;
    message.initialScore = object.initialScore ?? undefined;
    message.finalScore = object.finalScore ?? undefined;
    message.placement = object.placement ?? undefined;
    message.prizeId = object.prizeId ?? undefined;
    message.submissionStatusId = object.submissionStatusId ?? 0;
    message.submissionTypeId = object.submissionTypeId ?? 0;
    return message;
  },
};

function createBaseUpdateSubmissionInput(): UpdateSubmissionInput {
  return { submissionId: 0, initialScore: undefined, finalScore: undefined, placement: undefined, prizeId: undefined };
}

export const UpdateSubmissionInput = {
  encode(message: UpdateSubmissionInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submissionId !== 0) {
      writer.uint32(8).int32(message.submissionId);
    }
    if (message.initialScore !== undefined) {
      writer.uint32(24).int32(message.initialScore);
    }
    if (message.finalScore !== undefined) {
      writer.uint32(32).int32(message.finalScore);
    }
    if (message.placement !== undefined) {
      writer.uint32(40).int32(message.placement);
    }
    if (message.prizeId !== undefined) {
      writer.uint32(48).int32(message.prizeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubmissionInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubmissionInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submissionId = reader.int32();
          break;
        case 3:
          message.initialScore = reader.int32();
          break;
        case 4:
          message.finalScore = reader.int32();
          break;
        case 5:
          message.placement = reader.int32();
          break;
        case 6:
          message.prizeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSubmissionInput {
    return {
      submissionId: isSet(object.submissionId) ? Number(object.submissionId) : 0,
      initialScore: isSet(object.initialScore) ? Number(object.initialScore) : undefined,
      finalScore: isSet(object.finalScore) ? Number(object.finalScore) : undefined,
      placement: isSet(object.placement) ? Number(object.placement) : undefined,
      prizeId: isSet(object.prizeId) ? Number(object.prizeId) : undefined,
    };
  },

  toJSON(message: UpdateSubmissionInput): unknown {
    const obj: any = {};
    message.submissionId !== undefined && (obj.submissionId = Math.round(message.submissionId));
    message.initialScore !== undefined && (obj.initialScore = Math.round(message.initialScore));
    message.finalScore !== undefined && (obj.finalScore = Math.round(message.finalScore));
    message.placement !== undefined && (obj.placement = Math.round(message.placement));
    message.prizeId !== undefined && (obj.prizeId = Math.round(message.prizeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSubmissionInput>, I>>(base?: I): UpdateSubmissionInput {
    return UpdateSubmissionInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSubmissionInput>, I>>(object: I): UpdateSubmissionInput {
    const message = createBaseUpdateSubmissionInput();
    message.submissionId = object.submissionId ?? 0;
    message.initialScore = object.initialScore ?? undefined;
    message.finalScore = object.finalScore ?? undefined;
    message.placement = object.placement ?? undefined;
    message.prizeId = object.prizeId ?? undefined;
    return message;
  },
};

function createBaseUpload(): Upload {
  return { uploadId: 0, projectId: 0, uploadStatusId: 0, resourceRoleId: 0, resourceId: 0 };
}

export const Upload = {
  encode(message: Upload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uploadId !== 0) {
      writer.uint32(8).int32(message.uploadId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.uploadStatusId !== 0) {
      writer.uint32(24).int32(message.uploadStatusId);
    }
    if (message.resourceRoleId !== 0) {
      writer.uint32(32).int32(message.resourceRoleId);
    }
    if (message.resourceId !== 0) {
      writer.uint32(40).int32(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Upload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploadId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.uploadStatusId = reader.int32();
          break;
        case 4:
          message.resourceRoleId = reader.int32();
          break;
        case 5:
          message.resourceId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Upload {
    return {
      uploadId: isSet(object.uploadId) ? Number(object.uploadId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      uploadStatusId: isSet(object.uploadStatusId) ? Number(object.uploadStatusId) : 0,
      resourceRoleId: isSet(object.resourceRoleId) ? Number(object.resourceRoleId) : 0,
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
    };
  },

  toJSON(message: Upload): unknown {
    const obj: any = {};
    message.uploadId !== undefined && (obj.uploadId = Math.round(message.uploadId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.uploadStatusId !== undefined && (obj.uploadStatusId = Math.round(message.uploadStatusId));
    message.resourceRoleId !== undefined && (obj.resourceRoleId = Math.round(message.resourceRoleId));
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    return obj;
  },

  create<I extends Exact<DeepPartial<Upload>, I>>(base?: I): Upload {
    return Upload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Upload>, I>>(object: I): Upload {
    const message = createBaseUpload();
    message.uploadId = object.uploadId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.uploadStatusId = object.uploadStatusId ?? 0;
    message.resourceRoleId = object.resourceRoleId ?? 0;
    message.resourceId = object.resourceId ?? 0;
    return message;
  },
};

function createBaseCreateUploadInput(): CreateUploadInput {
  return { projectId: 0, uploadStatusId: 0, resourceId: 0, projectPhaseId: 0, uploadTypeId: 0, parameter: "" };
}

export const CreateUploadInput = {
  encode(message: CreateUploadInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.uploadStatusId !== 0) {
      writer.uint32(24).int32(message.uploadStatusId);
    }
    if (message.resourceId !== 0) {
      writer.uint32(32).int32(message.resourceId);
    }
    if (message.projectPhaseId !== 0) {
      writer.uint32(40).int32(message.projectPhaseId);
    }
    if (message.uploadTypeId !== 0) {
      writer.uint32(48).int32(message.uploadTypeId);
    }
    if (message.parameter !== "") {
      writer.uint32(58).string(message.parameter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUploadInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUploadInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.uploadStatusId = reader.int32();
          break;
        case 4:
          message.resourceId = reader.int32();
          break;
        case 5:
          message.projectPhaseId = reader.int32();
          break;
        case 6:
          message.uploadTypeId = reader.int32();
          break;
        case 7:
          message.parameter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUploadInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      uploadStatusId: isSet(object.uploadStatusId) ? Number(object.uploadStatusId) : 0,
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : 0,
      uploadTypeId: isSet(object.uploadTypeId) ? Number(object.uploadTypeId) : 0,
      parameter: isSet(object.parameter) ? String(object.parameter) : "",
    };
  },

  toJSON(message: CreateUploadInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.uploadStatusId !== undefined && (obj.uploadStatusId = Math.round(message.uploadStatusId));
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    message.uploadTypeId !== undefined && (obj.uploadTypeId = Math.round(message.uploadTypeId));
    message.parameter !== undefined && (obj.parameter = message.parameter);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUploadInput>, I>>(base?: I): CreateUploadInput {
    return CreateUploadInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateUploadInput>, I>>(object: I): CreateUploadInput {
    const message = createBaseCreateUploadInput();
    message.projectId = object.projectId ?? 0;
    message.uploadStatusId = object.uploadStatusId ?? 0;
    message.resourceId = object.resourceId ?? 0;
    message.projectPhaseId = object.projectPhaseId ?? 0;
    message.uploadTypeId = object.uploadTypeId ?? 0;
    message.parameter = object.parameter ?? "";
    return message;
  },
};

function createBaseReviewComment(): ReviewComment {
  return { reviewCommentId: 0, resourceId: 0, reviewId: 0, commentTypeId: 0, content: "" };
}

export const ReviewComment = {
  encode(message: ReviewComment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reviewCommentId !== 0) {
      writer.uint32(8).int32(message.reviewCommentId);
    }
    if (message.resourceId !== 0) {
      writer.uint32(16).int32(message.resourceId);
    }
    if (message.reviewId !== 0) {
      writer.uint32(24).int32(message.reviewId);
    }
    if (message.commentTypeId !== 0) {
      writer.uint32(32).int32(message.commentTypeId);
    }
    if (message.content !== "") {
      writer.uint32(42).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReviewComment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewComment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewCommentId = reader.int32();
          break;
        case 2:
          message.resourceId = reader.int32();
          break;
        case 3:
          message.reviewId = reader.int32();
          break;
        case 4:
          message.commentTypeId = reader.int32();
          break;
        case 5:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReviewComment {
    return {
      reviewCommentId: isSet(object.reviewCommentId) ? Number(object.reviewCommentId) : 0,
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      reviewId: isSet(object.reviewId) ? Number(object.reviewId) : 0,
      commentTypeId: isSet(object.commentTypeId) ? Number(object.commentTypeId) : 0,
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: ReviewComment): unknown {
    const obj: any = {};
    message.reviewCommentId !== undefined && (obj.reviewCommentId = Math.round(message.reviewCommentId));
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.reviewId !== undefined && (obj.reviewId = Math.round(message.reviewId));
    message.commentTypeId !== undefined && (obj.commentTypeId = Math.round(message.commentTypeId));
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  create<I extends Exact<DeepPartial<ReviewComment>, I>>(base?: I): ReviewComment {
    return ReviewComment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReviewComment>, I>>(object: I): ReviewComment {
    const message = createBaseReviewComment();
    message.reviewCommentId = object.reviewCommentId ?? 0;
    message.resourceId = object.resourceId ?? 0;
    message.reviewId = object.reviewId ?? 0;
    message.commentTypeId = object.commentTypeId ?? 0;
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseCreateReviewComment(): CreateReviewComment {
  return { resourceId: 0, reviewId: 0, commentTypeId: 0, content: "" };
}

export const CreateReviewComment = {
  encode(message: CreateReviewComment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(16).int32(message.resourceId);
    }
    if (message.reviewId !== 0) {
      writer.uint32(24).int32(message.reviewId);
    }
    if (message.commentTypeId !== 0) {
      writer.uint32(32).int32(message.commentTypeId);
    }
    if (message.content !== "") {
      writer.uint32(42).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateReviewComment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateReviewComment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.resourceId = reader.int32();
          break;
        case 3:
          message.reviewId = reader.int32();
          break;
        case 4:
          message.commentTypeId = reader.int32();
          break;
        case 5:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateReviewComment {
    return {
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      reviewId: isSet(object.reviewId) ? Number(object.reviewId) : 0,
      commentTypeId: isSet(object.commentTypeId) ? Number(object.commentTypeId) : 0,
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: CreateReviewComment): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.reviewId !== undefined && (obj.reviewId = Math.round(message.reviewId));
    message.commentTypeId !== undefined && (obj.commentTypeId = Math.round(message.commentTypeId));
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateReviewComment>, I>>(base?: I): CreateReviewComment {
    return CreateReviewComment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateReviewComment>, I>>(object: I): CreateReviewComment {
    const message = createBaseCreateReviewComment();
    message.resourceId = object.resourceId ?? 0;
    message.reviewId = object.reviewId ?? 0;
    message.commentTypeId = object.commentTypeId ?? 0;
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseReviewItemComment(): ReviewItemComment {
  return { reviewItemCommentId: 0, resourceId: 0, reviewItemId: 0, commentTypeId: 0, content: "", sort: 0 };
}

export const ReviewItemComment = {
  encode(message: ReviewItemComment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reviewItemCommentId !== 0) {
      writer.uint32(8).int32(message.reviewItemCommentId);
    }
    if (message.resourceId !== 0) {
      writer.uint32(16).int32(message.resourceId);
    }
    if (message.reviewItemId !== 0) {
      writer.uint32(24).int32(message.reviewItemId);
    }
    if (message.commentTypeId !== 0) {
      writer.uint32(32).int32(message.commentTypeId);
    }
    if (message.content !== "") {
      writer.uint32(42).string(message.content);
    }
    if (message.sort !== 0) {
      writer.uint32(48).int32(message.sort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReviewItemComment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewItemComment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewItemCommentId = reader.int32();
          break;
        case 2:
          message.resourceId = reader.int32();
          break;
        case 3:
          message.reviewItemId = reader.int32();
          break;
        case 4:
          message.commentTypeId = reader.int32();
          break;
        case 5:
          message.content = reader.string();
          break;
        case 6:
          message.sort = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReviewItemComment {
    return {
      reviewItemCommentId: isSet(object.reviewItemCommentId) ? Number(object.reviewItemCommentId) : 0,
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      reviewItemId: isSet(object.reviewItemId) ? Number(object.reviewItemId) : 0,
      commentTypeId: isSet(object.commentTypeId) ? Number(object.commentTypeId) : 0,
      content: isSet(object.content) ? String(object.content) : "",
      sort: isSet(object.sort) ? Number(object.sort) : 0,
    };
  },

  toJSON(message: ReviewItemComment): unknown {
    const obj: any = {};
    message.reviewItemCommentId !== undefined && (obj.reviewItemCommentId = Math.round(message.reviewItemCommentId));
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.reviewItemId !== undefined && (obj.reviewItemId = Math.round(message.reviewItemId));
    message.commentTypeId !== undefined && (obj.commentTypeId = Math.round(message.commentTypeId));
    message.content !== undefined && (obj.content = message.content);
    message.sort !== undefined && (obj.sort = Math.round(message.sort));
    return obj;
  },

  create<I extends Exact<DeepPartial<ReviewItemComment>, I>>(base?: I): ReviewItemComment {
    return ReviewItemComment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReviewItemComment>, I>>(object: I): ReviewItemComment {
    const message = createBaseReviewItemComment();
    message.reviewItemCommentId = object.reviewItemCommentId ?? 0;
    message.resourceId = object.resourceId ?? 0;
    message.reviewItemId = object.reviewItemId ?? 0;
    message.commentTypeId = object.commentTypeId ?? 0;
    message.content = object.content ?? "";
    message.sort = object.sort ?? 0;
    return message;
  },
};

function createBaseCreateReviewItemCommentInput(): CreateReviewItemCommentInput {
  return { resourceId: 0, reviewItemId: 0, commentTypeId: 0, content: "", sort: 0 };
}

export const CreateReviewItemCommentInput = {
  encode(message: CreateReviewItemCommentInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(16).int32(message.resourceId);
    }
    if (message.reviewItemId !== 0) {
      writer.uint32(24).int32(message.reviewItemId);
    }
    if (message.commentTypeId !== 0) {
      writer.uint32(32).int32(message.commentTypeId);
    }
    if (message.content !== "") {
      writer.uint32(42).string(message.content);
    }
    if (message.sort !== 0) {
      writer.uint32(48).int32(message.sort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateReviewItemCommentInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateReviewItemCommentInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.resourceId = reader.int32();
          break;
        case 3:
          message.reviewItemId = reader.int32();
          break;
        case 4:
          message.commentTypeId = reader.int32();
          break;
        case 5:
          message.content = reader.string();
          break;
        case 6:
          message.sort = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateReviewItemCommentInput {
    return {
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      reviewItemId: isSet(object.reviewItemId) ? Number(object.reviewItemId) : 0,
      commentTypeId: isSet(object.commentTypeId) ? Number(object.commentTypeId) : 0,
      content: isSet(object.content) ? String(object.content) : "",
      sort: isSet(object.sort) ? Number(object.sort) : 0,
    };
  },

  toJSON(message: CreateReviewItemCommentInput): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.reviewItemId !== undefined && (obj.reviewItemId = Math.round(message.reviewItemId));
    message.commentTypeId !== undefined && (obj.commentTypeId = Math.round(message.commentTypeId));
    message.content !== undefined && (obj.content = message.content);
    message.sort !== undefined && (obj.sort = Math.round(message.sort));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateReviewItemCommentInput>, I>>(base?: I): CreateReviewItemCommentInput {
    return CreateReviewItemCommentInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateReviewItemCommentInput>, I>>(object: I): CreateReviewItemCommentInput {
    const message = createBaseCreateReviewItemCommentInput();
    message.resourceId = object.resourceId ?? 0;
    message.reviewItemId = object.reviewItemId ?? 0;
    message.commentTypeId = object.commentTypeId ?? 0;
    message.content = object.content ?? "";
    message.sort = object.sort ?? 0;
    return message;
  },
};

function createBaseScorecardGroup(): ScorecardGroup {
  return {
    scorecardGroupId: 0,
    scorecardId: 0,
    name: "",
    weight: 0,
    sort: 0,
    version: 0,
    createUser: undefined,
    createDate: undefined,
    modifyUser: undefined,
    modifyDate: undefined,
  };
}

export const ScorecardGroup = {
  encode(message: ScorecardGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scorecardGroupId !== 0) {
      writer.uint32(8).int32(message.scorecardGroupId);
    }
    if (message.scorecardId !== 0) {
      writer.uint32(16).int32(message.scorecardId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.weight !== 0) {
      writer.uint32(37).float(message.weight);
    }
    if (message.sort !== 0) {
      writer.uint32(40).int32(message.sort);
    }
    if (message.version !== 0) {
      writer.uint32(48).int32(message.version);
    }
    if (message.createUser !== undefined) {
      writer.uint32(72).int32(message.createUser);
    }
    if (message.createDate !== undefined) {
      writer.uint32(80).int64(message.createDate);
    }
    if (message.modifyUser !== undefined) {
      writer.uint32(88).int32(message.modifyUser);
    }
    if (message.modifyDate !== undefined) {
      writer.uint32(96).int64(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScorecardGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScorecardGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scorecardGroupId = reader.int32();
          break;
        case 2:
          message.scorecardId = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.weight = reader.float();
          break;
        case 5:
          message.sort = reader.int32();
          break;
        case 6:
          message.version = reader.int32();
          break;
        case 9:
          message.createUser = reader.int32();
          break;
        case 10:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.modifyUser = reader.int32();
          break;
        case 12:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScorecardGroup {
    return {
      scorecardGroupId: isSet(object.scorecardGroupId) ? Number(object.scorecardGroupId) : 0,
      scorecardId: isSet(object.scorecardId) ? Number(object.scorecardId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      weight: isSet(object.weight) ? Number(object.weight) : 0,
      sort: isSet(object.sort) ? Number(object.sort) : 0,
      version: isSet(object.version) ? Number(object.version) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : undefined,
      createDate: isSet(object.createDate) ? Number(object.createDate) : undefined,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : undefined,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : undefined,
    };
  },

  toJSON(message: ScorecardGroup): unknown {
    const obj: any = {};
    message.scorecardGroupId !== undefined && (obj.scorecardGroupId = Math.round(message.scorecardGroupId));
    message.scorecardId !== undefined && (obj.scorecardId = Math.round(message.scorecardId));
    message.name !== undefined && (obj.name = message.name);
    message.weight !== undefined && (obj.weight = message.weight);
    message.sort !== undefined && (obj.sort = Math.round(message.sort));
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<ScorecardGroup>, I>>(base?: I): ScorecardGroup {
    return ScorecardGroup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScorecardGroup>, I>>(object: I): ScorecardGroup {
    const message = createBaseScorecardGroup();
    message.scorecardGroupId = object.scorecardGroupId ?? 0;
    message.scorecardId = object.scorecardId ?? 0;
    message.name = object.name ?? "";
    message.weight = object.weight ?? 0;
    message.sort = object.sort ?? 0;
    message.version = object.version ?? 0;
    message.createUser = object.createUser ?? undefined;
    message.createDate = object.createDate ?? undefined;
    message.modifyUser = object.modifyUser ?? undefined;
    message.modifyDate = object.modifyDate ?? undefined;
    return message;
  },
};

function createBaseScorecardGroupList(): ScorecardGroupList {
  return { items: [] };
}

export const ScorecardGroupList = {
  encode(message: ScorecardGroupList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ScorecardGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScorecardGroupList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScorecardGroupList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ScorecardGroup.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScorecardGroupList {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => ScorecardGroup.fromJSON(e)) : [] };
  },

  toJSON(message: ScorecardGroupList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ScorecardGroup.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScorecardGroupList>, I>>(base?: I): ScorecardGroupList {
    return ScorecardGroupList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScorecardGroupList>, I>>(object: I): ScorecardGroupList {
    const message = createBaseScorecardGroupList();
    message.items = object.items?.map((e) => ScorecardGroup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetScorecardGroupsInput(): GetScorecardGroupsInput {
  return { scorecardId: 0 };
}

export const GetScorecardGroupsInput = {
  encode(message: GetScorecardGroupsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scorecardId !== 0) {
      writer.uint32(8).int32(message.scorecardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScorecardGroupsInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScorecardGroupsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scorecardId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetScorecardGroupsInput {
    return { scorecardId: isSet(object.scorecardId) ? Number(object.scorecardId) : 0 };
  },

  toJSON(message: GetScorecardGroupsInput): unknown {
    const obj: any = {};
    message.scorecardId !== undefined && (obj.scorecardId = Math.round(message.scorecardId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScorecardGroupsInput>, I>>(base?: I): GetScorecardGroupsInput {
    return GetScorecardGroupsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetScorecardGroupsInput>, I>>(object: I): GetScorecardGroupsInput {
    const message = createBaseGetScorecardGroupsInput();
    message.scorecardId = object.scorecardId ?? 0;
    return message;
  },
};

function createBaseScorecardSection(): ScorecardSection {
  return {
    scorecardSectionId: 0,
    scorecardGroupId: 0,
    name: "",
    weight: 0,
    sort: 0,
    version: 0,
    createUser: undefined,
    createDate: undefined,
    modifyUser: undefined,
    modifyDate: undefined,
  };
}

export const ScorecardSection = {
  encode(message: ScorecardSection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scorecardSectionId !== 0) {
      writer.uint32(8).int32(message.scorecardSectionId);
    }
    if (message.scorecardGroupId !== 0) {
      writer.uint32(16).int32(message.scorecardGroupId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.weight !== 0) {
      writer.uint32(37).float(message.weight);
    }
    if (message.sort !== 0) {
      writer.uint32(40).int32(message.sort);
    }
    if (message.version !== 0) {
      writer.uint32(48).int32(message.version);
    }
    if (message.createUser !== undefined) {
      writer.uint32(72).int32(message.createUser);
    }
    if (message.createDate !== undefined) {
      writer.uint32(80).int64(message.createDate);
    }
    if (message.modifyUser !== undefined) {
      writer.uint32(88).int32(message.modifyUser);
    }
    if (message.modifyDate !== undefined) {
      writer.uint32(96).int64(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScorecardSection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScorecardSection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scorecardSectionId = reader.int32();
          break;
        case 2:
          message.scorecardGroupId = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.weight = reader.float();
          break;
        case 5:
          message.sort = reader.int32();
          break;
        case 6:
          message.version = reader.int32();
          break;
        case 9:
          message.createUser = reader.int32();
          break;
        case 10:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.modifyUser = reader.int32();
          break;
        case 12:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScorecardSection {
    return {
      scorecardSectionId: isSet(object.scorecardSectionId) ? Number(object.scorecardSectionId) : 0,
      scorecardGroupId: isSet(object.scorecardGroupId) ? Number(object.scorecardGroupId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      weight: isSet(object.weight) ? Number(object.weight) : 0,
      sort: isSet(object.sort) ? Number(object.sort) : 0,
      version: isSet(object.version) ? Number(object.version) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : undefined,
      createDate: isSet(object.createDate) ? Number(object.createDate) : undefined,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : undefined,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : undefined,
    };
  },

  toJSON(message: ScorecardSection): unknown {
    const obj: any = {};
    message.scorecardSectionId !== undefined && (obj.scorecardSectionId = Math.round(message.scorecardSectionId));
    message.scorecardGroupId !== undefined && (obj.scorecardGroupId = Math.round(message.scorecardGroupId));
    message.name !== undefined && (obj.name = message.name);
    message.weight !== undefined && (obj.weight = message.weight);
    message.sort !== undefined && (obj.sort = Math.round(message.sort));
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<ScorecardSection>, I>>(base?: I): ScorecardSection {
    return ScorecardSection.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScorecardSection>, I>>(object: I): ScorecardSection {
    const message = createBaseScorecardSection();
    message.scorecardSectionId = object.scorecardSectionId ?? 0;
    message.scorecardGroupId = object.scorecardGroupId ?? 0;
    message.name = object.name ?? "";
    message.weight = object.weight ?? 0;
    message.sort = object.sort ?? 0;
    message.version = object.version ?? 0;
    message.createUser = object.createUser ?? undefined;
    message.createDate = object.createDate ?? undefined;
    message.modifyUser = object.modifyUser ?? undefined;
    message.modifyDate = object.modifyDate ?? undefined;
    return message;
  },
};

function createBaseScorecardSectionList(): ScorecardSectionList {
  return { items: [] };
}

export const ScorecardSectionList = {
  encode(message: ScorecardSectionList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ScorecardSection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScorecardSectionList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScorecardSectionList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ScorecardSection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScorecardSectionList {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => ScorecardSection.fromJSON(e)) : [] };
  },

  toJSON(message: ScorecardSectionList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ScorecardSection.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScorecardSectionList>, I>>(base?: I): ScorecardSectionList {
    return ScorecardSectionList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScorecardSectionList>, I>>(object: I): ScorecardSectionList {
    const message = createBaseScorecardSectionList();
    message.items = object.items?.map((e) => ScorecardSection.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetScorecardSectionsInput(): GetScorecardSectionsInput {
  return { scorecardGroupId: 0 };
}

export const GetScorecardSectionsInput = {
  encode(message: GetScorecardSectionsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scorecardGroupId !== 0) {
      writer.uint32(8).int32(message.scorecardGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScorecardSectionsInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScorecardSectionsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scorecardGroupId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetScorecardSectionsInput {
    return { scorecardGroupId: isSet(object.scorecardGroupId) ? Number(object.scorecardGroupId) : 0 };
  },

  toJSON(message: GetScorecardSectionsInput): unknown {
    const obj: any = {};
    message.scorecardGroupId !== undefined && (obj.scorecardGroupId = Math.round(message.scorecardGroupId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScorecardSectionsInput>, I>>(base?: I): GetScorecardSectionsInput {
    return GetScorecardSectionsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetScorecardSectionsInput>, I>>(object: I): GetScorecardSectionsInput {
    const message = createBaseGetScorecardSectionsInput();
    message.scorecardGroupId = object.scorecardGroupId ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
