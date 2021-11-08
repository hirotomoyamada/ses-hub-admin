import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const updateUser = createAsyncThunk("root/updateUser", async (data) => {
  const updateUser = functions.httpsCallable("admin-updateUser");

  const res = updateUser(data)
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      return { error: e.message };
    });

  return res;
});
