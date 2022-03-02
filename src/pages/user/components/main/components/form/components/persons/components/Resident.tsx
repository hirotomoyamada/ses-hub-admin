import styles from "../../../Form.module.scss";
import { useFormContext } from "react-hook-form";

import { Person } from "types/posts";
import { Data } from "functions/_person";

interface PropType {
  user: Person;
}

export const Resident: React.FC<PropType> = ({ user }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>形態</span>
      <div className={styles.form_select}>
        <select
          className={`${styles.form_input} ${
            errors.resident && styles.form_input_error
          } ${!user?.resident && styles.form_input_disable}`}
          {...register("resident")}
        >
          <option value={"常駐可"}>常駐可</option>
          <option value={"リモート希望"}>リモート希望</option>
          <option value={"どちらでも"}>どちらでも</option>
        </select>

        {errors.resident?.message && (
          <span className={styles.form_error}>{errors.resident?.message}</span>
        )}
      </div>
    </div>
  );
};
