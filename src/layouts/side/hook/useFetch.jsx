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
      (type !== "follows" && type !== "children" && edit !== "persons") ||
      type === "requests"
        ? user?.[type]?.[index]?.length &&
          dispatch(
            extractPosts({
              index: index,
              type: type,
              user: user,
            })
          )
        : ((type !== "children" && user?.[type]?.length) ||
            (type === "children" && user?.payment?.children?.length)) &&
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
