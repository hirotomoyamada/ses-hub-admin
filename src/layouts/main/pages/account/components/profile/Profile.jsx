import styles from "./Profile.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export const Profile = ({ user }) => {
  return user?.uid ? (
    <div
      className={`
        ${styles.profile} 
        ${user?.type === "parent" && styles.profile_parent} 
        ${
          (user?.type === "child" || user?.payment?.price) &&
          styles.profile_error
        }
      `}
    >
      {(user?.type === "child" || user?.payment?.price) && (
        <div className={styles.profile_wrap}>
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className={`${styles.profile_icon} ${
              (user?.type === "child" || user?.payment?.price) &&
              styles.profile_icon_error
            }`}
          />
          <span
            className={
              (user?.type === "child" || user?.payment?.price) &&
              styles.profile_error_desc
            }
          >
            {user?.type !== "child"
              ? "このアカウントは、現在プランを契約中のためプランやオプションの編集できません。"
              : "このアカウントは、子アカウントのため編集できません"}
          </span>
        </div>
      )}

      {user?.type === "parent" && !user?.payment?.price && (
        <div className={styles.profile_wrap}>
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className={`${styles.profile_icon}`}
          />

          <span>このアカウントは、法人アカウントです</span>

          {user?.payment?.children?.length && (
            <span>
              ※&nbsp;このアカウントを含め &nbsp;
              <span className={styles.profile_parent_account}>
                {!user?.payment?.children
                  ? 1
                  : user?.payment?.children?.length + 1}
              </span>
              &nbsp;アカウントを保有しています
            </span>
          )}
        </div>
      )}

      {user?.type === "parent" && !user?.payment?.price && (
        <div className={styles.profile_wrap}>
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className={`${styles.profile_icon} ${styles.profile_icon_error}`}
          />
          <span className={styles.profile_error_desc}>
            {user?.payment?.children?.length
              ? "このアカウントを編集すると、保有するグループアカウントも反映されます"
              : "このアカウントは、グループアカウントを保有していません"}
          </span>
        </div>
      )}

      <div className={styles.profile_container}>
        <div className={styles.profile_wrap}>
          <FontAwesomeIcon
            icon={faUser}
            className={`${styles.profile_icon} ${
              (user?.type === "child" || user?.payment?.price) &&
              styles.profile_icon_error
            }`}
          />
          <span
            className={
              (user?.type === "child" || user?.payment?.price) &&
              styles.profile_error_desc
            }
          >
            {user?.name}&nbsp;{user?.person}
          </span>
        </div>

        <div className={styles.profile_wrap}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`${styles.profile_icon} ${
              (user?.type === "child" || user?.payment?.price) &&
              styles.profile_icon_error
            }`}
          />
          <span
            className={
              (user?.type === "child" || user?.payment?.price) &&
              styles.profile_error_desc
            }
          >
            {user?.email}
          </span>
        </div>

        {user?.tel && (
          <div className={styles.profile_wrap}>
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className={`${styles.profile_icon} ${
                (user?.type === "child" || user?.payment?.price) &&
                styles.profile_icon_error
              }`}
            />
            <span
              className={
                (user?.type === "child" || user?.payment?.price) &&
                styles.profile_error_desc
              }
            >
              {user?.tel}
            </span>
          </div>
        )}
      </div>
    </div>
  ) : user?.error ? (
    <div className={`${styles.profile} ${styles.profile_notFound}`}>
      <div className={styles.profile_wrap}>
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className={`${styles.profile_icon} ${styles.profile_icon_error}`}
        />
        <span className={styles.profile_error_desc}>
          ユーザーが存在しません&nbsp;※&nbsp;UIDを確認し、再度検索をしてください
        </span>
      </div>
    </div>
  ) : (
    <></>
  );
};
