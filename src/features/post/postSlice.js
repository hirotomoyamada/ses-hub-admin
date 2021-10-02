import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import { fetchPosts } from "./functions/fetchPosts";
import { extractPosts } from "./functions/extractPosts";
import { fetchUser } from "./functions/fetchUser";

import * as reducers from "./reducers/reducers";

export const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    selectIndex: (state, action) => reducers.selectIndex(state, action),
    selectPost: (state, action) => reducers.selectPost(state, action),
    
    resetPosts: (state) => reducers.resetPosts(state),
    editPost: (state, action) => reducers.editPost(state, action),
    editUser: (state, action) => reducers.editUser(state, action),
    deletePost: (state, action) => reducers.deletePost(state, action),

    handleSearch: (state, action) => reducers.handleSearch(state, action),
    handleModal: (state, action) => reducers.handleModal(state, action),
    handleAnnounce: (state, action) => reducers.handleAnnounce(state, action),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => reducers.load(state));
    builder.addCase(fetchPosts.fulfilled, (state, action) =>
      reducers.fetchPosts(state, action)
    );
    builder.addCase(extractPosts.pending, (state) => reducers.load(state));
    builder.addCase(extractPosts.fulfilled, (state, action) =>
      reducers.extractPosts(state, action)
    );
    builder.addCase(fetchUser.pending, (state) => reducers.load(state));
    builder.addCase(fetchUser.fulfilled, (state, action) =>
      reducers.fetchUser(state, action)
    );
  },
});

export const {
  selectIndex,
  selectPost,
  resetPosts,
  editPost,
  editUser,
  deletePost,
  handleSearch,
  handleModal,
  handleAnnounce,
} = postSlice.actions;

export const posts = (state) => state.post.posts;

export const index = (state) => state.post.index;
export const search = (state) => state.post.search;
export const hit = (state) => state.post.hit;

export const post = (state) => state.post.post;
export const user = ({ state, index }) => state.post.user[index];

export const load = (state) => state.post.load;
export const modal = (state) => state.post.modal;
export const page = (state) => state.post.page;
export const announce = (state) => state.post.announce;

export default postSlice.reducer;
