export const updateUser = (state, action) => {
  if (!action.payload.error) {
    state.announce = { success: "編集しました" };
    state.fetch = false;
  } else {
    state.announce = { error: action.payload.error };
    state.fetch = false;
  }
};
