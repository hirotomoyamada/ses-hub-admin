import styles from "../../../SideMenu.module.scss";
import { useDispatch } from "react-redux";
import * as postSlice from "../../../../../features/post/postSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export const Btn = ({ index, i, text, type }) => {
  const dispatch = useDispatch();

  const handleIndex = () => {
    dispatch(postSlice.handleModal(false));
    dispatch(
      postSlice.selectIndex(
        type !== "setting" || index.edit
          ? { page: i }
          : { page: i, edit: "companys" }
      )
    );
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
        {type !== "setting" ? (
          <FontAwesomeIcon
            icon={index.page === i ? faFolderOpen : faFolder}
            className={styles.menu_nav_icon}
          />
        ) : (
          <FontAwesomeIcon icon={faCog} className={styles.menu_nav_icon} />
        )}
        {text}
      </button>
    </li>
  );
};
