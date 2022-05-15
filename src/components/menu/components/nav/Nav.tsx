import styles from "../../Menu.module.scss";

import { Header } from "./components/Header";
import { Btn } from "./components/Btn";
import { Link } from "./components/Link";

import {
  faServer,
  faCog,
  faDatabase,
  faAt,
  faHome,
  faUser,
  faPaperPlane,
  faSlidersH,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faAlgolia, faCcStripe } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const Nav: React.FC = () => {
  return (
    <nav className={styles.menu_nav}>
      <div className={styles.menu_nav_wrap}>
        <Header index="" icon={faHome as IconProp} text="ダッシュボード" />
      </div>

      <div className={styles.menu_nav_wrap}>
        <Header index={["companys", "persons"]} text="ユーザー" />
        <Btn index="companys" text="メンバー" />
        <Btn index="persons" text="エンジニア" />
      </div>

      <div className={styles.menu_nav_wrap}>
        <Header index={["matters", "persons"]} text="投稿" />
        <Btn index="matters" text="案件" />
        <Btn index="resources" text="人材" />
      </div>

      <div className={styles.menu_nav_wrap}>
        <Header icon={faServer as IconProp} text="サーバー" />
        <Link icon={faDatabase as IconProp} text="Firebase" />
        <Link icon={faAlgolia as IconProp} text="Algolia" />
        <Link icon={faCcStripe as IconProp} text="Stripe" />
        <Link icon={faAt as IconProp} text="SendGrid" />
        <Link icon={faLink as IconProp} text="Bitly" />
      </div>

      <div className={styles.menu_nav_wrap}>
        <Header icon={faCog as IconProp} text="設定" />
        <Btn index="setting" icon={faSlidersH as IconProp} text="全般" />
        <Btn index="mail" icon={faPaperPlane as IconProp} text="メール" />
        <Btn index="account" icon={faUser as IconProp} text="アカウント" />
      </div>
    </nav>
  );
};
