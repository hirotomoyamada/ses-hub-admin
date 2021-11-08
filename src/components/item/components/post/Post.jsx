import styles from "./Post.module.scss";

import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

export const Post = ({ post, index, min }) => {
  return (
    <article className={styles.item}>
      <Header post={post} min={min} />
      <Main post={post} index={index} />
      <Footer post={post} index={index} min={min} />
    </article>
  );
};
