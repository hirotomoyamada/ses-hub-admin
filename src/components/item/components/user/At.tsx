import styles from "./User.module.scss";

import * as functions from "functions";
import { Company, Person } from "types/post";

interface PropType {
  post: Company | Person;
  min?: boolean;
}

export const At: React.FC<PropType> = ({ post, min }) => {
  return (
    <div className={!min ? styles.item_col : styles.item_row}>
      <span className={styles.item_time}>
        {post?.lastLogin &&
          `最終ログイン：${functions.root.timestamp(post?.lastLogin)}`}
      </span>
      {!min && (
        <span className={styles.item_time}>
          作成：{functions.root.timestamp(post?.createAt)}
        </span>
      )}
    </div>
  );
};
