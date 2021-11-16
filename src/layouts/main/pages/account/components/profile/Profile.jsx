import styles from "./Profile.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export const Profile = ({ user }) => {
  return user ? (
    <div
      className={`${styles.profile} ${
        user?.payment?.price && styles.profile_error
      }`}
    >
      {user?.payment?.price && (
        <div className={styles.profile_wrap}>
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className={`${styles.profile_icon} ${
              user?.payment?.price && styles.profile_icon_error
            }`}
          />
          <span className={user?.payment?.price && styles.profile_error_desc}>
            このアカウントは、現在プランを契約中のため、プランの編集できません。
          </span>
        </div>
      )}

      <div className={styles.profile_container}>
        <div className={styles.profile_wrap}>
          <FontAwesomeIcon
            icon={faUser}
            className={`${styles.profile_icon} ${
              user?.payment?.price && styles.profile_icon_error
            }`}
          />
          <span className={user?.payment?.price && styles.profile_error_desc}>
            {user?.name}&nbsp;{user?.person}
          </span>
        </div>
        <div className={styles.profile_wrap}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`${styles.profile_icon} ${
              user?.payment?.price && styles.profile_icon_error
            }`}
          />
          <span className={user?.payment?.price && styles.profile_error_desc}>
            {user?.email}
          </span>
        </div>
        <div className={styles.profile_wrap}>
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className={`${styles.profile_icon} ${
              user?.payment?.price && styles.profile_icon_error
            }`}
          />
          <span className={user?.payment?.price && styles.profile_error_desc}>
            {user?.tel}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
