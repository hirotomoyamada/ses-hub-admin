import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { initialState, State } from "./initialState";
import * as actions from "features/user/actions";
import * as reducers from "features/user/reducers";
import { Company, Person } from "types/posts";
import { Post } from "features/post/postSlice";

export interface User {
  index: "companys" | "persons";
  user: Company | Person;
  filter: string | null;
}

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    selectUser: (state, action: PayloadAction<Company | Person>) =>
      reducers.selectUser(state, action),
    editUser: (state, action: PayloadAction<User>) =>
      reducers.editUser(state, action),
    resetUser: (state, action: PayloadAction<number | undefined>) =>
      reducers.resetUser(state, action),
    deleteResume: (state, action: PayloadAction<string>) =>
      reducers.deleteResume(state, action),
  },

  extraReducers: (builder) => {
    builder.addCase(actions.fetchUser.fulfilled, (state, action) =>
      reducers.fetchUser(state, action)
    );

    builder.addCase(actions.extractPosts.fulfilled, (state, action) =>
      reducers.extractPosts(state, action)
    );

    builder.addCase(actions.uploadResume.fulfilled, (state, action) =>
      reducers.uploadResume(state, action)
    );

    builder.addMatcher(
      (action: PayloadAction) => action.type.endsWith("/handleModal"),
      (state, action: PayloadAction<boolean>) =>
        reducers.resetUser(state, action)
    );

    builder.addMatcher(
      (action: PayloadAction) => action.type.endsWith("/editPost"),
      (state, action: PayloadAction<Post>) => reducers.editPost(state, action)
    );

    builder.addMatcher(
      (action: PayloadAction) => action.type.endsWith("/deletePost"),
      (state, action: PayloadAction<Post>) => reducers.deletePost(state, action)
    );
  },
});

export const { selectUser, editUser, resetUser, deleteResume } =
  userSlice.actions;

export const user = (state: RootState): Company | Person =>
  state.user.user as Company | Person;
export const accounts = (state: RootState): State["accounts"] =>
  state.user.accounts;
export const posts = (state: RootState): State["posts"] => state.user.posts;
export const hit = (state: RootState): State["hit"] => state.user.hit;

export default userSlice.reducer;
