export const resetPost = (state) => {
  Object.keys(state.posts).forEach((index) => {
    if (index === state.index) {
      return;
    }

    state.posts[index] = [];
  });
};
