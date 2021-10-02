import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import { login } from "./functions/login";

import * as reducers from "./redurces/reducers";

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logout: (state) => reducers.logout(state),
    editData: (state, action) => reducers.editData(state, action),
    handleAnnounce: (state, action) => reducers.handleAnnounce(state, action),
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.load = true;
    });
    builder.addCase(login.fulfilled, (state, action) =>
      reducers.login(state, action)
    );
  },
});

export const { logout, editData, handleAnnounce } = userSlice.actions;

export const user = (state) => state.user.uid;
export const data = (state) => state.user.data;
export const load = (state) => state.user.load;
export const announce = (state) => state.user.announce;

export default userSlice.reducer;
