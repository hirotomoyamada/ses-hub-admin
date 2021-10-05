import styles from "./Main.module.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../features/post/functions/fetchPosts";
import * as postSlice from "../../features/post/postSlice";
import * as userSlice from "../../features/user/userSlice";

import { Header } from "./components/Header";
import { List } from "./components/List";
import { Modal } from "../../components/modal/Modal";
import { Setting } from "./components/setting/Setting";

export const Main = ({ index }) => {
  const dispatch = useDispatch();
  const search = useSelector(postSlice.search);
  const posts = useSelector(postSlice.posts)[index.page];
  const data = useSelector(userSlice.data);

  useEffect(() => {
    index.page !== "setting" &&
      index.page !== "mail" &&
      dispatch(
        fetchPosts({
          index: index.page,
          value: search.value,
          target: search.target,
          type: search.type,
          filter: search.filter,
        })
      );
  }, [
    dispatch,
    index.page,
    search.filter,
    search.target,
    search.type,
    search.value,
  ]);

  return index.page === "setting" ? (
    <main className={styles.main}>
      <Header index={index.page} data={data.seshub} />
      <Setting data={data} index={index.edit} />
    </main>
  ) : index.page === "mail" ? (
    <main className={styles.main}></main>
  ) : (
    <main className={styles.main}>
      <Header index={index.page} />
      <List index={index.page} posts={posts} search={search} />

      <Modal index={index.edit} />
    </main>
  );
};
