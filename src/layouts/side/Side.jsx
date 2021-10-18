import styles from "./Side.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { extractPosts } from "../../features/user/functions/extractPosts";
import * as rootSlice from "../../features/root/rootSlice";
import * as userSlice from "../../features/user/userSlice";

import { Data } from "./components/data/Data";
import { List } from "./components/list/List";

export const Side = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSlice.user);
  const posts = useSelector(userSlice.posts);
  const edit = useSelector(rootSlice.index).edit;

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

  const handleOpen = (target) => {
    if (target === "follows") {
      setIndex("companys");
    } else if (target === "requests") {
      setIndex("hold");
    } else if (target !== "likes" || target !== "entries") {
      (index === "companys" ||
        index === "persons" ||
        index === "enable" ||
        index === "hold" ||
        index === "disable") &&
        setIndex("matters");
    }
    setType(target);
  };

  const handleIndex = (index) => {
    setIndex(index);
  };

  return (
    <div className={styles.side}>
      <Data
        index={edit}
        user={user}
        type={type}
        handleOpen={handleOpen}
        target={"data"}
        setType={setType}
        setIndex={setIndex}
      />

      {Object.keys(posts).map((post) => (
        <List
          key={post}
          type={type}
          edit={edit}
          index={index}
          posts={posts}
          user={user}
          handleIndex={handleIndex}
          handleOpen={handleOpen}
          target={post}
        />
      ))}
    </div>
  );
};
