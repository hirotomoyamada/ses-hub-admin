import styles from "../Menu.module.scss";

import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";

import * as rootSlice from "../../../features/root/rootSlice";

export const Footer = () => {
  const dispatch = useDispatch();

  const logout = () => {
    auth.signOut();
    dispatch(
      rootSlice.handleAnnounce({
        type: "success",
        text: "ログアウトしました",
      })
    );
  };
  return (
    <div className={styles.menu_footer}>
      <button
        type="button"
        onClick={logout}
        className={styles.menu_footer_logout}
      >
        ログアウト
      </button>
    </div>
  );
};
