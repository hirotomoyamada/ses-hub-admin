export const fetchPosts = (state, action) => {
  if (action.payload) {
    if (action.payload.hit.currentPage !== 0 && action.payload.hit.pages > 1) {
      state.posts[action.payload.index] = [
        ...state.posts[action.payload.index],
        ...action.payload.posts,
      ];
    } else {
      state.posts[action.payload.index] = action.payload.posts;
    }
    state.hit = {
      posts: action.payload.hit.posts,
      pages: action.payload.hit.pages,
      currentPage: action.payload.hit.currentPage,
    };
  }
  state.load = false;
};
