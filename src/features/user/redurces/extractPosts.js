export const extractPosts = (state, action) => {
  console.log(action.payload);
  if (action.payload.type === "follows") {
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
