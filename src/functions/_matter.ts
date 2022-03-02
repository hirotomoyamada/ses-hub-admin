import { Matter } from "types/posts";
import { NestedPartial } from "types/utils";

export type Data = {
  display: "public" | "private";
  status: string;
  position: string;
  body: string;
  period: { year: number; month: number };
  costs: {
    display: "public" | "private";
    type: string;
    min: number;
    max: number;
    contract?: number;
  };
  handles: { handle: string }[];
  tools: { tool: string }[];
  note: string;
  memo: string;

  title: string;
  location: { area: string; place: string };
  requires: { require: string }[];
  prefers: { prefer: string }[];
  adjustment: string;
  interviews: { type: string; count: string };
  times: { start: string; end: string };
  remote: string;
  distribution: string;
  span: string;
  approval: string;
};

export const defaultValues = (post: Matter): NestedPartial<Data> => {
  return {
    display: post?.display,
    title: post?.title,
    body: post?.body,
    position: post?.position,
    location: post?.location,
    period: {
      year: post?.period?.year,
      month: post?.period?.month,
    },
    costs: {
      min: post?.costs?.min,
      max: post?.costs?.max,
      contract: post?.costs?.contract,
      display: post?.costs?.display,
      type: post?.costs?.type,
    },
    handles: post.handles?.length
      ? post.handles.map((value) => ({
          handle: value,
        }))
      : [{ handle: "" }],
    tools: post.tools?.length
      ? post.tools.map((value) => ({
          tool: value,
        }))
      : [{ tool: "" }],
    requires: post.requires?.length
      ? post.requires.map((value) => ({
          require: value,
        }))
      : [{ require: "" }],
    prefers: post.prefers?.length
      ? post.prefers.map((value) => ({
          prefer: value,
        }))
      : [{ prefer: "" }],
    adjustment: post?.adjustment,
    interviews: post?.interviews,
    times: post?.times,
    remote: post?.remote,
    distribution: post?.distribution,
    span: post?.span,
    approval: post?.approval ? post?.approval : "不明",
    note: post?.note,
    status: post?.status,
    memo: post?.memo,
  };
};

export const edit = (
  data: Data
): Omit<Matter, "objectID" | "uid" | "createAt"> => {
  return {
    display: data.display,
    title: data.title,
    position: data.position,
    body: data.body,
    location: data.location,
    period: {
      year: Number(data.period.year),
      month: Number(data.period.month),
    },
    costs: {
      min: Number(data.costs.min),
      max: Number(data.costs.max),
      contract: Number(data.costs.contract),
      display: data.costs.display,
      type: data.costs.type,
    },
    adjustment: data.adjustment,
    times: data.times,
    handles: data.handles
      .filter((array) => array.handle)
      .map((array) => array.handle),
    tools: data.tools.filter((array) => array.tool).map((array) => array.tool),
    requires: data.requires
      .filter((array) => array.require)
      .map((array) => array.require),
    prefers: data.prefers
      .filter((array) => array.prefer)
      .map((array) => array.prefer),
    interviews: data.interviews,
    remote: data.remote,
    distribution: data.distribution,
    span: data.span,
    approval: data.approval,
    note: data.note,
    status: data.status,
    memo: data.memo,
  };
};
