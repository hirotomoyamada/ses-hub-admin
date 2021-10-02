import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const extractPosts = createAsyncThunk(
  "post/extractPosts",
  async (data) => {
    const extractPosts = functions.httpsCallable("admin-extractPosts");
    const posts = extractPosts({
      index: data.index,
      user: data.user,
      type: data.type,
      page: data.page,
    })
      .then(({ data }) => {
        return {
          index: data.index,
          type: data.type,
          posts: data.posts,
          hit: data.hit,
        };
      })
      .catch((e) => {});

    return posts;
  }
);
