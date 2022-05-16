import { Data, Posts } from "types/auth";

export type Index =
  | "matters"
  | "resources"
  | "companys"
  | "persons"
  | "enable"
  | "hold"
  | "disable";

export interface Modal {
  type?: string;
  text?: string;
  open?: boolean;
  delete?: () => void;
  close?: () => void;
}

export type Activity =
  | {
      key:
        | "login"
        | "posts"
        | "histories"
        | "likes"
        | "outputs"
        | "entries"
        | "follows";
      label: string;
      active?: number | null;
      trialing?: number | null;
      canceled?: number | null;
      person?: number | null;
      log: {
        label: string;
        active?: number | null;
        trialing?: number | null;
        canceled?: number | null;
        person?: number | null;
      }[];
    }
  | {
      key: "posts" | "position" | "distribution" | "approval" | "sex" | "age";
      label: string;
      active?: number;
      log: {
        label: string | number;
        active?: number;
        ratio?: number;
      }[];
    };

export interface State {
  admin: string | null;

  index: Index;

  search: {
    value: string | null;
    target: string | null;
    type: string | null;
    filter: string | null;
  };

  data:
    | {
        seshub: Data;
        freelanceDirect: Data;
      }
    | undefined;

  posts: Posts | undefined;

  modal: Modal;

  load: {
    root: boolean;
    list: boolean;
    fetch: boolean;
  };

  announce: {
    success?: string;
    error?: string;
  };

  activity: Activity[];
}

export const initialState: State = {
  admin: null,

  index: "companys",

  search: {
    value: null,
    target: null,
    type: null,
    filter: "all",
  },

  data: undefined,

  posts: undefined,

  modal: {
    type: undefined,
    open: false,
  },

  load: {
    root: true,
    list: true,
    fetch: true,
  },

  announce: {
    success: undefined,
    error: undefined,
  },

  activity: [],
};
