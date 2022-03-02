import React from "react";
import { Matter, Resource } from "types/posts";
import styles from "./Post.module.scss";

interface PropType {
  index: "matters" | "resources";
  post: Matter | Resource;
}

export const Main: React.FC<PropType> = ({ post, index }) => {
  return (
    <div className={styles.item_main}>
      <div className={styles.item_row}>
        <div className={styles.item_ttl}>
          {index === "matters" ? (
            <span>{(post as Matter)?.title}</span>
          ) : (
            <span>
              {(post as Resource)?.roman?.firstName?.substring(0, 1)}
              &nbsp;.&nbsp;
              {(post as Resource)?.roman?.lastName?.substring(0, 1)}&nbsp;
              {(post as Resource)?.memo?.name &&
                `( ${(post as Resource).memo?.name} )`}
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
