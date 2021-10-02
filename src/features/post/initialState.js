export const initialState = {
  index: { page: "companys", edit: "" },

  search: {
    value: "",
    target: "",
    type: "",
    filter: "all",
  },

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

  user: {
    data: {},
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
  },

  post: {},

  modal: false,
  
  load: true,

  announce: {
    success: "",
    error: "",
  },
};
