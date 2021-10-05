import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import { login } from "./functions/login";
import { editData } from "./functions/editData";
import { sendMail } from "./functions/sendMail";

import * as reducers from "./redurces/reducers";

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logout: (state) => reducers.logout(state),
    handleAnnounce: (state, action) => reducers.handleAnnounce(state, action),
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.load = true;
    });
    builder.addCase(login.fulfilled, (state, action) =>
      reducers.login(state, action)
    );
    builder.addCase(editData.pending, (state) => {
      state.fatch = true;
    });
    builder.addCase(editData.fulfilled, (state, action) =>
      reducers.editData(state, action)
    );
    builder.addCase(sendMail.pending, (state) => {
      state.fatch = true;
    });
    builder.addCase(sendMail.fulfilled, (state, action) =>
      reducers.sendMail(state, action)
    );
  },
});

export const { logout, handleAnnounce } = userSlice.actions;

export const user = (state) => state.user.uid;
export const data = (state) => state.user.data;
export const load = (state) => state.user.load;
export const fetch = (state) => state.user.fetch;
export const announce = (state) => state.user.announce;

export default userSlice.reducer;
