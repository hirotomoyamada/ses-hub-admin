export const extractPosts = (state, action) => {
  if (action.payload.type === "follows") {
    if (action.payload.hit.currentPage !== 0 && action.payload.hit.pages > 1) {
      state.user.posts[action.payload.index] = [
        ...state.user.posts[action.payload.type],
        ...action.payload.posts,
      ];
    } else {
      state.user.posts[action.payload.type] = action.payload.posts;
    }
  } else {
    if (action.payload.hit.currentPage !== 0 && action.payload.hit.pages > 1) {
      state.user.posts[action.payload.type][action.payload.index] = [
        ...state.user.posts[action.payload.type][action.payload.index],
        ...action.payload.posts,
      ];
    } else {
      state.user.posts[action.payload.type][action.payload.index] =
        action.payload.posts;
    }
  }

  state.hit = {
    posts: action.payload.hit.posts,
    pages: action.payload.hit.pages,
    currentPage: action.payload.hit.currentPage,
  };

  state.load = false;
};
