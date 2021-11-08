import styles from "./User.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const Persons = ({ post }) => {
  return (
    <div className={`${styles.item_main_footer} ${styles.item_row}`}>
      <div className={styles.item_row}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.item_icon} />
        <span>{post?.email}</span>
      </div>
      <div className={styles.item_row}>
        <FontAwesomeIcon icon={faUser} className={styles.item_icon} />
        <span>
          {post?.sex}&nbsp;(&nbsp;{post?.age}歳&nbsp;)
        </span>
      </div>
      <div className={styles.item_row}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.item_icon} />
        <span>{post?.location}</span>
      </div>
      {post?.follows?.[0] && (
        <div className={styles.item_row}>
          <FontAwesomeIcon icon={faUsers} className={styles.item_icon_follow} />
          <span>{post?.follows?.length}人</span>
        </div>
      )}
      {post?.likes?.[0] && (
        <div className={styles.item_row}>
          <FontAwesomeIcon icon={faHeart} className={styles.item_icon_like} />
          <span>{post?.likes?.length}件</span>
        </div>
      )}
      {post?.entries?.[0] && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={styles.item_icon_entry}
          />
          <span>{post?.entries?.length}件</span>
        </div>
      )}
    </div>
  );
};
