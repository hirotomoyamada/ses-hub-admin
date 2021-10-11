export const fetchUser = (state, action) => {
  state.user.data = action.payload ? action.payload : {};
  state.user.posts = {
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

  state.load = false;
};
