import styles from "../../../Menu.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Link = ({ text, icon }) => {
  return (
    <li>
      <a
        href={
          text === "Firebase"
            ? "https://console.firebase.google.com/u/1/project/ses-hub/overview"
            : text === "Algolia"
            ? "https://www.algolia.com/apps/86KURAOCRS/dashboard"
            : text === "Stripe"
            ? "https://dashboard.stripe.com/dashboard"
            : text === "SendGrid" && "https://app.sendgrid.com/"
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
