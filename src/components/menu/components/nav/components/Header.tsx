import styles from "../../../Menu.module.scss";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface PropType {
  index?: string[];
  icon?: IconProp;
  text: string;
}

export const Header: React.FC<PropType> = ({ index, icon, text }) => {
  const pathname = useLocation().pathname.slice(1);
  const page = pathname.substring(
    0,
    pathname.indexOf("/") >= 0 ? pathname.indexOf("/") : undefined
  );

  return (
    <div className={styles.menu_nav_head}>
      <FontAwesomeIcon
        icon={
          icon || (index && index.indexOf(page) >= 0 ? faFolderOpen : faFolder)
        }
      />
      {text}
    </div>
  );
};
