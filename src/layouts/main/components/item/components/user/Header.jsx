import styles from "./User.module.scss";

export const Header = ({ post, min }) => {
  return (
    <div className={styles.item_main_head}>
      <div className={styles.item_row}>
        <span>{post?.name}</span>
        {post?.person && <span>{post.person}</span>}
        {post?.nickName && <span>(&nbsp;{post.nickName}&nbsp;)</span>}

        {!min && post?.position && (
          <div
            className={`${styles.item_category} ${styles.item_category_position}`}
          >
            <span>{post?.position}</span>
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
            className={`${styles.item_category} ${styles.item_category_trialing}`}
          >
            <span>{post?.state}</span>
          </div>
        )}

        {post?.handles &&
          post.handles.slice(0, 3).map((handle, index) => (
            <div className={styles.item_category} key={index}>
              <span>{handle}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
