import styles from "../../../Menu.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useDispatch, useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";
import * as userSlice from "features/user/userSlice";

interface PropType {
  index:
    | "matters"
    | "resources"
    | "companys"
    | "persons"
    | "setting"
    | "mail"
    | "account";
  icon?: IconProp;
  text: string;
}

export const Btn: React.FC<PropType> = ({ index, icon, text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSlice.user);
  const rootIndex = useSelector(rootSlice.index);
  const posts = useSelector(rootSlice.posts);
  const pathname = useLocation().pathname.slice(1);
  const page = pathname.substring(
    0,
    pathname.indexOf("/") >= 0 ? pathname.indexOf("/") : undefined
  );

  return (
    <li>
      <button
        type="button"
        onClick={() => {
          navigate(`/${index}`);

          if (index !== "setting" && index !== "account" && index !== "mail")
            if (index !== rootIndex) dispatch(rootSlice.handleIndex(index));

          if ("uid" in user) dispatch(userSlice.resetUser());
        }}
        className={`
          ${styles.menu_nav_btn} 
          ${page === index && styles.menu_nav_btn_active}
        `}
      >
        <FontAwesomeIcon
          icon={
            icon || ((page === index ? faFolderOpen : faFolder) as IconProp)
          }
          className={styles.menu_nav_icon}
        />
        <span>{text}</span>

        {(index === "matters" || index === "resources") && (
          <span>(&nbsp;{posts?.[index].total}件&nbsp;)</span>
        )}

        {(index === "companys" || index === "persons") && (
          <span>(&nbsp;{posts?.[index].total}人&nbsp;)</span>
        )}
      </button>
    </li>
  );
};
