import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const sendMail = createAsyncThunk("root/sendMail", async (data) => {
  const sendMail = functions.httpsCallable("admin-sendMail");

  const res = sendMail(data)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((e) => {
      console.log(e);
    });

  return res;
});
