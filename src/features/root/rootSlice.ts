import {
  ArgAction,
  createSlice,
  ErrorAction,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Index, initialState, Modal, State } from "features/root/initialState";
import * as actions from "features/root/actions";
import * as reducers from "features/root/reducers";
import { Data } from "types/auth";

export interface Search {
  value?: string;
  target?: string;
  type?: string;
  filter?: string;
}

export interface Announce {
  success?: string;
  error?: string;
}

export const rootSlice = createSlice({
  name: "root",
  initialState,

  reducers: {
    logout: () => reducers.logout(),
    handleIndex: (state, action: PayloadAction<Index>) =>
      reducers.index(state, action),
    handleSearch: (state, action: PayloadAction<Search | undefined>) =>
      reducers.search(state, action),
    handleModal: (state, action: PayloadAction<Modal | undefined>) =>
      reducers.modal(state, action),
    handleAnnounce: (state, action: PayloadAction<Announce | undefined>) =>
      reducers.announce(state, action),
  },

  extraReducers: (builder): void => {
    builder.addCase(actions.login.pending, (state) => {
      state.load.root = true;
    });

    builder.addCase(actions.login.fulfilled, (state, action) =>
      reducers.login(state, action)
    );

    builder.addCase(actions.editData.fulfilled, (state, action) =>
      reducers.editData(state, action)
    );

    builder.addCase(actions.sendMail.fulfilled, (state, action) =>
      reducers.sendMail(state, action)
    );

    builder.addCase(actions.updateAccount.fulfilled, (state) =>
      reducers.updateAccount(state)
    );

    builder.addCase(actions.updateNotice.fulfilled, (state, action) =>
      reducers.updateNotice(state, action)
    );
    builder.addCase(actions.fetchDashBoard.fulfilled, (state, action) =>
      reducers.fetchDashBoard(state, action)
    );

    builder.addMatcher(
      (action: PayloadAction) => action.type.endsWith("/pending"),
      (state, action: ArgAction<{ fetch: boolean }>) => {
        if (
          action.meta.arg.fetch ||
          action.type.includes("/editData") ||
          action.type.includes("/sendMail") ||
          action.type.includes("/updateAccount")
        ) {
          state.load.fetch = true;
        } else {
          state.load.list = true;
        }
      }
    );

    builder.addMatcher(
      (action: PayloadAction) => action.type.endsWith("/rejected"),
      (state, action: ErrorAction) => {
        state.announce.error = action.error.message;

        state.load.root = false;
        state.load.list = false;
        state.load.fetch = false;
      }
    );

    builder.addMatcher(
      (action: PayloadAction) => action.type.endsWith("/fulfilled"),
      (state, action: PayloadAction) => {
        if (action.type.includes("login")) {
          state.announce.success = "ログインしました";
        }

        state.load.root = false;
        state.load.list = false;
        state.load.fetch = false;
      }
    );

    builder.addMatcher(
      (action: PayloadAction) =>
        action.type.endsWith("/editPost") || action.type.endsWith("/editUser"),
      (state) => {
        state.announce.success = "編集しました";
      }
    );

    builder.addMatcher(
      (action: PayloadAction) => action.type.endsWith("/deletePost"),
      (state) => {
        state.announce.success = "削除しました";
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

export const admin = (state: RootState): State["admin"] => state.root.admin;
export const index = (state: RootState): State["index"] => state.root.index;
export const data = (
  state: RootState
): { seshub: Data; freelanceDirect: Data } =>
  state.root.data as { seshub: Data; freelanceDirect: Data };
export const posts = (state: RootState): State["posts"] => state.root.posts;
export const search = (state: RootState): State["search"] => state.root.search;
export const modal = (state: RootState): State["modal"] => state.root.modal;
export const load = (state: RootState): State["load"] => state.root.load;
export const announce = (state: RootState): State["announce"] =>
  state.root.announce;
export const analytics = (state: RootState): State["analytics"] =>
  state.root.analytics;

export default rootSlice.reducer;
