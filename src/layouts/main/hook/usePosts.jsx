import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../../features/post/actions/fetchPosts";
import * as postSlice from "../../../features/post/postSlice";

export const usePosts = (index, search) => {
  const dispatch = useDispatch();

  const posts = useSelector(postSlice.posts)[index.page];

  useEffect(() => {
    index.page !== "setting" &&
      index.page !== "mail" &&
      index.page !== "account" &&
      dispatch(
        fetchPosts({
          index: index.page,
          value: search.value,
          target: search.target,
          type: search.type,
          filter: search.filter,
          fetch: posts.length && true,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dispatch,
    index.page,
    search.value,
    search.target,
    search.type,
    search.filter,
  ]);

  return posts;
};
