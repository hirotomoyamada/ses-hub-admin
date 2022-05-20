import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { initialState, State } from "./initialState";
import * as actions from "features/post/actions";
import * as reducers from "features/post/reducers";
import { Matter, Resource } from "types/post";
import { UpdateAccount } from "features/root/actions";
import { User } from "features/user/userSlice";

export interface Post {
  index: "matters" | "resources";
  post: Matter | Resource;
}

export const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    selectPost: (state, action: PayloadAction<Post["post"] | unknown>) =>
      reducers.selectPost(state, action),
  },

  extraReducers: (builder): void => {
    builder.addCase(actions.editPost.fulfilled, (state, action) =>
      reducers.editPost(state, action)
    );
    builder.addCase(actions.deletePost.fulfilled, (state, action) =>
      reducers.deletePost(state, action)
    );
    builder.addCase(actions.fetchPost.fulfilled, (state, action) =>
      reducers.fetchPost(state, action)
    );
    builder.addCase(actions.fetchPosts.fulfilled, (state, action) =>
      reducers.fetchPosts(state, action)
    );

    builder.addMatcher(
      (action: PayloadAction<undefined>) =>
        action.type.endsWith("/handleSearch") && !action.payload,
      () => reducers.resetPost()
    );

    builder.addMatcher(
      (action: PayloadAction) => action.type.endsWith("/editUser"),
      (state, action: PayloadAction<User>) => reducers.editUser(state, action)
    );

    builder.addMatcher(
      (action: PayloadAction) =>
        action.type.endsWith("/updateAccount/fulfilled"),
      (state, action: PayloadAction<UpdateAccount>) =>
        reducers.updateAccount(state, action)
    );
  },
});

export const { selectPost } = postSlice.actions;

export const posts = (state: RootState): State["posts"] => state.post.posts;
export const post = (state: RootState): Matter | Resource =>
  state.post.post as Matter | Resource;
export const hit = (state: RootState): State["hit"] => state.post.hit;

export default postSlice.reducer;
