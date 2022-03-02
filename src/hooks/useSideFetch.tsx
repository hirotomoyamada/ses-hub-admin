import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { extractPosts } from "features/user/actions";
import * as userSlice from "../features/user/userSlice";
import { Company, Person } from "types/posts";

import { Posts } from "features/user/initialState";
import { Edit } from "features/root/initialState";

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

export type Index =
  | "matters"
  | "resources"
  | "companys"
  | "persons"
  | "enable"
  | "hold"
  | "disable";

export const useSideFetch = (
  user: Company | Person,
  edit: Edit
): [
  posts: Posts["company"] | Posts["person"] | Record<string, never>,
  type: Type,
  setType: React.Dispatch<React.SetStateAction<Type>>,
  index: Index,
  setIndex: React.Dispatch<React.SetStateAction<Index>>
] => {
  const dispatch = useDispatch();

  const posts = useSelector(userSlice.posts);

  const [type, setType] = useState<Type>("data");
  const [index, setIndex] = useState<Index>("matters");

  useEffect(() => {
    return () => {
      setType("data");
    };
  }, [user]);

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
                user: user,
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
                user: user,
              })
            );
        }

        if (type === "children" || type === "follows") {
          ((type === "children" && user.payment.children?.length) ||
            (type === "follows" && user.follows.length)) &&
            dispatch(
              extractPosts({
                index: "companys",
                type: type,
                user: user,
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
                user: user,
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
                user: user,
              })
            );
        }
      }
    }
  }, [dispatch, edit, index, type, user]);

  return [posts, type, setType, index, setIndex];
};
