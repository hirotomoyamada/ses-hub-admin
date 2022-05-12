import { Data } from "types/auth";

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

export interface State {
  admin: string | null;

  index: Index;

  search: {
    value: string | null;
    target: string | null;
    type: string | null;
    filter: string | null;
  };

  data: {
    seshub: Data | unknown;
    freelanceDirect: Data | unknown;
  };

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

  data: {
    seshub: {},
    freelanceDirect: {},
  },

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
};
