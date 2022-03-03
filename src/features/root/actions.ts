import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions, db } from "libs/firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { httpsCallable, HttpsCallable } from "firebase/functions";
import { Data } from "types/auth";

export interface Login {
  uid: string;
  seshub: Data;
  freelanceDirect: Data;
}

export const login = createAsyncThunk(
  "root/login",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (_arg: unknown): Promise<Login> => {
    const login: HttpsCallable<unknown, Login> = httpsCallable(
      functions,
      "admin-login"
    );

    const { data } = await login();

    return data;
  }
);

export interface EditData
  extends Pick<Data, "information" | "agree" | "maintenance"> {
  index: "companys" | "persons";
}

export const editData = createAsyncThunk(
  "root/editData",
  async (arg: EditData): Promise<EditData> => {
    const editData: HttpsCallable<EditData, EditData> = httpsCallable(
      functions,
      "admin-editData"
    );

    const { data } = await editData(arg);

    return data;
  }
);

export interface SendMail {
  index: "companys" | "persons";
  title: string;
  body: string;
  target: string | null;
  updateAt?: number;
}

export const sendMail = createAsyncThunk(
  "root/sendMail",
  async (arg: SendMail): Promise<SendMail> => {
    const sendMail: HttpsCallable = httpsCallable(functions, "admin-sendMail");

    await sendMail(arg);

    return arg;
  }
);

export interface UpdateNotice {
  seshub: {
    application: boolean;
    hold: boolean;
  };

  freelanceDirect: {
    hold: boolean;
  };
}

export const updateNotice = createAsyncThunk(
  "root/updateNotice",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (_: unknown): Promise<UpdateNotice> => {
    const data: UpdateNotice = {
      seshub: {
        application: true,
        hold: true,
      },

      freelanceDirect: {
        hold: true,
      },
    };

    for await (const index of Object.keys(data)) {
      for await (const key of Object.keys(data[index as keyof UpdateNotice])) {
        const q = query(
          collection(db, index === "seshub" ? "companys" : "persons"),
          where(
            key === "application" ? key : "status",
            "==",
            key === "application" ? true : key
          ),
          orderBy("lastLogin", "desc")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot?.docs?.length) {
          Object.assign(data[index as keyof UpdateNotice], { [key]: false });
        }
      }
    }

    return data;
  }
);

export type UpdateAccount = {
  uid: string;
  status: string;
  account?: number;
  option?: string;
}[];

export const updateAccount = createAsyncThunk(
  "root/updateUser",
  async (arg: UpdateAccount): Promise<UpdateAccount> => {
    const updateAccount: HttpsCallable<UpdateAccount, unknown> = httpsCallable(
      functions,
      "admin-updateAccount"
    );

    await updateAccount(arg);

    return arg;
  }
);
