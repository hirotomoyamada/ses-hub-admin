import styles from "./User.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { Company } from "types/posts";

interface PropType {
  post: Company;
}

export const Companys: React.FC<PropType> = ({ post }) => {
  return (
    <div className={`${styles.item_main_footer} ${styles.item_row}`}>
      <div className={styles.item_row}>
        <FontAwesomeIcon
          icon={faEnvelope as IconProp}
          className={styles.item_icon}
        />
        <span>{post?.email}</span>
      </div>

      {post?.tel && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faPhoneAlt as IconProp}
            className={styles.item_icon}
          />
          <span>{post?.tel}</span>
        </div>
      )}

      {post?.follows?.[0] && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faUsers as IconProp}
            className={styles.item_icon_follow}
          />
          <span>{post?.follows?.length}人</span>
        </div>
      )}

      {(post?.posts?.matters?.[0] || post?.posts?.resources?.[0]) && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faCopy as IconProp}
            className={styles.item_icon_post}
          />
          <span>
            {post?.posts?.matters?.length + post?.posts?.resources?.length}件
          </span>
        </div>
      )}

      {(post?.likes?.matters?.[0] || post?.likes?.resources?.[0]) && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faHeart as IconProp}
            className={styles.item_icon_like}
          />
          <span>
            {post?.likes?.matters?.length + post?.likes?.resources?.length}件
          </span>
        </div>
      )}

      {(post?.outputs?.matters?.[0] || post?.outputs?.resources?.[0]) && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faExternalLinkAlt as IconProp}
            className={styles.item_icon_output}
          />
          <span>
            {post?.outputs?.matters?.length + post?.outputs?.resources?.length}
            件
          </span>
        </div>
      )}

      {(post?.entries?.matters?.[0] || post?.entries?.resources?.[0]) && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faCheckCircle as IconProp}
            className={styles.item_icon_entry}
          />
          <span>
            {post?.entries?.matters?.length + post?.entries?.resources?.length}
            件
          </span>
        </div>
      )}
    </div>
  );
};
