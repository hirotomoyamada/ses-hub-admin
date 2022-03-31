import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "libs/firebase";
import { httpsCallable, HttpsCallable } from "firebase/functions";
import { Matter, Resource, Company, Person } from "types/post";

export interface FetchUser {
  arg: {
    index: "companys" | "persons";
    uid: string;
    type?: "user" | "accounts";
    i?: number;
  };

  data: {
    index: "companys" | "persons";
    user: Company | Person;
    type?: "user" | "accounts";
    i?: number;
  };
}

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (arg: FetchUser["arg"]): Promise<FetchUser["data"]> => {
    const fetchUser: HttpsCallable<
      { index: FetchUser["arg"]["index"]; uid: FetchUser["arg"]["uid"] },
      Company | Person
    > = httpsCallable(functions, "admin-fetchUser");

    const index = arg.index;
    const type = arg.type;
    const i = arg.i;

    const { data } = await fetchUser({
      index: arg.index,
      uid: arg.uid,
    });

    return { index: index, user: data, type: type, i: i };
  }
);

export interface UploadResume {
  arg: {
    uid: string;
    file: string;
    fetch?: boolean;
  };

  data: string;
}

export const uploadResume = createAsyncThunk(
  "user/uploadResume",
  async (arg: UploadResume["arg"]): Promise<UploadResume["data"]> => {
    const uploadResume: HttpsCallable<
      UploadResume["arg"],
      UploadResume["data"]
    > = httpsCallable(functions, "admin-uploadResume");

    const { data } = await uploadResume({ uid: arg.uid, file: arg.file });

    return data;
  }
);

export interface ExtractPosts {
  arg: {
    index:
      | "matters"
      | "resources"
      | "companys"
      | "persons"
      | "enable"
      | "hold"
      | "disable";
    type:
      | "children"
      | "follows"
      | "posts"
      | "likes"
      | "outputs"
      | "entries"
      | "histories"
      | "requests";
    posts: string[];
    page?: number;
  };

  data: {
    index:
      | "matters"
      | "resources"
      | "companys"
      | "persons"
      | "enable"
      | "hold"
      | "disable";
    type:
      | "children"
      | "follows"
      | "posts"
      | "likes"
      | "outputs"
      | "entries"
      | "histories"
      | "requests";
    posts: Matter[] | Resource[] | Company[] | Person[];
    hit: {
      posts: number;
      pages: number;
      currentPage: number;
    };
  };
}

export const extractPosts = createAsyncThunk(
  "user/extractPosts",
  async (arg: ExtractPosts["arg"]): Promise<ExtractPosts["data"]> => {
    const extractPosts: HttpsCallable<
      ExtractPosts["arg"],
      ExtractPosts["data"]
    > = httpsCallable(functions, "admin-extractPosts");

    const { data } = await extractPosts({
      index: arg.index,
      posts: arg.posts,
      type: arg.type,
      page: arg.page,
    });

    return data;
  }
);
