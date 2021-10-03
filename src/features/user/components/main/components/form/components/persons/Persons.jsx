import styles from "../../Form.module.scss";

import { Name } from "./components/Name";

export const Persons = () => {
  return (
    <div className={styles.form_container}>
      <Name />
    </div>
  );
};
