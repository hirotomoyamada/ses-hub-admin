import { Company, Person } from "types/post";
import styles from "../Data.module.scss";

interface PropType {
  user: Company | Person;
}

export const Profile: React.FC<PropType> = ({ user }) => {
  return (
    <div className={styles.data_col}>
      <div className={styles.data_item}>
        <span className={styles.data_item_tag}>メールアドレス</span>
        <a
          href={`mailto:${user?.email}`}
          className={`${styles.data_item_text} ${styles.data_item_text_link}`}
        >
          {user?.email}
        </a>
      </div>
      {"tel" in user && user?.tel && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>電話番号</span>
          <a
            href={`tel:${user?.tel}`}
            className={`${styles.data_item_text} ${styles.data_item_text_link}`}
          >
            {user?.tel}
          </a>
        </div>
      )}

      {"url" in user && user?.url && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>URL</span>
          <a
            href={user?.url}
            target="_blank"
            rel="noreferrer noopener"
            className={`${styles.data_item_text} ${styles.data_item_text_link}`}
          >
            {user?.url}
          </a>
        </div>
      )}
    </div>
  );
};
