import styles from "./User.module.scss";

import { Icon } from "../../../../../../components/icon/Icon";

import { Status } from "./Status";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { At } from "./At";

export const User = ({ post, index, mini }) => {
  return (
    <article className={`${styles.item} ${mini && styles.item_mini}`}>
      <Status post={post} />
      <Icon src={post.icon} />
      <div className={styles.item_main}>
        <Header post={post} />
        {!mini && <Footer post={post} />}
        {mini && <At post={post} mini />}
      </div>
      {!mini && <At post={post} />}
    </article>
  );
};
