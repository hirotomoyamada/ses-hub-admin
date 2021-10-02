export const login = (state, action) => {
  if (action.payload.error) {
    state.announce = action.payload;
  } else {
    state.uid = action.payload.uid;
    state.data = {
      seshub: action.payload.seshub,
      freelanceDirect: action.payload.freelanceDirect,
    };
  }
  state.load = false;
};

export const logout = (state) => {
  state.uid = "";
  state.load = false;
};
