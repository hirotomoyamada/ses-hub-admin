import styles from "./User.module.scss";

export const Header = ({ post }) => {
  return (
    <div className={styles.item_main_head}>
      <div className={styles.item_row}>
        <span>{post?.name}</span>
        {post?.person && <span>{post?.person}</span>}

        {post?.position && (
          <div
            className={`${styles.item_category} ${styles.item_category_position}`}
          >
            <span>{post?.position}</span>
          </div>
        )}

        {post?.payment && (
          <div
            className={`${styles.item_category} ${
              post?.payment?.status === "active"
                ? styles.item_category_active
                : post?.payment?.status === "trialing" &&
                  styles.item_category_trialing
            }`}
          >
            <span>
              {post?.payment?.status === "active"
                ? "レギュラー"
                : post?.payment?.status === "trialing"
                ? "フリートライアル"
                : "リミテッド"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
