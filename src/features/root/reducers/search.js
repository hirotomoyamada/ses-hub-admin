export const search = (state, action) => {
  if (!action.payload) {
    state.search.value = "";
  }

  if (action?.payload?.target) {
    state.search.target = action.payload.target;
  }

  if (action?.payload?.type) {
    state.search.type = action.payload.type;
  }

  if (action?.payload?.value) {
    state.search.value = action.payload.value;
  }

  if (action?.payload?.filter) {
    state.search.filter = action.payload.filter;
  } else {
    state.search.filter = "all";
  }
};
