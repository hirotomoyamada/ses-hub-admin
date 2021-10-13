export const selectUser = (state, action) => {
  state.user = action.payload;
};
