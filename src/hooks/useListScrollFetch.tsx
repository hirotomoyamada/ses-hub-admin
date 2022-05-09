import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../features/post/actions";
import * as postSlice from "../features/post/postSlice";

import * as functions from "functions";
import { Index } from "features/root/initialState";
import { OwnDispatch } from "@reduxjs/toolkit";

export const useListScrollFetch = (
  index: Index | undefined,
  search: {
    value: string | null;
    target: string | null;
    type: string | null;
    filter: string | null;
  }
): [
  list: React.RefObject<HTMLDivElement>,
  load: React.RefObject<HTMLDivElement>,
  page: number,
  hit: {
    posts: number;
    pages: number;
    currentPage: number;
  }
] => {
  const dispatch = useDispatch();

  const hit = useSelector(postSlice.hit);

  const list = useRef<HTMLDivElement>(null);
  const load = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState(0);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    setPage(0);
    setIntersecting(false);
  }, [index]);

  useEffect(() => {
    const observer = functions.observer.createObserver(
      list,
      hit,
      page,
      setPage,
      intersecting,
      setIntersecting
    );

    const ref = load.current;
    ref && observer?.observe(ref);

    return () => {
      ref && observer?.unobserve(ref);
    };
  }, [hit.pages, intersecting, page, list, hit]);

  useEffect(() => {
    index &&
      intersecting &&
      hit.pages &&
      page !== hit.pages &&
      fetchScroll(dispatch, index, search, page).then(() => {
        setIntersecting(!intersecting);
      });
  }, [page, list]);

  return [list, load, page, hit];
};

const fetchScroll = async (
  dispatch: OwnDispatch,
  index: Index,
  search: {
    value: string | null;
    target: string | null;
    type: string | null;
    filter: string | null;
  },
  page: number
): Promise<void> => {
  if (
    index === "matters" ||
    index === "resources" ||
    index === "companys" ||
    index === "persons"
  ) {
    await dispatch(
      fetchPosts({
        index: index,
        value: search.value,
        target: search.target,
        type: search.type,
        filter: search.filter,
        page: page,
      })
    );
  }
};
