export const index = (state, action) => {
  if (action.payload.page) {
    state.index.page = action.payload.page;

    state.search.target = "";
    state.search.type = "";
    state.search.value = "";
    state.search.filter = "all";
  }
  if (action.payload.edit) {
    state.index.edit = action.payload.edit;
  }
};
