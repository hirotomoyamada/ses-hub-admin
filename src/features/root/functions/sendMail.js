import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const sendMail = createAsyncThunk("root/sendMail", async (data) => {
  const sendMail = functions.httpsCallable("admin-sendMail");

  const res = sendMail(data)
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {});

  return res;
});
