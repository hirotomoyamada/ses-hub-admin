import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "libs/firebase";
import { httpsCallable, HttpsCallable } from "firebase/functions";
import { Matter, Resource, Company, Person } from "types/posts";

export interface FetchPosts {
  arg: {
    index: "matters" | "resources" | "companys" | "persons";
    target?: string | null;
    value?: string | null;
    type?: string | null;
    filter?: string | null;
    page?: number | null;
    fetch?: boolean;
  };

  data: {
    index: "matters" | "resources" | "companys" | "persons";
    posts: Matter[] | Resource[] | Company[] | Person[];
    hit: {
      currentPage: number;
      posts: number;
      pages: number;
    };
  };
}

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (arg: FetchPosts["arg"]): Promise<FetchPosts["data"]> => {
    const fetchPosts: HttpsCallable<FetchPosts["arg"], FetchPosts["data"]> =
      httpsCallable(functions, "admin-fetchPosts");

    const { data } = await fetchPosts({
      index: arg.index,
      target: arg.target,
      value: arg.value,
      type: arg.type,
      filter: arg.filter,
      page: arg.page,
    });

    return data;
  }
);
