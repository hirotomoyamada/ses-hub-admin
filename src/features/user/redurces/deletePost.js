export const deletePost = (state, action) => {
  Object.keys(state.posts).forEach((type) => {
    if (type === "follows" || type === "children") {
      return;
    }

    state.posts[type][action.payload.index] = state.posts[type][
      action.payload.index
    ].filter((post) => post?.objectID !== action.payload.post.objectID);
  });
};
