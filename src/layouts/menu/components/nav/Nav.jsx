import styles from "../../Menu.module.scss";

import { Header } from "./components/Header";
import { Btn } from "./components/Btn";
import { Link } from "./components/Link";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faAlgolia } from "@fortawesome/free-brands-svg-icons";
import { faCcStripe } from "@fortawesome/free-brands-svg-icons";

export const Nav = ({ index }) => {
  return (
    <nav className={styles.menu_nav}>
      <div className={styles.menu_nav_wrap}>
        <Header index={index} type="users" text="ユーザー" />
        <Btn index={index} i="companys" text="メンバー" />
        <Btn index={index} i="persons" text="エンジニア" />
      </div>
      <div className={styles.menu_nav_wrap}>
        <Header index={index} type="posts" text="投稿" />
        <Btn index={index} i="matters" text="案件" />
        <Btn index={index} i="resources" text="人材" />
      </div>
      <div className={styles.menu_nav_wrap}>
        <Header index={index} type="server" text="サーバー" />
        <Link icon={faDatabase} text="Firebase" />
        <Link icon={faAlgolia} text="Algolia" />
        <Link icon={faCcStripe} text="Stripe" />
        <Link icon={faAt} text="SendGrid" />
      </div>
      <div className={styles.menu_nav_wrap}>
        <Header index={index} text="設定" />
        <Btn index={index} i="setting" type="setting" text="全般" />
        <Btn index={index} i="mail" type="mail" text="メール" />
        <Btn index={index} i="account" type="account" text="アカウント" />
      </div>
    </nav>
  );
};
