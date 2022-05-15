import React from "react";
import styles from "../Header.module.scss";

import * as DashBoard from "pages/dashboard/DashBoard";

interface PropType {
  page: DashBoard.Page;
  setPage: React.Dispatch<React.SetStateAction<DashBoard.Page>>;
}

export const Page: React.FC<PropType> = ({ page, setPage }) => {
  return (
    <div className={`${styles.sort} ${styles.sort_page}`}>
      <button
        type="button"
        className={`
          ${styles.sort_btn}
          ${page === "users" && styles.sort_btn_current}
        `}
        onClick={() => setPage("users")}
      >
        ユーザー
      </button>

      <button
        type="button"
        className={`
          ${styles.sort_btn}
          ${page === "matters" && styles.sort_btn_current}
        `}
        onClick={() => setPage("matters")}
      >
        案件
      </button>

      <button
        type="button"
        className={`
          ${styles.sort_btn}
          ${page === "resources" && styles.sort_btn_current}
        `}
        onClick={() => setPage("resources")}
      >
        人材
      </button>
    </div>
  );
};
