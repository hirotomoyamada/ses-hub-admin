export const extractPosts = (state, action) => {
  if (
    (state.user.index === "companys" && action.payload.type === "children") ||
    (state.user.index === "companys" && action.payload.type === "follows") ||
    (state.user.index === "persons" && action.payload.type !== "requests")
  ) {
    if (action.payload.hit.currentPage !== 0 && action.payload.hit.pages > 1) {
      state.posts[action.payload.type] = [
        ...state.posts[action.payload.type],
        ...action.payload.posts,
      ];
    } else {
      state.posts[action.payload.type] = action.payload.posts;
    }
  } else {
    if (action.payload.hit.currentPage !== 0 && action.payload.hit.pages > 1) {
      state.posts[action.payload.type][action.payload.index] = [
        ...state.posts[action.payload.type][action.payload.index],
        ...action.payload.posts,
      ];
    } else {
      state.posts[action.payload.type][action.payload.index] =
        action.payload.posts;
    }
  }

  state.hit = {
    posts: action.payload.hit.posts,
    pages: action.payload.hit.pages,
    currentPage: action.payload.hit.currentPage,
  };
};
