import styles from "../Side.module.scss";
import { auth } from "../../../firebase";

export const Footer = () => {
  const logout = () => {
    auth.signOut();
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
