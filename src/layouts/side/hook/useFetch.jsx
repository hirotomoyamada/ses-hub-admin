import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { extractPosts } from "../../../features/user/actions/extractPosts";
import * as userSlice from "../../../features/user/userSlice";

export const useFetch = (user, edit) => {
  const dispatch = useDispatch();

  const posts = useSelector(userSlice.posts);
  const [type, setType] = useState("data");
  const [index, setIndex] = useState("matters");

  useEffect(() => {
    return () => {
      setType("data");
    };
  }, [user]);

  useEffect(() => {
    if (type !== "data") {
      (type !== "follows" && edit !== "persons") || type === "requests"
        ? user?.[type]?.[index]?.[0] &&
          dispatch(
            extractPosts({
              index: index,
              type: type,
              user: user,
            })
          )
        : user?.[type]?.[0] &&
          dispatch(
            extractPosts({
              index:
                index === "enable" || index === "hold" || index === "disable"
                  ? "companys"
                  : index,
              type: type,
              user: user,
            })
          );
    }
  }, [dispatch, edit, index, type, user]);

  return [posts, type, setType, index, setIndex];
};
