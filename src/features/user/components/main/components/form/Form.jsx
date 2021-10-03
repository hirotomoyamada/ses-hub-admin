import styles from "./Form.module.scss";

import { Header } from "./components/header/Header";
import { Companys } from "./components/companys/Companys";
import { Persons } from "./components/persons/Persons";

export const Form = ({ index, icon, cover, setIcon, setCover }) => {
  return (
    <div className={styles.form}>
      <Header icon={icon} cover={cover} setIcon={setIcon} setCover={setCover} />

      {index === "companys" ? <Companys /> : index === "persons" && <Persons />}
    </div>
  );
};
