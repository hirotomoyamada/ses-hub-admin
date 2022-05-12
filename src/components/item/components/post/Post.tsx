import styles from "./Post.module.scss";

import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Matter, Resource } from "types/post";
import { useSelector } from "react-redux";
import * as postSlice from "features/post/postSlice";

interface PropType {
  post: Matter | Resource;
  index: "matters" | "resources";
  min?: boolean;
}

export const Post: React.FC<PropType> = ({ post, index, min }) => {
  const selectPost = useSelector(postSlice.post);

  return (
    <article
      className={`${styles.item} ${
        selectPost?.objectID === post.objectID && styles.item_current
      }`}
    >
      <Header post={post} min={min} />
      <Main post={post} index={index} />
      <Footer post={post} index={index} min={min} />
    </article>
  );
};
