import { Matter, Resource, Company, Person } from "types/post";

export interface State {
  posts: {
    matters: Matter[];
    resources: Resource[];
    companys: Company[];
    persons: Person[];
  };

  hit: {
    posts: number;
    pages: number;
    currentPage: number;
  };

  post: Matter | Resource | unknown;
}

export const initialState: State = {
  posts: {
    matters: [],
    resources: [],
    companys: [],
    persons: [],
  },

  hit: {
    posts: 0,
    pages: 0,
    currentPage: 0,
  },

  post: {},
};
