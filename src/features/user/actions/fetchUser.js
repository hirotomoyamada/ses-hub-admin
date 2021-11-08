import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const fetchUser = createAsyncThunk("user/fetchUser", async (data) => {
  const fetchUser = functions.httpsCallable("admin-fetchUser");
  const user = fetchUser({
    index: data.index,
    uid: data.uid,
  })
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {});

  return user;
});
