export const resetUser = (state, action) => {
  if (!action.payload) {
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
  }
};
