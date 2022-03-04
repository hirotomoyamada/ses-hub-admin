import styles from "./User.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Person } from "types/post";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface PropType {
  post: Person;
}

export const Persons: React.FC<PropType> = ({ post }) => {
  return (
    <div className={`${styles.item_main_footer} ${styles.item_row}`}>
      <div className={styles.item_row}>
        <FontAwesomeIcon
          icon={faEnvelope as IconProp}
          className={styles.item_icon}
        />
        <span>{post?.email}</span>
      </div>

      <div className={styles.item_row}>
        <FontAwesomeIcon
          icon={faUser as IconProp}
          className={styles.item_icon}
        />
        <span>
          {post?.sex}&nbsp;(&nbsp;{post?.age}歳&nbsp;)
        </span>
      </div>

      <div className={styles.item_row}>
        <FontAwesomeIcon
          icon={faMapMarkerAlt as IconProp}
          className={styles.item_icon}
        />
        <span>{post?.location}</span>
      </div>

      {post?.follows?.[0] && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faUsers as IconProp}
            className={styles.item_icon_follow}
          />
          <span>{post?.follows?.length}人</span>
        </div>
      )}

      {post?.likes?.[0] && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faHeart as IconProp}
            className={styles.item_icon_like}
          />
          <span>{post?.likes?.length}件</span>
        </div>
      )}

      {post?.entries?.[0] && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faCheckCircle as IconProp}
            className={styles.item_icon_entry}
          />
          <span>{post?.entries?.length}件</span>
        </div>
      )}
    </div>
  );
};
