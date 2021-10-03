import styles from "../SideMenu.module.scss";

import { useDispatch } from "react-redux";
import * as postSlice from "../../../features/post/postSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faAlgolia } from "@fortawesome/free-brands-svg-icons";
import { faCcStripe } from "@fortawesome/free-brands-svg-icons";

export const Nav = ({ index }) => {
  const dispatch = useDispatch();

  const Head = ({ type, text }) => {
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

  const Btn = ({ i, text, type }) => {
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

  const Link = ({ text, icon }) => {
    return (
      <li>
        <a
          href={
            text === "firebase"
              ? "https://console.firebase.google.com/u/1/project/ses-hub/overview"
              : text === "algolia"
              ? "https://www.algolia.com/apps/86KURAOCRS/dashboard"
              : text === "stripe" && "https://dashboard.stripe.com/dashboard"
          }
          className={styles.menu_nav_btn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={icon} />
          {text}
        </a>
      </li>
    );
  };

  return (
    <nav className={styles.menu_nav}>
      <div className={styles.menu_nav_wrap}>
        <Head type="users" text="ユーザー" />
        <Btn i="companys" text="メンバー" />
        <Btn i="persons" text="エンジニア" />
      </div>
      <div className={styles.menu_nav_wrap}>
        <Head type="posts" text="投稿" />
        <Btn i="matters" text="案件" />
        <Btn i="resources" text="人材" />
      </div>
      <div className={styles.menu_nav_wrap}>
        <Head type="server" text="サーバー" />
        <Link icon={faDatabase} text="firebase" />
        <Link icon={faAlgolia} text="algolia" />
        <Link icon={faCcStripe} text="stripe" />
      </div>
      <div className={styles.menu_nav_wrap}>
        <Head text="設定" />
        <Btn i="setting" type="setting" text="全般" />
      </div>
    </nav>
  );
};
