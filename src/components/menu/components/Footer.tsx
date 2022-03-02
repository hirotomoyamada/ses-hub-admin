import styles from "../Menu.module.scss";

import { auth } from "libs/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";

import * as rootSlice from "features/root/rootSlice";

export const Footer: React.FC = () => {
  const dispatch = useDispatch();

  const logout = () => {
    void signOut(auth);
    dispatch(
      rootSlice.handleAnnounce({
        success: "ログアウトしました",
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
