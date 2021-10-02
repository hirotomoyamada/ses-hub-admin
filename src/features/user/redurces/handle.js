export const handleAnnounce = (state, action) => {
  if (action.payload === "reset") {
    state.announce = {
      success: "",
      error: "",
    };
  } else {
    state.announce[action.payload.type] = action.payload.text;
  }
};
