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

  if ("posts" in user) {
    if (
      (type === "likes" || type === "entries") &&
      (index === "matters" || index === "resources" || index === "persons")
    ) {
      user?.[type]?.[index]?.length &&
        (await dispatch(
          extractPosts({
            index: index,
            type: type,
            posts: user[type][index],
            page: page,
          })
        ));
    }

    if (
      (type === "posts" || type === "outputs") &&
      (index === "matters" || index === "resources")
    ) {
      user?.[type]?.[index]?.length &&
        (await dispatch(
          extractPosts({
            index: index,
            type: type,
            posts: user[type][index],
            page: page,
          })
        ));
    }

    if (type === "follows") {
      user.follows.length &&
        (await dispatch(
          extractPosts({
            index: "companys",
            type: type,
            posts: user.follows,
            page: page,
          })
        ));
    }

    if (type === "children") {
      user.payment.children?.length &&
        (await dispatch(
          extractPosts({
            index: "companys",
            type: type,
            posts: user.payment.children,
            page: page,
          })
        ));
    }
  } else {
    if (
      type === "requests" &&
      (index === "enable" || index === "hold" || index === "disable")
    ) {
      user?.[type]?.[index]?.length &&
        (await dispatch(
          extractPosts({
            index: index,
            type: type,
            posts: user[type][index],
            page: page,
          })
        ));
    }

    if (
      type === "follows" ||
      type === "likes" ||
      type === "entries" ||
      type === "histories"
    ) {
      user?.[type]?.length &&
        (await dispatch(
          extractPosts({
            index: type === "follows" ? "companys" : "matters",
            type: type,
            posts: user[type],
            page: page,
          })
        ));
    }
  }
};
