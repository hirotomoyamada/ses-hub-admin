import styles from "../../../Menu.module.scss";
import { useDispatch } from "react-redux";
import * as rootSlice from "../../../../../features/root/rootSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Edit, Page } from "features/root/initialState";

interface PropType {
  index: {
    page: Page;
    edit: Edit;
  };
  i:
    | "matters"
    | "resources"
    | "companys"
    | "persons"
    | "setting"
    | "mail"
    | "account";
  text: string;
  type?: "posts" | "users" | "server" | "setting" | "mail" | "account";
}

export const Btn: React.FC<PropType> = ({ index, i, text, type }) => {
  const dispatch = useDispatch();

  const handleIndex = () => {
    dispatch(rootSlice.handleModal(false));
    dispatch(
      rootSlice.handleIndex(
        type === "setting" ||
          type === "mail" ||
          type === "account" ||
          !index.edit
          ? { page: i, edit: "companys" }
          : { page: i }
      )
    );

    window.scrollTo(0, 0);
  };

  return (
    <li>
      <button
        type="button"
        onClick={handleIndex}
        className={`${styles.menu_nav_btn} ${
          index.page === i && styles.menu_nav_btn_active
        }`}
      >
        {type !== "setting" && type !== "mail" && type !== "account" ? (
          <FontAwesomeIcon
            icon={(index.page === i ? faFolderOpen : faFolder) as IconProp}
            className={styles.menu_nav_icon}
          />
        ) : (
          <FontAwesomeIcon
            icon={
              type === "mail"
                ? (faPaperPlane as IconProp)
                : type === "account"
                ? (faUser as IconProp)
                : (faSlidersH as IconProp)
            }
            className={styles.menu_nav_icon}
          />
        )}
        {text}
      </button>
    </li>
  );
};
