import { PayloadAction } from "@reduxjs/toolkit";
import { initialState, State } from "features/root/initialState";
import { EditData, Login, SendMail, UpdateNotice } from "./actions";
import { Announce, Index, Search } from "./rootSlice";

export const login = (state: State, action: PayloadAction<Login>): void => {
  state.admin = action.payload.uid;
  state.data = {
    seshub: action.payload.seshub,
    freelanceDirect: action.payload.freelanceDirect,
  };

  state.load.root = false;
};

export const logout = (): State => {
  return {
    ...initialState,
    load: { root: false, list: false, fetch: false },
  };
};

export const index = (state: State, action: PayloadAction<Index>): void => {
  if (action.payload.page) {
    state.index.page = action.payload.page;

    state.search.target = null;
    state.search.type = null;
    state.search.value = null;
    state.search.filter = "all";
  }
  if (action.payload.edit) {
    state.index.edit = action.payload.edit;
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

export const modal = (state: State, action: PayloadAction<boolean>): void => {
  if (action.payload) {
    state.modal = true;
    document.body.classList.add("lock");
  } else {
    state.modal = false;
    document.body.classList.remove("lock");
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
  for (const index of Object.keys(state.data)) {
    Object.assign(state.data, {
      [index]: action.payload[index as keyof UpdateNotice],
    });
  }
};
