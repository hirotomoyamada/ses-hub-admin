export const resetUser = (state, action) => {
  if (typeof action.payload !== "number") {
    state.user = {};

    state.posts = {
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
    };

    state.hit = {
      posts: 0,
      pages: 0,
      currentPage: 0,
    };
  } else {
    state.users[action.payload] = null;
  }
};
