import styles from "./User.module.scss";

export const Header = ({ post, min }) => {
  return (
    <div className={styles.item_main_head}>
      <div className={styles.item_row}>
        <span>{post?.name}</span>
        {post?.type !== "corporate" && post?.person && (
          <span>{post.person}</span>
        )}
        {post?.nickName && <span>(&nbsp;{post.nickName}&nbsp;)</span>}

        {!min && (
          <div
            className={`${styles.item_category} ${
              styles.item_category_position
            } ${post?.type === "corporate" && styles.item_category_corporate}`}
          >
            <span>
              {post?.type !== "corporate"
                ? post?.position
                  ? post?.position
                  : "未設定"
                : "法人"}
            </span>
          </div>
        )}

        {!min && post?.payment && (
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

        {!min && post?.payment?.option?.freelanceDirect && (
          <div
            className={`${styles.item_category} ${styles.item_category_trialing}`}
          >
            <span>オプション</span>
          </div>
        )}

        {!min && post?.state && (
          <div
            className={`${styles.item_category} ${styles.item_category_state} ${
              (post?.state === "確定" ||
                post?.state === "商談中" ||
                post?.state === "情報収集中") &&
              styles.item_category_disable
            } ${post?.state === "至急" && styles.item_category_hurry}`}
          >
            <span>{post?.state}</span>
          </div>
        )}

        {post?.handles &&
          post.handles.slice(0, 3).map((handle, index) => (
            <div
              className={`${styles.item_category} ${styles.item_category_handle}`}
              key={index}
            >
              <span>{handle}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
