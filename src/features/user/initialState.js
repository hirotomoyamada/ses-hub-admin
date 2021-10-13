export const initialState = {
  user: {},

  posts: {
    follows: [],
    posts: {
      matters: [],
      resources: [],
    },
    likes: {
      matters: [],
      resources: [],
      persons: [],
    },
    outputs: {
      matters: [],
      resources: [],
    },
    entries: {
      matters: [],
      resources: [],
      persons: [],
    },
  },

  hit: {
    posts: 0,
    pages: 0,
    currentPage: 0,
  },
};
