import styles from "./Form.module.scss";

import { Header } from "./components/header/Header";
import { Companys } from "./components/companys/Companys";
import { Persons } from "./components/persons/Persons";
import { Edit } from "features/root/initialState";
import { Company, Person } from "types/posts";

interface PropType {
  index: Edit;
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
  return (
    <div className={styles.form}>
      <Header icon={icon} cover={cover} setIcon={setIcon} setCover={setCover} />

      {index === "companys" ? (
        <Companys />
      ) : (
        index === "persons" && "state" in user && <Persons user={user} />
      )}
    </div>
  );
};
