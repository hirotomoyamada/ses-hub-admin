import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const uploadResume = createAsyncThunk(
  "user/uploadResume",
  async (data) => {
    const uploadResume = functions.httpsCallable("admin-uploadResume");
    const url = uploadResume({ uid: data.uid, file: data.file })
      .then(({ data }) => {
        return data;
      })
      .catch((e) => {});

    return url;
  }
);
