import styles from "./User.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Company, Person } from "types/posts";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface PropType {
  post: Company | Person;
}

export const Status: React.FC<PropType> = ({ post }) => {
  return (
    <div
      className={`${styles.item_status} ${
        (post as Company)?.application
          ? styles.item_status_application
          : post?.status === "hold"
          ? styles.item_status_hold
          : post?.status === "disable" && styles.item_status_disable
      }`}
    >
      <FontAwesomeIcon
        icon={
          ((post as Company)?.application
            ? faBell
            : post?.status === "enable"
            ? faCheck
            : post?.status === "disable"
            ? faTimes
            : faPause) as IconProp
        }
      />
    </div>
  );
};
