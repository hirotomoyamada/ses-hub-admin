import styles from "./Form.module.scss";

import { Header } from "./components/header/Header";

import { Name } from "./components/Name";
import { Body } from "./components/Body";
import { Person } from "./components/Person";
import { Tel } from "./components/Tel";
import { Address } from "./components/Address";
import { More } from "./components/More";
import { Social } from "./components/Social";
import { Url } from "./components/Url";

export const Form = ({ index, icon, cover, setIcon, setCover }) => {
  return index === "companys" ? (
    <div className={styles.form}>
      <Header icon={icon} cover={cover} setIcon={setIcon} setCover={setCover} />

      <div className={styles.form_container}>
        <Name />
        <Person />
        <Body />
        <More />
        <Address />
        <Tel />
        <Url />
        <Social />
      </div>
    </div>
  ) : (
    index === "persons" && <div className={styles.form}></div>
  );
};
