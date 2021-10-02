import { functions } from "../../../firebase";

export const editData = (state, action) => {
  const dataTime = Date.now();

  const data = {
    maintenance: { status: action.payload.maintenance.status },
    information: {
      title: action.payload.information.title,
      body: action.payload.information.body,
      updateAt: dataTime,
    },
    agree: {
      title: action.payload.agree.title,
      body: action.payload.agree.body,
      status: action.payload.agree.status,
      updateAt: dataTime,
    },
  };

  state.data.seshub = data;
  state.announce = { success: "編集しました" };

  const editData = functions.httpsCallable("admin-editData");
  editData(data).catch((e) => {});
};
