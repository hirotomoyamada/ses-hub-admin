import styles from "../Data.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Company, Person } from "types/post";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface PropType {
  user: Company | Person;
}

export const Provider: React.FC<PropType> = ({ user }) => {
  return (
    <div className={styles.data_col}>
      <div className={`${styles.data_item} ${styles.data_item_col}`}>
        <span className={styles.data_item_tag}>プロバイダー</span>
        {user?.provider?.map((provider) => (
          <div className={styles.data_item} key={provider}>
            <FontAwesomeIcon
              icon={
                (provider === "google.com"
                  ? faGoogle
                  : provider === "twitter.com"
                  ? faTwitter
                  : provider === "github.com"
                  ? faGithub
                  : faEnvelope) as IconProp
              }
              className={`${styles.data_icon} ${
                provider === "google.com"
                  ? styles.data_icon_google
                  : provider === "twitter.com"
                  ? styles.data_icon_twitter
                  : provider === "github.com"
                  ? styles.data_icon_github
                  : styles.data_icon_mail
              }`}
            />
            <span className={styles.data_item_text}>
              {provider === "google.com"
                ? "Google"
                : provider === "twitter.com"
                ? "Twitter"
                : provider === "github.com"
                ? "Github"
                : "メール"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
