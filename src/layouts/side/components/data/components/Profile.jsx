import styles from "../Data.module.scss";

export const Profile = ({ user }) => {
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
      {user?.tel && (
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
      {user?.url && (
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
