import styles from "../../../Main.module.scss";

import { Item } from "../../item/Item";

export const Posts = ({ index, posts, list }) => {
  return (
    <div className={styles.main_list} ref={list}>
      {posts?.map((post) => (
        <Item
          key={
            index === "matters" || index === "resources"
              ? post.objectID
              : (index === "companys" || index === "persons") && post.uid
          }
          index={index}
          post={post}
        />
      ))}
    </div>
  );
};
