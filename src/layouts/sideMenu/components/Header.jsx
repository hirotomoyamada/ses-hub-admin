import styles from "../SideMenu.module.scss";

export const Header = () => {
  return (
    <div className={styles.menu_header}>
      <img
        src={`${process.env.PUBLIC_URL}/img/logo/logo.svg`}
        alt=""
        className={styles.menu_header_logo}
      />
      <span>管理画面</span>
    </div>
  );
};
