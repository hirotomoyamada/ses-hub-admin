export const sendMail = (state, action) => {
  console.log(action.payload);
  const index =
    action.payload.index === "companys"
      ? "seshub"
      : action.payload.index === "persons" && "freelanceDirect";

  state.data[index].mail.title = action.payload.title;
  state.data[index].mail.body = action.payload.body;
  state.data[index].mail.target = action.payload.target;
  state.data[index].mail.updateAt = action.payload.updateAt;
  state.announce = { success: "送信しました" };
  state.fetch = false;
};
