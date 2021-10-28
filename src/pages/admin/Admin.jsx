import styles from "./Admin.module.scss";

import { useSelector } from "react-redux";

import * as rootSlice from "../../features/root/rootSlice";

import { Main } from "../../layouts/main/Main";
import { Menu } from "../../layouts/menu/Menu";

export const Admin = () => {
  const index = useSelector(rootSlice.index);

  return (
    <div className={styles.admin}>
      <Main index={index} />
      <Menu index={index} />
    </div>
  );
};
