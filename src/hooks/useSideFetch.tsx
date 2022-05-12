import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { extractPosts } from "features/user/actions";
import * as userSlice from "../features/user/userSlice";
import * as rootSlice from "features/root/rootSlice";
import { Company, Person } from "types/post";

import { Posts } from "features/user/initialState";
import { Index } from "features/root/initialState";
import { useLocation } from "react-router-dom";

export type Type =
  | "data"
  | "children"
  | "follows"
  | "posts"
  | "likes"
  | "outputs"
  | "entries"
  | "histories"
  | "requests";

export type HandleOpen = ({
  type,
  index,
}: {
  type: Type;
  index?: Index;
}) => void;
export type HandleIndex = (i: Index) => void;

export const useSideFetch = (
  user: Company | Person,
  index: Index
): [
  posts: Posts["company"] | Posts["person"] | Record<string, never>,
  type: Type,
  handleOpen: HandleOpen,
  handleIndex: HandleIndex
] => {
  const dispatch = useDispatch();
  const location = useLocation();

  const posts = useSelector(userSlice.posts);
  const state = location?.state as { type: Type } | undefined;
  const [type, setType] = useState<Type>(state?.type || "data");

  const handleOpen: HandleOpen = (arg) => {
    if (!arg.index) {
      if (arg.type === "follows" || arg.type === "children") {
        handleIndex("companys");
      } else if (arg.type === "requests") {
        handleIndex("hold");
      } else if (arg.type !== "likes" && arg.type !== "entries") {
        (index === "companys" ||
          index === "persons" ||
          index === "enable" ||
          index === "hold" ||
          index === "disable") &&
          handleIndex("matters");
      }
    } else {
      handleIndex(arg.index);
    }

    setType(arg.type);
  };

  const handleIndex: HandleIndex = (i) => {
    dispatch(rootSlice.handleIndex(i));
  };

  useEffect(() => {
    const pathname = location.pathname.slice(1);
    const index = pathname.substring(
      0,
      pathname.indexOf("/") >= 0 ? pathname.indexOf("/") : undefined
    );

    if (state?.type)
      handleIndex(index as "matters" | "resources" | "companys" | "persons");
  }, [state]);

  useEffect(() => {
    if (type !== "data") {
      if ("posts" in user) {
        if (
          (type === "likes" || type === "entries") &&
          (index === "matters" || index === "resources" || index === "persons")
        ) {
          user?.[type]?.[index]?.length &&
            dispatch(
              extractPosts({
                index: index,
                type: type,
                objectIDs: user[type][index],
              })
            );
        }

        if (
          (type === "posts" || type === "outputs") &&
          (index === "matters" || index === "resources")
        ) {
          user?.[type]?.[index]?.length &&
            dispatch(
              extractPosts({
                index: index,
                type: type,
                objectIDs: user[type][index],
              })
            );
        }

        if (type === "follows") {
          user.follows.length &&
            dispatch(
              extractPosts({
                index: "companys",
                type: type,
                objectIDs: user.follows,
              })
            );
        }

        if (type === "children") {
          user.payment.children?.length &&
            dispatch(
              extractPosts({
                index: "companys",
                type: type,
                objectIDs: user.payment.children,
              })
            );
        }
      } else {
        if (
          type === "requests" &&
          (index === "enable" || index === "hold" || index === "disable")
        ) {
          user?.[type]?.[index]?.length &&
            dispatch(
              extractPosts({
                index: index,
                type: type,
                objectIDs: user[type][index],
              })
            );
        }

        if (
          type === "follows" ||
          type === "likes" ||
          type === "entries" ||
          type === "histories"
        ) {
          user?.[type]?.length &&
            dispatch(
              extractPosts({
                index: type === "follows" ? "companys" : "matters",
                type: type,
                objectIDs: user[type],
              })
            );
        }
      }
    }
  }, [dispatch, index, type, user]);

  return [posts, type, handleOpen, handleIndex];
};
