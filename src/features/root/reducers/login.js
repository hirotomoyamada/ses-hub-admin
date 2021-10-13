export const login = (state, action) => {
  if (action.payload.error) {
    state.announce = action.payload;
  } else {
    state.admin = action.payload.uid;
    state.data = {
      seshub: action.payload.seshub,
      freelanceDirect: action.payload.freelanceDirect,
    };
  }

  state.load.root = false;
};
