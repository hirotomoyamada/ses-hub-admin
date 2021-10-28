import styles from "./User.module.scss";

import { Icon } from "../../../../../../components/icon/Icon";

import { Status } from "./Status";
import { Header } from "./Header";
import { Companys } from "./Companys";
import { Persons } from "./Persons";
import { At } from "./At";

export const User = ({ post, index, min }) => {
  return (
    <article className={`${styles.item} ${min && styles.item_min}`}>
      <Status post={post} />
      <Icon src={post.icon} />
      <div className={styles.item_main}>
        <Header post={post} min={min} />
        {!min &&
          (index === "companys" ? (
            <Companys post={post} />
          ) : (
            index === "persons" && <Persons post={post} />
          ))}
        {min && <At post={post} mini />}
      </div>
      {!min && <At post={post} />}
    </article>
  );
};
