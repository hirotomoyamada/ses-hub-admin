import styles from "./User.module.scss";

import { timestamp } from "../../../../../../functions/timestamp";

export const At = ({ post, mini }) => {
  return (
    <div className={!mini ? styles.item_col : styles.item_row}>
      <span className={styles.item_time}>
        {post?.lastLogin && `最終ログイン：${timestamp(post?.lastLogin)}`}
      </span>
      {!mini && (
        <span className={styles.item_time}>
          作成：{timestamp(post?.createAt)}
        </span>
      )}
    </div>
  );
};
