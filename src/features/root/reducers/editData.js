export const editData = (state, action) => {
  if (!action.payload.error) {
    const index =
      action.payload.index === "companys"
        ? "seshub"
        : action.payload.index === "persons" && "freelanceDirect";

    state.data[index].information = action.payload.information;
    state.data[index].agree = action.payload.agree;
    state.data[index].maintenance = action.payload.maintenance;

    state.announce = { success: "編集しました" };
    state.fetch = false;
  } else {
    state.announce = { error: action.payload.error };
    state.fetch = false;
  }
};
