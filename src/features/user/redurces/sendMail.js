export const sendMail = (state, action) => {
  state.mail[action.payload.index] = action.payload.mail;
  state.announce = { success: "送信しました" };
  state.fetch = false;
};
