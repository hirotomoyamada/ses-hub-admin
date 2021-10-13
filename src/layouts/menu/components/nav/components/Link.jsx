import styles from "../../../Menu.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Link = ({ text, icon }) => {
  return (
    <li>
      <a
        href={
          text === "firebase"
            ? "https://console.firebase.google.com/u/1/project/ses-hub/overview"
            : text === "algolia"
            ? "https://www.algolia.com/apps/86KURAOCRS/dashboard"
            : text === "stripe" && "https://dashboard.stripe.com/dashboard"
        }
        className={styles.menu_nav_btn}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icon} />
        {text}
      </a>
    </li>
  );
};
