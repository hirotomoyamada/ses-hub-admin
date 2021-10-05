export const editData = (state, action) => {
  state.data[action.payload.index] = action.payload.data;
  state.announce = { success: "編集しました" };
  state.fetch = false;
};
