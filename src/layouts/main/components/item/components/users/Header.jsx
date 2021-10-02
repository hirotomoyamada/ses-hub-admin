import styles from "./User.module.scss";

export const Header = ({ post }) => {
  return (
    <div className={styles.item_main_head}>
      <div className={styles.item_row}>
        <span>{post?.name}</span>
        <span>{post?.person}</span>
        <div
          className={`${styles.item_category} ${styles.item_category_position}`}
        >
          <span>{post?.position}</span>
        </div>
      </div>
    </div>
  );
};
