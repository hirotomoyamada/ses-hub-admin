import styles from "./Admin.module.scss";

import { usePosts } from "hooks/usePosts";
import { useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

import { Setting } from "pages/setting/Setting";
import { Mail } from "pages/mail/Mail";
import { Account } from "pages/account/Account";
import { List } from "pages/list/List";

import { Menu } from "components/menu/Menu";
import { Header } from "components/header/Header";
import { Modal } from "components/modal/Modal";
import { Fetch } from "components/load/Load";

export const Admin: React.FC = () => {
  const index = useSelector(rootSlice.index);
  const data = useSelector(rootSlice.data);
  const search = useSelector(rootSlice.search);
  const posts = usePosts(index.page, search);

  return (
    <div className={styles.admin}>
      <Menu index={index} />

      {index.page === "setting" ? (
        <div className={styles.admin_inner}>
          <Fetch />
          <Header index={index.page} edit={index.edit} data={data} />
          <Setting data={data} index={index.edit} />
        </div>
      ) : index.page === "mail" ? (
        <div className={styles.admin_inner}>
          <Fetch />
          <Header index={index.page} edit={index.edit} data={data} />
          <Mail data={data} index={index.edit} />
        </div>
      ) : index.page === "account" ? (
        <div className={styles.admin_inner}>
          <Fetch />
          <Header index={index.page} edit={index.edit} />
          <Account index={index.edit} />
        </div>
      ) : (
        <div className={styles.admin_inner}>
          <Fetch />
          <Header index={index.page} />
          <List index={index.page} posts={posts} search={search} />
          <Modal index={index.edit} />
        </div>
      )}
    </div>
  );
};
