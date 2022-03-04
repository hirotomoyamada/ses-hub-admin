import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { extractPosts } from "features/user/actions";
import * as userSlice from "../features/user/userSlice";

import * as functions from "functions";
import { Index, Type } from "hooks/useSideFetch";
import { Company, Person } from "types/post";
import { OwnDispatch } from "@reduxjs/toolkit";

export const useSideScrollFetch = (
  index: Index,
  user: Company | Person,
  type: Type,
  target: Type
): [
  list: React.RefObject<HTMLDivElement>,
  inner: React.RefObject<HTMLDivElement>,
  load: React.RefObject<HTMLDivElement>,
  page: number,
  hit: {
    posts: number;
    pages: number;
    currentPage: number;
  }
] => {
  const dispatch = useDispatch();

  const hit = useSelector(userSlice.hit);

  const list = useRef<HTMLDivElement>(null);
  const load = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState(0);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    inner.current && inner.current.scrollTo(0, 0);
  }, [target, type, index, inner]);

  useEffect(() => {
    if (hit.currentPage === 0) {
      setPage(0);
      setIntersecting(false);
    }
  }, [hit.currentPage, hit.pages]);

  useEffect(() => {
    const observer = functions.observer.createObserver(
      list,
      hit,
      page,
      setPage,
      intersecting,
      setIntersecting,
      "side"
    );

    const ref = load?.current;
    ref && observer?.observe(ref);

    return () => {
      ref && observer?.unobserve(ref);
    };
  }, [hit, intersecting, page]);

  useEffect(() => {
    intersecting &&
      hit.pages &&
      page !== hit.pages &&
      fetchScroll(dispatch, index, type, user, page).then(() => {
        setIntersecting(!intersecting);
      });
  }, [page, list]);

  return [list, inner, load, page, hit];
};

const fetchScroll = async (
  dispatch: OwnDispatch,
  index: Index,
  type: Type,
  user: Company | Person,
  page: number
): Promise<void> => {
  if (type === "data") {
    return;
  }

  await dispatch(
    extractPosts({
      index: type !== "follows" ? index : "companys",
      type: type,
      user: user,
      page: page,
    })
  );
};
