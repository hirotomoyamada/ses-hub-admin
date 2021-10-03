import styles from "./User.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const Persons = ({ post }) => {
  return (
    <div className={`${styles.item_main_footer} ${styles.item_row}`}>
      <div className={styles.item_row}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.item_icon} />
        <span>{post?.email}</span>
      </div>
    </div>
  );
};
