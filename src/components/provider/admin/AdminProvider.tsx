import React from "react";
import styles from "./AdminProvider.module.scss";

import { Menu } from "components/menu/Menu";

export const AdminProvider: React.FC = ({ children }) => {
  return (
    <div className={styles.admin}>
      <Menu />

      {children}
    </div>
  );
};
