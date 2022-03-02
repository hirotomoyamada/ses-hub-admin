import { Matter, Resource, Company, Person } from "types/posts";

export interface State {
  user: Company | Person | unknown;
  accounts: Accounts;

  posts: Posts["company"] | Posts["person"] | Record<string, never>;

  hit: {
    posts: number;
    pages: number;
    currentPage: number;
  };
}

export interface Posts {
  company: {
    children: Company[];
    follows: Company[];
    posts: {
      matters: Matter[];
      resources: Resource[];
    };
    likes: {
      matters: Matter[];
      resources: Resource[];
      persons: Person[];
    };
    outputs: {
      matters: Matter[];
      resources: Resource[];
    };
    entries: {
      matters: Matter[];
      resources: Resource[];
      persons: Person[];
    };
  };

  person: {
    follows: Company[];
    histories: Matter[];
    likes: Matter[];
    entries: Matter[];
    requests: {
      enable: Company[];
      hold: Company[];
      disable: Company[];
    };
  };
}

export type Accounts = (Company | { uid: undefined } | null)[];

export const initialState: State = {
  user: {},

  accounts: [],

  posts: {},

  hit: {
    posts: 0,
    pages: 0,
    currentPage: 0,
  },
};
