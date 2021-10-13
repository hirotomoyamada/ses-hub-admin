import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import { login } from "../root/functions/login";
import { editData } from "../root/functions/editData";
import { sendMail } from "../root/functions/sendMail";

import * as reducers from "./reducers/reducers";

export const rootSlice = createSlice({
  name: "root",
  initialState,

  reducers: {
    logout: (state) => reducers.logout(state),

    handleIndex: (state, action) => reducers.index(state, action),
    handleSearch: (state, action) => reducers.search(state, action),
    handleModal: (state, action) => reducers.modal(state, action),
    handleAnnounce: (state, action) => reducers.announce(state, action),
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.load.root = true;
    });
    builder.addCase(login.fulfilled, (state, action) =>
      reducers.login(state, action)
    );

    builder.addCase(editData.fulfilled, (state, action) =>
      reducers.editData(state, action)
    );

    builder.addCase(sendMail.fulfilled, (state, action) =>
      reducers.sendMail(state, action)
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state, action) => {
        state.load.fetch =
          action.meta.arg.fetch ||
          action.type === "root/editData/pending" ||
          action.type === "root/sendMail/pending"
            ? true
            : false;
        state.load.list = true;
      }
    );

    builder.addMatcher(
      (action) =>
        action.type.endsWith("/fulfilled") &&
        action.type !== "root/login/fulfilled",
      (state) => {
        state.load.fetch = false;
        state.load.list = false;
      }
    );

    builder.addMatcher(
      (action) =>
        action.type.endsWith("/editPost") || action.type.endsWith("/editUser"),
      (state) => {
        state.announce = { success: "編集しました" };
      }
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/deletePost"),
      (state) => {
        state.announce = { success: "削除しました" };
      }
    );
  },
});

export const {
  logout,
  handleIndex,
  handleSearch,
  handleModal,
  handleAnnounce,
} = rootSlice.actions;

export const admin = (state) => state.root.admin;
export const index = (state) => state.root.index;
export const data = (state) => state.root.data;
export const search = (state) => state.root.search;
export const modal = (state) => state.root.modal;
export const load = (state) => state.root.load;
export const announce = (state) => state.root.announce;

export default rootSlice.reducer;
