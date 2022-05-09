import styles from "./Form.module.scss";

import { Header } from "./components/header/Header";
import { Companys } from "./components/companys/Companys";
import { Persons } from "./components/persons/Persons";
import { Index } from "features/root/initialState";
import { Company, Person } from "types/post";
import { Oval } from "react-loader-spinner";

interface PropType {
  index: Index;
  user: Company | Person;
  icon: boolean;
  cover: boolean;
  setIcon: React.Dispatch<React.SetStateAction<boolean>>;
  setCover: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Form: React.FC<PropType> = ({
  index,
  user,
  icon,
  cover,
  setIcon,
  setCover,
}) => {
  return "uid" in user ? (
    <div className={styles.form}>
      <Header icon={icon} cover={cover} setIcon={setIcon} setCover={setCover} />

      {index === "companys" ? (
        <Companys />
      ) : (
        index === "persons" && "state" in user && <Persons user={user} />
      )}
    </div>
  ) : (
    <div className={`${styles.form_fetch}`}>
      <Oval color="#49b757" height={56} width={56} />
    </div>
  );
};
