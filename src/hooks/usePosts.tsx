import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "features/post/actions";
import * as postSlice from "features/post/postSlice";
import { Page } from "features/root/initialState";
import { Matter, Resource, Company, Person } from "types/posts";

export const usePosts = (
  page: Page,
  search: {
    value: string | null;
    target: string | null;
    type: string | null;
    filter: string | null;
  }
): Matter[] | Resource[] | Company[] | Person[] | undefined => {
  const dispatch = useDispatch();

  const index = page;

  if (
    index === "matters" ||
    index === "resources" ||
    index === "companys" ||
    index === "persons"
  ) {
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
  }
};
