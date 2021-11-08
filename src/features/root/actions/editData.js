import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const editData = createAsyncThunk("root/editData", async (data) => {
  const editData = functions.httpsCallable("admin-editData");

  const res = editData(data)
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      return { error: e.message };
    });

  return res;
});
