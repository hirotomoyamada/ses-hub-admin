export const modal = (state, action) => {
  if (action.payload) {
    state.modal = true;
    document.body.classList.add("lock");
  } else {
    state.modal = false;
    document.body.classList.remove("lock");
  }
};
