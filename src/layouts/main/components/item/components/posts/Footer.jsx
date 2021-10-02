import styles from "./Post.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faYenSign } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

export const Footer = ({ post, index, mini }) => {
  return (
    <div className={styles.item_footer}>
      {index === "resources" && (
        <div className={styles.item_row}>
          <FontAwesomeIcon icon={faUser} className={styles.item_icon} />
          <span>
            {post?.sex}&nbsp;{post?.age}歳
          </span>
        </div>
      )}
      <div className={styles.item_row}>
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className={styles.item_icon}
        />
        {index === "matters" ? (
          <span>
            {post?.location?.area}&nbsp;{post?.location?.place}
          </span>
        ) : (
          index === "resources" && <span>{post?.station}</span>
        )}
      </div>
      <div className={styles.item_row}>
        <FontAwesomeIcon icon={faBuilding} className={styles.item_icon} />
        {index === "matters" ? (
          <span>
            {post?.remote === "あり"
              ? "フルリモート"
              : post?.remote === "なし"
              ? "常駐"
              : post?.remote}
          </span>
        ) : (
          index === "resources" && <span>{post?.belong}</span>
        )}
      </div>

      <div className={styles.item_row}>
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className={styles.item_icon}
        />
        <span>
          {post?.period?.year}年&nbsp;{post?.period?.month}月予定
        </span>
      </div>
      {index === "matters" && !mini && (
        <div className={styles.item_row}>
          <FontAwesomeIcon icon={faClock} className={styles.item_icon} />
          <span>
            {post?.times?.start}&nbsp;〜&nbsp;{post?.times?.end}
          </span>
        </div>
      )}
      <div className={styles.item_row}>
        <FontAwesomeIcon icon={faYenSign} className={styles.item_icon} />
        {post?.costs?.display !== "public" ? (
          <span>{post?.costs?.type}</span>
        ) : post?.costs?.min ? (
          <span>
            {post?.costs?.min}万&nbsp;〜&nbsp;{post?.costs?.max}万
          </span>
        ) : (
          <span>〜&nbsp;{post?.costs?.max}万</span>
        )}
        {post?.costs?.contract !== 0 && !mini && (
          <div
            className={`${styles.item_category} ${styles.item_category_contract}`}
          >
            <span>{post?.costs?.contract}万</span>
          </div>
        )}
      </div>
      {index === "matters" && !mini && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faExchangeAlt}
            className={styles.item_icon}
          />
          <span>{post?.adjustment}</span>
        </div>
      )}
    </div>
  );
};
