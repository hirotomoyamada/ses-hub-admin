import styles from "../../../Menu.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface PropType {
  text: string;
  icon: IconProp;
}

export const Link: React.FC<PropType> = ({ text, icon }) => {
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
            : text === "Bitly"
            ? "https://app.bitly.com/Bm2sjXlKM6N/bitlinks/38jt56Y"
            : "https://app.sendgrid.com/"
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
