import styles from "./Post.module.scss";

export const Main = ({ post, index }) => {
  return (
    <div className={styles.item_main}>
      <div className={styles.item_row}>
        <div className={styles.item_ttl}>
          {index === "matters" ? (
            <span>{post?.title}</span>
          ) : (
            <span>
              {post?.roman?.firstName?.substring(0, 1)}&nbsp;.&nbsp;
              {post?.roman?.lastName?.substring(0, 1)}&nbsp;
              {post?.memo?.name && `( ${post.memo.name} )`}
            </span>
          )}
        </div>
      </div>
      <div className={styles.item_row}>
        <span className={styles.item_user}>{post?.user?.name}</span>
        <span className={styles.item_user}>{post?.user?.person}</span>
      </div>
    </div>
  );
};
