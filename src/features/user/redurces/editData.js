export const editData = (state, action) => {
  console.log(action.payload);
  const index =
    action.payload.index === "companys"
      ? "seshub"
      : action.payload.index === "persons" && "freelanceDirect";

  state.data[index].information = action.payload.information;
  state.data[index].agree = action.payload.agree;
  state.data[index].maintenance = action.payload.maintenance;

  state.announce = { success: "編集しました" };
  state.fetch = false;
};
