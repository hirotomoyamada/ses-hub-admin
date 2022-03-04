import styles from "./User.module.scss";

import { Icon } from "components/icon/Icon";
import { Status } from "./Status";
import { Header } from "./Header";
import { Companys } from "./Companys";
import { Persons } from "./Persons";
import { At } from "./At";
import { Company, Person } from "types/post";

interface PropType {
  post: Company | Person;
  index: "companys" | "persons";
  min?: boolean;
}

export const User: React.FC<PropType> = ({ post, index, min }) => {
  return (
    <article className={`${styles.item} ${min && styles.item_min}`}>
      <Status post={post} />
      <Icon src={post.icon} />
      <div className={styles.item_main}>
        <Header index={index} post={post} min={min} />
        {!min &&
          (index === "companys" ? (
            <Companys post={post as Company} />
          ) : (
            index === "persons" && <Persons post={post as Person} />
          ))}

        {min && <At post={post} min />}
      </div>

      {!min && <At post={post} />}
    </article>
  );
};
