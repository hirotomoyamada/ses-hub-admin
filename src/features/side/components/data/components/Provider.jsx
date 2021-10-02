import styles from "../Data.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Provider = ({ user }) => {
  return (
    <div className={styles.data_col}>
      <div className={`${styles.data_item} ${styles.data_item_col}`}>
        <span className={styles.data_item_tag}>プロバイダー</span>
        {user?.provider?.map((provider) => (
          <div className={styles.data_item} key={provider}>
            <FontAwesomeIcon
              icon={
                provider === "password"
                  ? faEnvelope
                  : provider === "google.com"
                  ? faGoogle
                  : provider === "github.com"
                  ? faGithub
                  : provider === "twitter.com" && faTwitter
              }
              className={`${styles.data_icon} ${
                provider === "password"
                  ? styles.data_icon_mail
                  : provider === "google.com"
                  ? styles.data_icon_google
                  : provider === "github.com"
                  ? styles.data_icon_github
                  : provider === "twitter.com" && styles.data_icon_twitter
              }`}
            />
            <span className={styles.data_item_text}>
              {provider === "password"
                ? "メール"
                : provider === "google.com"
                ? "Google"
                : provider === "github.com"
                ? "Github"
                : provider === "twitter.com" && "Twitter"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
