import styles from "./User.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export const Status = ({ post }) => {
  return (
    <div
      className={`${styles.item_status} ${
        post?.application
          ? styles.item_status_application
          : post?.status === "hold"
          ? styles.item_status_hold
          : post?.status === "disable" && styles.item_status_disable
      }`}
    >
      <FontAwesomeIcon
        icon={
          post?.application
            ? faBell
            : post?.status === "enable"
            ? faCheck
            : post?.status === "hold"
            ? faPause
            : post?.status === "disable" && faTimes
        }
      />
    </div>
  );
};
