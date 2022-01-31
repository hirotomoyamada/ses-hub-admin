export const updateNotice = (state, action) => {
  for (const index of Object.keys(state.data)) {
    Object.assign(state.data[index], action.payload[index]);
  }
};
