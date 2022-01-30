export const updateNotice = (state, action) => {
  Object.assign(state.data, action.payload);
};
