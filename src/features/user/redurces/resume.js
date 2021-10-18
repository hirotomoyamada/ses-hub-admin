import { functions } from "../../../firebase";

export const uploadResume = (state, action) => {
  state.user.resume.url = action.payload;
};
export const deleteResume = (state, action) => {
  state.user.resume.key = "";
  state.user.resume.url = "";

  const deleteResume = functions.httpsCallable("admin-deleteResume");
  deleteResume(action.payload).catch((e) => {});
};
