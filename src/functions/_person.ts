import { Person } from "types/post";
import { NestedPartial } from "types/utils";

export type Data = {
  status: string;
  state: string;
  icon: string;
  cover: string;
  name: string;
  nickName: string | null;
  body: string | null;
  age: number;
  sex: string;
  position: string;
  location: string;
  period: {
    year: number | null;
    month: number | null;
  };
  handles: { handle: string }[];
  tools: { tool: string }[];
  skills: { skill: string }[];
  urls: { url: string }[];
  resident: string | null;
  working: number | null;
  clothes: string | null;
  costs: {
    min: number | null;
    max: number | null;
    display: "public" | "private";
    type: string;
  };
};

export const defaultValues = (user: Person): NestedPartial<Data> => {
  return {
    status: user?.status,
    icon: user?.icon ? user.icon : "icon0",
    cover: user?.cover ? user.cover : "cover0",
    state: user?.state,
    nickName: user?.nickName,
    name: user?.name,
    body: user?.body,
    age: user?.age,
    sex: user?.sex,
    position: user?.position,
    location: user?.location,
    handles: user?.handles?.length
      ? user?.handles.map((value) => ({
          handle: value,
        }))
      : [{ handle: "" }, { handle: "" }, { handle: "" }, { handle: "" }],
    tools: user?.tools?.length
      ? user?.tools.map((value) => ({
          tool: value,
        }))
      : [{ tool: "" }, { tool: "" }, { tool: "" }, { tool: "" }],
    skills: user?.skills?.length
      ? user?.skills.map((value) => ({
          skill: value,
        }))
      : [{ skill: "" }, { skill: "" }, { skill: "" }],
    urls: user?.urls?.length
      ? user?.urls.map((value) => ({
          url: value,
        }))
      : [{ url: "" }],
    costs: {
      min: user?.costs?.min ? user?.costs?.min : null,
      max: user?.costs?.max ? user?.costs?.max : null,
      display: user?.costs?.display,
      type: user?.costs?.type,
    },
    working: user?.working,
    resident: user?.resident,
    clothes: user?.clothes,
    period: {
      year: user?.period?.year,
      month: user?.period?.month,
    },
  };
};

export const profile = (
  data: Data
): {
  status: string;
  state: string;
  icon: string;
  cover: string;
  name: string;
  nickName: string | null;
  body: string | null;
  age: number;
  sex: string;
  position: string;
  location: string;
  period: {
    year: number | null;
    month: number | null;
  };
  handles: string[];
  tools: string[];
  skills: string[];
  urls: string[];
  resident: string | null;
  working: number | null;
  clothes: string | null;
  costs: {
    min: number | null;
    max: number | null;
    display: "public" | "private";
    type: string;
  };
} => {
  return {
    status: data.status,
    icon: data.icon,
    cover: data.cover,
    state: data.state,
    nickName: data.nickName,
    name: data.name,
    body: data.body,
    age: Number(data.age),
    sex: data.sex,
    position: data.position,
    location: data.location,
    handles: data.handles
      .filter((array) => array.handle)
      .map((array) => array.handle),
    tools: data.tools.filter((array) => array.tool).map((array) => array.tool),
    skills: data.skills
      .filter((array) => array.skill)
      .map((array) => array.skill),
    urls: data.urls.filter((array) => array.url).map((array) => array.url),
    costs: {
      min: data.costs.min ? Number(data.costs.min) : null,
      max: data.costs.min ? Number(data.costs.max) : null,
      display: data.costs?.display,
      type: data.costs?.type,
    },
    working: Number(data.working),
    resident: data.resident,
    clothes: data.clothes,
    period: {
      year: Number(data.period?.year),
      month: Number(data.period?.month),
    },
  };
};
