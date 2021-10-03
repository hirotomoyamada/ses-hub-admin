import { functions } from "../../../firebase";

export const editData = (state, action) => {
  const dataTime = Date.now();

  const index =
    action.payload.index === "companys"
      ? "seshub"
      : action.payload.index === "persons" && "freelanceDirect";

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

  state.data[index] = data;
  state.announce = { success: "編集しました" };

  data.index = index;

  const editData = functions.httpsCallable("admin-editData");
  editData(data).catch((e) => {});
};
