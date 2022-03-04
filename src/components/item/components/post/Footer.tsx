import styles from "./Post.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faYenSign } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { Matter, Resource } from "types/post";

interface PropType {
  index: "matters" | "resources";
  post: Matter | Resource;
  min?: boolean;
}

export const Footer: React.FC<PropType> = ({ post, index, min }) => {
  return (
    <div className={styles.item_footer}>
      {index === "resources" && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faUser as IconProp}
            className={styles.item_icon}
          />
          <span>
            {(post as Resource)?.sex}&nbsp;{(post as Resource)?.age}歳
          </span>
        </div>
      )}

      <div className={styles.item_row}>
        <FontAwesomeIcon
          icon={faMapMarkerAlt as IconProp}
          className={styles.item_icon}
        />
        {index === "matters" ? (
          <span>
            {(post as Matter)?.location?.area}&nbsp;
            {(post as Matter)?.location?.place}
          </span>
        ) : (
          index === "resources" && <span>{(post as Resource)?.station}</span>
        )}
      </div>

      <div className={styles.item_row}>
        <FontAwesomeIcon
          icon={faBuilding as IconProp}
          className={styles.item_icon}
        />
        {index === "matters" ? (
          <span>
            {(post as Matter)?.remote === "あり"
              ? "リモート"
              : (post as Matter)?.remote === "なし"
              ? "常駐"
              : (post as Matter)?.remote}
          </span>
        ) : (
          index === "resources" && <span>{(post as Resource)?.belong}</span>
        )}
      </div>

      <div className={styles.item_row}>
        <FontAwesomeIcon
          icon={faCalendarAlt as IconProp}
          className={styles.item_icon}
        />
        <span>
          {post?.period?.year}年&nbsp;{post?.period?.month}月予定
        </span>
      </div>

      {index === "matters" && !min && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faClock as IconProp}
            className={styles.item_icon}
          />
          <span>
            {(post as Matter)?.times?.start}&nbsp;〜&nbsp;
            {(post as Matter)?.times?.end}
          </span>
        </div>
      )}

      <div className={styles.item_row}>
        <FontAwesomeIcon
          icon={faYenSign as IconProp}
          className={styles.item_icon}
        />
        {post?.costs?.display !== "public" ? (
          <span>{post?.costs?.type}</span>
        ) : post?.costs?.min ? (
          <span>
            {post?.costs?.min}万&nbsp;〜&nbsp;{post?.costs?.max}万
          </span>
        ) : (
          <span>〜&nbsp;{post?.costs?.max}万</span>
        )}
        
        {post?.costs?.contract && !min && (
          <div
            className={`${styles.item_category} ${styles.item_category_contract}`}
          >
            <span>{post?.costs?.contract}万</span>
          </div>
        )}
      </div>

      {index === "matters" && !min && (
        <div className={styles.item_row}>
          <FontAwesomeIcon
            icon={faExchangeAlt as IconProp}
            className={styles.item_icon}
          />
          <span>{(post as Matter)?.adjustment}</span>
        </div>
      )}
    </div>
  );
};
