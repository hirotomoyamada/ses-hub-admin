export const announce = (state, action) => {
  if (action.payload) {
    state.announce[action.payload.type] = action.payload.text;
  } else {
    state.announce = {
      success: "",
      error: "",
    };
  }
};
