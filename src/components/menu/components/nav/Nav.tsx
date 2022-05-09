import styles from "../../Menu.module.scss";

import { Header } from "./components/Header";
import { Btn } from "./components/Btn";
import { Link } from "./components/Link";

import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faAlgolia } from "@fortawesome/free-brands-svg-icons";
import { faCcStripe } from "@fortawesome/free-brands-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const Nav: React.FC = () => {
  return (
    <nav className={styles.menu_nav}>
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
