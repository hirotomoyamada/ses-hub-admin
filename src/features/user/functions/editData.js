import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const editData = createAsyncThunk("user/editData", async (data) => {
  const editData = functions.httpsCallable("admin-editData");

  const res = editData(data)
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {});

  return res;
});
