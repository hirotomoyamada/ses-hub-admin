export const handleSearch = (state, action) => {
  if (!action.payload) {
    state.search.value = "";
  }

  if (action?.payload?.target) {
    state.search.target = action.payload.target;
  }

  if (action?.payload?.type) {
    state.search.type = action.payload.type;
  }

  if (action?.payload?.value) {
    state.search.value = action.payload.value;
  }

  if (action?.payload?.filter) {
    state.search.filter = action.payload.filter;
  } else {
    state.search.filter = "all";
  }
};

export const handleModal = (state, action) => {
  if (action.payload) {
    document.body.classList.add("lock");
  } else {
    document.body.classList.remove("lock");
  }
  state.modal = action.payload;
};
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
