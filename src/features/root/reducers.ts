import { PayloadAction } from "@reduxjs/toolkit";
import { initialState, Index, State, Modal } from "features/root/initialState";
import {
  EditData,
  FetchDashBoard,
  Login,
  SendMail,
  UpdateNotice,
} from "./actions";
import { Announce, Search } from "./rootSlice";

export const login = (state: State, action: PayloadAction<Login>): void => {
  state.admin = action.payload.uid;
  state.data = action.payload.data;
  state.posts = action.payload.posts;

  state.load.root = false;
};

export const logout = (): State => {
  return {
    ...initialState,
    load: { root: false, list: false, fetch: false },
  };
};

export const index = (state: State, action: PayloadAction<Index>): void => {
  if (action.payload) {
    state.index = action.payload;

    state.search.target = null;
    state.search.type = null;
    state.search.value = null;
    state.search.filter = "all";
  }
};

export const search = (
  state: State,
  action: PayloadAction<Search | undefined>
): void => {
  if (!action.payload) {
    state.search.value = null;
  }

  if (action?.payload?.target) {
    state.search.target = action.payload.target;
  }

  if (action?.payload?.type) {
    state.search.type = action.payload.type;
  }

  if (action?.payload?.value) {
    state.search.value = action.payload.value;
  }

  if (action?.payload?.filter) {
    state.search.filter = action.payload.filter;
  } else {
    state.search.filter = "all";
  }
};

export const modal = (
  state: State,
  action: PayloadAction<Modal | undefined>
): void => {
  if (action?.payload) {
    state.modal.type = action.payload.type;
    state.modal.text = action.payload.text;
    state.modal.close = action.payload.close;
    state.modal.delete = action.payload.delete;
    state.modal.open = true;
  } else {
    state.modal.type = undefined;
    state.modal.text = undefined;
    state.modal.close = undefined;
    state.modal.delete = undefined;
    state.modal.open = false;
  }
};

export const announce = (
  state: State,
  action: PayloadAction<Announce | undefined>
): void => {
  if (action.payload?.success || action.payload?.error) {
    state.announce.success = action.payload.success;
    state.announce.error = action.payload.error;
  } else {
    state.announce = {
      success: undefined,
      error: undefined,
    };
  }
};

export const editData = (
  state: State,
  action: PayloadAction<EditData>
): void => {
  if (!state.data) return;

  const index =
    action.payload.index === "companys" ? "seshub" : "freelanceDirect";

  Object.assign(state.data[index], {
    information: action.payload.information,
    agree: action.payload.agree,
    maintenance: action.payload.maintenance,
  });

  state.announce.success = "編集しました";
  state.load.fetch = false;
};

export const sendMail = (
  state: State,
  action: PayloadAction<SendMail>
): void => {
  const index =
    action.payload.index === "companys" ? "seshub" : "freelanceDirect";

  Object.assign(state.data, {
    [index]: {
      mail: {
        title: action.payload.title,
        body: action.payload.body,
        target: action.payload.target,
        updateAt: action.payload.updateAt,
      },
    },
  });

  state.announce.success = "送信しました";
  state.load.fetch = false;
};

export const updateAccount = (state: State): void => {
  state.announce.success = "編集しました";
  state.load.fetch = false;
};

export const updateNotice = (
  state: State,
  action: PayloadAction<UpdateNotice>
): void => {
  if (!state.data) return;

  for (const index of Object.keys(state.data)) {
    Object.assign(state.data, {
      [index]: action.payload[index as keyof UpdateNotice],
    });
  }
};

export const fetchDashBoard = (
  state: State,
  action: PayloadAction<FetchDashBoard["data"]>
): void => {
  state.analytics = action.payload;
};
