import React from "react";
import styles from "../Header.module.scss";

import * as DashBoard from "pages/dashboard/DashBoard";

interface PropType {
  sort: DashBoard.Sort;
  setSort: React.Dispatch<React.SetStateAction<DashBoard.Sort>>;
}

export const Sort: React.FC<PropType> = ({ sort, setSort }) => {
  return (
    <div className={styles.sort}>
      <button
        type="button"
        className={`
            ${styles.sort_btn}
            ${sort.active && styles.sort_btn_active}
            ${
              !sort.trialing &&
              !sort.canceled &&
              !sort.person &&
              styles.sort_btn_disabled
            }
          `}
        onClick={() => setSort((prev) => ({ ...prev, active: !prev.active }))}
      >
        レギュラー
      </button>

      <button
        type="button"
        className={`
            ${styles.sort_btn}
            ${sort.trialing && styles.sort_btn_trialing}
            ${
              !sort.active &&
              !sort.canceled &&
              !sort.person &&
              styles.sort_btn_disabled
            }
          `}
        onClick={() =>
          setSort((prev) => ({ ...prev, trialing: !prev.trialing }))
        }
      >
        フリートライアル
      </button>

      <button
        type="button"
        className={`
            ${styles.sort_btn}
            ${sort.canceled && styles.sort_btn_canceled}
            ${
              !sort.active &&
              !sort.trialing &&
              !sort.person &&
              styles.sort_btn_disabled
            }
          `}
        onClick={() =>
          setSort((prev) => ({ ...prev, canceled: !prev.canceled }))
        }
      >
        リミテッド
      </button>

      <button
        type="button"
        className={`
            ${styles.sort_btn}
            ${sort.person && styles.sort_btn_person}
            ${
              !sort.active &&
              !sort.trialing &&
              !sort.canceled &&
              styles.sort_btn_disabled
            }
          `}
        onClick={() => setSort((prev) => ({ ...prev, person: !prev.person }))}
      >
        エンジニア
      </button>
    </div>
  );
};
