import { Resource } from "types/post";
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
    min: number | null;
    max: number | null;
    contract?: number | null;
  };
  handles: { handle: string }[];
  tools: { tool: string }[];
  note: string;
  memo: { name: string; tel: string; address: string };

  roman: { firstName: string; lastName: string };
  sex: string;
  age: number;
  station: string;
  belong: string;
  skills: { skill: string }[];
  parallel: string;
};

export const defaultValues = (post: Resource): NestedPartial<Data> => {
  return {
    display: post?.display,
    roman: post?.roman,
    position: post?.position,
    sex: post?.sex,
    age: post?.age,
    body: post?.body,
    belong: post?.belong,
    station: post?.station,
    period: {
      year: post?.period?.year,
      month: post?.period?.month,
    },
    costs: {
      min: post?.costs?.min ? post?.costs?.min : null,
      max: post?.costs?.max ? post?.costs?.max : null,
      contract: post?.costs?.contract ? post?.costs?.contract : null,
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
    skills: post.skills?.length
      ? post.skills.map((value) => ({
          skill: value,
        }))
      : [{ skill: "" }],
    parallel: post?.parallel,
    note: post?.note,
    status: post?.status,
    memo: post?.memo,
  };
};

export const edit = (
  data: Data
): Omit<Resource, "objectID" | "uid" | "createAt"> => {
  return {
    display: data.display,
    roman: data.roman,
    sex: data.sex,
    age: Number(data.age),
    body: data.body,
    belong: data.belong,
    station: data.station,
    period: {
      year: Number(data.period.year),
      month: Number(data.period.month),
    },
    costs: {
      min: data.costs.min ? Number(data.costs.min) : null,
      max: data.costs.min ? Number(data.costs.max) : null,
      contract: data.costs.contract ? Number(data.costs.contract) : null,
      display: data.costs.display,
      type: data.costs.type,
    },
    position: data.position,
    handles: data.handles
      .filter((array) => array.handle)
      .map((array) => array.handle),
    tools: data.tools.filter((array) => array.tool).map((array) => array.tool),
    skills: data.skills
      .filter((array) => array.skill)
      .map((array) => array.skill),
    parallel: data.parallel,
    note: data.note,
    status: data.status,
    memo: data.memo,
  };
};
