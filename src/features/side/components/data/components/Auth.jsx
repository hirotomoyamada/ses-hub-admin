import styles from "../Data.module.scss";

import { timestamp } from "../../../../../functions/timestamp";

export const Auth = ({ user }) => {
  return (
    <div className={styles.data_col}>
      {user?.lastLogin && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>最終ログイン</span>
          <span className={styles.data_item_text}>
            {timestamp(user?.lastLogin)}
          </span>
        </div>
      )}
      {user?.createAt && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>作成</span>
          <span className={styles.data_item_text}>
            {timestamp(user?.createAt)}
          </span>
        </div>
      )}
      {user?.updateAt && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>更新</span>
          <span className={styles.data_item_text}>
            {timestamp(user?.updateAt)}
          </span>
        </div>
      )}
    </div>
  );
};
