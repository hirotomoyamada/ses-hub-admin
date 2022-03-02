import { Data } from "types/auth";

export interface State {
  admin: string | null;

  index: {
    page: Page;
    edit: Edit;
  };

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

  modal: boolean;

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

export type Page =
  | "matters"
  | "resources"
  | "companys"
  | "persons"
  | "setting"
  | "mail"
  | "account";

export type Edit =
  | "matters"
  | "resources"
  | "companys"
  | "persons"
  | "setting"
  | "mail"
  | "account"
  | null;

export const initialState: State = {
  admin: null,

  index: { page: "companys", edit: null },

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

  modal: false,

  load: {
    root: true,
    list: true,
    fetch: false,
  },

  announce: {
    success: undefined,
    error: undefined,
  },
};
