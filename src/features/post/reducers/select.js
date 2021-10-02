export const selectIndex = (state, action) => {
  if (action.payload.page) {
    state.index.page = action.payload.page;
    state.search.target = "";
    state.search.type = "";
    state.search.value = "";
    state.search.filter = "all";
    state.posts = {
      matters: [],
      resources: [],
      companys: [],
      persons: [],
    };
  }
  if (action.payload.edit) {
    state.index.edit = action.payload.edit;
  }
};

export const selectPost = (state, action) => {
  state.post = action.payload;
};
