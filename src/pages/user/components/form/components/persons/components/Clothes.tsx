import styles from "../../../Form.module.scss";
import { useFormContext } from "react-hook-form";
import { Data } from "functions/_person";
import { Person } from "types/post";

interface PropType {
  user: Person;
}

export const Clothes: React.FC<PropType> = ({ user }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>服装</span>
      <div className={styles.form_select}>
        <select
          className={`${styles.form_input} ${
            errors.clothes && styles.form_input_error
          } ${!user?.clothes && styles.form_input_disable}`}
          {...register("clothes")}
        >
          <option value={"カジュアル"}>カジュアル</option>
          <option value={"スーツ可"}>スーツ可</option>
          <option value={"スーツNG"}>スーツNG</option>
        </select>

        {errors.clothes?.message && (
          <span className={styles.form_error}>{errors.clothes?.message}</span>
        )}
      </div>
    </div>
  );
};
