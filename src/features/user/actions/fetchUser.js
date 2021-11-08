import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const fetchUser = createAsyncThunk("user/fetchUser", async (data) => {
  const fetchUser = functions.httpsCallable("admin-fetchUser");

  const type = data.type;
  const i = data.i;

  const user = fetchUser({
    index: data.index,
    uid: data.uid,
  })
    .then(({ data }) => {
      return { user: data, type: type, i: i };
    })
    .catch((e) => {});

  return user;
});
