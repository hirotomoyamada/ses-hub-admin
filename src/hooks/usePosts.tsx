import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "features/post/actions";
import * as postSlice from "features/post/postSlice";

import { Matter, Resource, Company, Person } from "types/post";

export const usePosts = (
  index: "matters" | "resources" | "companys" | "persons" | undefined,
  search: {
    value: string | null;
    target: string | null;
    type: string | null;
    filter: string | null;
  }
): Matter[] | Resource[] | Company[] | Person[] | [] => {
  const dispatch = useDispatch();

  if (
    index !== "matters" &&
    index !== "resources" &&
    index !== "companys" &&
    index !== "persons"
  ) {
    return [];
  }

  const posts = useSelector(postSlice.posts)[index];

  useEffect(() => {
    dispatch(
      fetchPosts({
        index: index,
        value: search.value,
        target: search.target,
        type: search.type,
        filter: search.filter,
        fetch: posts.length ? true : false,
      })
    );
  }, [
    dispatch,
    index,
    search.value,
    search.target,
    search.type,
    search.filter,
  ]);

  return posts;
};
