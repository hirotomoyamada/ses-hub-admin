import styles from "./Admin.module.scss";

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

  const Page = ((): JSX.Element => {
    switch (index.page) {
      case "setting":
        return <Setting index={index.edit} data={data} />;
      case "mail":
        return <Mail index={index.edit} data={data} />;
      case "account":
        return <Account index={index.edit} />;
      default:
        return <List index={index.page} search={search} />;
    }
  })();

  return (
    <div className={styles.admin}>
      <Menu index={index} />

      <div className={styles.admin_inner}>
        <Fetch />
        <Modal index={index.edit} />
        <Header index={index.page} edit={index.edit} data={data} />

        {Page}
      </div>
    </div>
  );
};
