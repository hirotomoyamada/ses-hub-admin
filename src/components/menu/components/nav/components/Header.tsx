import styles from "../../../Menu.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Edit, Page } from "features/root/initialState";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface PropType {
  index: {
    page: Page;
    edit: Edit;
  };
  text: string;
  type?: "posts" | "users" | "server" | "setting" | "mail" | "account";
}

export const Header: React.FC<PropType> = ({ index, type, text }) => {
  return type === "users" || type === "posts" ? (
    <div className={styles.menu_nav_head}>
      <FontAwesomeIcon
        icon={
          (type === "users"
            ? index.page === "companys" || index.page === "persons"
              ? faFolderOpen
              : faFolder
            : type === "posts" &&
              (index.page === "matters" || index.page === "resources")
            ? faFolderOpen
            : faFolder) as IconProp
        }
        className={styles.menu_nav_icon}
      />
      {text}
    </div>
  ) : type === "server" ? (
    <div className={styles.menu_nav_head}>
      <FontAwesomeIcon icon={faServer as IconProp} />
      {text}
    </div>
  ) : (
    <div className={styles.menu_nav_head}>
      <FontAwesomeIcon icon={faCog as IconProp} />
      {text}
    </div>
  );
};
