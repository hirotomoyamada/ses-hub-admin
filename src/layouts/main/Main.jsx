import styles from "./Main.module.scss";
import { useSelector } from "react-redux";
import { usePosts } from "./hook/usePosts";

import * as rootSlice from "../../features/root/rootSlice";

import { Header } from "./components/header/Header";
import { List } from "./pages/list/List";
import { Modal } from "../../components/modal/Modal";
import { Setting } from "./pages/setting/Setting";
import { Mail } from "./pages/mail/Mail";
import { Fetch } from "../../components/load/Load";
import { Account } from "./pages/account/Account";

export const Main = ({ index }) => {
  const data = useSelector(rootSlice.data);
  const search = useSelector(rootSlice.search);

  const posts = usePosts(index, search);

  return index.page === "setting" ? (
    <main className={styles.main}>
      <Fetch />
      <Header index={index.page} edit={index.edit} data={data} />
      <Setting data={data} index={index.edit} />
    </main>
  ) : index.page === "mail" ? (
    <main className={styles.main}>
      <Fetch />
      <Header index={index.page} edit={index.edit} data={data} />
      <Mail data={data} index={index.edit} />
    </main>
  ) : index.page === "account" ? (
    <main className={styles.main}>
      <Fetch />
      <Header index={index.page} edit={index.edit} />
      <Account index={index.edit} />
    </main>
  ) : (
    <main className={styles.main}>
      <Fetch />
      <Header index={index.page} />
      <List index={index.page} posts={posts} search={search} />
      <Modal index={index.edit} />
    </main>
  );
};
