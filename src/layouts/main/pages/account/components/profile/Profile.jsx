import styles from "./Profile.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const Profile = ({ user }) => {
  return user ? (
    <div className={styles.profile}>
      <div className={styles.profile_wrap}>
        <FontAwesomeIcon icon={faUser} className={styles.profile_icon} />
        <span>
          {user?.name}&nbsp;{user?.person}
        </span>
      </div>
      <div className={styles.profile_wrap}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.profile_icon} />
        <span>{user?.email}</span>
      </div>
      <div className={styles.profile_wrap}>
        <FontAwesomeIcon icon={faPhoneAlt} className={styles.profile_icon} />
        <span>{user?.tel}</span>
      </div>
    </div>
  ) : (
    <></>
  );
};
