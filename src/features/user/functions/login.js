import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const login = createAsyncThunk("user/login", async () => {
  const login = functions.httpsCallable("admin-login");

  const data = login()
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      return {
        error: "メールアドレスかパスワードが間違っています",
      };
    });

  return data;
});
