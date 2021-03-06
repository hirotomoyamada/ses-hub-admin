import styles from "../../Form.module.scss";

import { State } from "./components/State";
import { NickName } from "./components/NickName";
import { Name } from "./components/Name";
import { Body } from "./components/Body";
import { Position } from "./components/Position";
import { Period } from "./components/Period";
import { Age } from "./components/Age";
import { Sex } from "./components/Sex";
import { Location } from "./components/Location";
import { Handles } from "./components/Handles";
import { Tools } from "./components/Tools";
import { Skills } from "./components/Skills";
import { Urls } from "./components/Urls";
import { Resident } from "./components/Resident";
import { Working } from "./components/Working";
import { Clothes } from "./components/Clothes";
import { Costs } from "./components/Costs";
import { Person } from "types/post";

interface PropType {
  user: Person;
}

export const Persons: React.FC<PropType> = ({ user }) => {
  return (
    <div className={styles.form_container}>
      <State />
      <NickName />
      <Name />
      <Body />

      <div className={styles.form_grid}>
        <Position />
        <Period user={user} />
      </div>

      <div className={`${styles.form_grid} ${styles.form_grid_triangle}`}>
        <Age />
        <Sex />
        <Location />
      </div>

      <Handles />
      <Tools />
      <Skills />
      <Urls />

      <div className={styles.form_wrap}>
        <p className={styles.form_strike}>
          <span>勤務</span>
        </p>
        <div className={`${styles.form_grid} ${styles.form_grid_triangle}`}>
          <Resident user={user} />
          <Working user={user} />
          <Clothes user={user} />
        </div>

        <Costs />
      </div>
    </div>
  );
};
