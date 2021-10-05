import styles from "../../../SideMenu.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ index, type, text }) => {
  return type === "users" || type === "posts" ? (
    <div className={styles.menu_nav_head}>
      <FontAwesomeIcon
        icon={
          type === "users"
            ? index.page === "companys" || index.page === "persons"
              ? faFolderOpen
              : faFolder
            : type === "posts" &&
              (index.page === "matters" || index.page === "resources")
            ? faFolderOpen
            : faFolder
        }
        className={styles.menu_nav_icon}
      />
      {text}
    </div>
  ) : type === "server" ? (
    <div className={styles.menu_nav_head}>
      <FontAwesomeIcon icon={faServer} />
      {text}
    </div>
  ) : (
    <div className={styles.menu_nav_head}>
      <FontAwesomeIcon icon={faSlidersH} />
      {text}
    </div>
  );
};
