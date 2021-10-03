import styles from "./Side.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { extractPosts } from "../post/functions/extractPosts";
import * as postSlice from "../../features/post/postSlice";

import { Data } from "./components/data/Data";
import { List } from "./components/list/List";

export const Side = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) =>
    postSlice.user({ state: state, index: "data" })
  );
  const posts = useSelector((state) =>
    postSlice.user({ state: state, index: "posts" })
  );
  const edit = useSelector(postSlice.index).edit;

  const [type, setType] = useState("data");
  const [index, setIndex] = useState("matters");

  useEffect(() => {
    return () => {
      setType("data");
    };
  }, [user]);

  useEffect(() => {
    if (type !== "data") {
      type !== "follows"
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
              index: "companys",
              type: type,
              user: user,
            })
          );
    }
  }, [dispatch, index, type, user]);

  const handleOpen = (target) => {
    if (target === "follows") {
      setIndex("companys");
    } else if (target !== "likes" || target !== "entries") {
      (index === "companys" || index === "persons") && setIndex("matters");
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
