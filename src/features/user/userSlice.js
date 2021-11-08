import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import { fetchUser } from "./actions/fetchUser";
import { extractPosts } from "./actions/extractPosts";
import { uploadResume } from "./actions/uploadResume";

import * as reducers from "./redurces/reducers";

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    selectUser: (state, action) => reducers.selectUser(state, action),
    editUser: (state, action) => reducers.editUser(state, action),
    resetUser: (state, action) => reducers.resetUser(state, action),
    deleteResume: (state, action) => reducers.deleteResume(state, action),
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) =>
      reducers.fetchUser(state, action)
    );

    builder.addCase(extractPosts.fulfilled, (state, action) =>
      reducers.extractPosts(state, action)
    );

    builder.addCase(uploadResume.fulfilled, (state, action) =>
      reducers.uploadResume(state, action)
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/handleModal"),
      (state, action) => reducers.resetUser(state, action)
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/editPost"),
      (state, action) => reducers.editPost(state, action)
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/deletePost"),
      (state, action) => reducers.deletePost(state, action)
    );
  },
});

export const { selectUser, editUser, resetUser, deleteResume } =
  userSlice.actions;

export const user = (state) => state.user.user;
export const users = (state) => state.user.users;
export const posts = (state) => state.user.posts;
export const hit = (state) => state.user.hit;

export default userSlice.reducer;
