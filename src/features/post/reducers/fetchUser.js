export const fetchUser = (state, action) => {
  state.user.data = action.payload;
  state.load = false;
};
