import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import { fetchPosts } from "./actions/fetchPosts";

import * as reducers from "./reducers/reducers";

export const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    selectPost: (state, action) => reducers.selectPost(state, action),
    editPost: (state, action) => reducers.editPost(state, action),
    deletePost: (state, action) => reducers.deletePost(state, action),
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) =>
      reducers.fetchPosts(state, action)
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/editUser"),
      (state, action) => reducers.editUser(state, action)
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/handleSearch") && !action.payload,
      (state) => reducers.resetPost(state)
    );
  },
});

export const { selectPost, editPost, deletePost } = postSlice.actions;

export const posts = (state) => state.post.posts;
export const post = (state) => state.post.post;
export const hit = (state) => state.post.hit;

export default postSlice.reducer;
