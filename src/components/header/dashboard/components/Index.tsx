import React from "react";
import styles from "../Header.module.scss";

import * as DashBoard from "pages/dashboard/DashBoard";

interface PropType {
  index: DashBoard.Index;
  setIndex: React.Dispatch<React.SetStateAction<DashBoard.Index>>;
}

export const Index: React.FC<PropType> = ({ index, setIndex }) => {
  return (
    <div className={`${styles.sort} ${styles.sort_index}`}>
      <button
        type="button"
        className={`
          ${styles.sort_btn}
          ${index === "users" && styles.sort_btn_current}
        `}
        onClick={() => setIndex("users")}
      >
        ユーザー
      </button>

      <button
        type="button"
        className={`
          ${styles.sort_btn}
          ${index === "matters" && styles.sort_btn_current}
        `}
        onClick={() => setIndex("matters")}
      >
        案件
      </button>

      <button
        type="button"
        className={`
          ${styles.sort_btn}
          ${index === "resources" && styles.sort_btn_current}
        `}
        onClick={() => setIndex("resources")}
      >
        人材
      </button>
    </div>
  );
};
