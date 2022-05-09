import styles from "../../../Form.module.scss";
import { useFormContext } from "react-hook-form";
import { Data } from "functions/_person";

export const Sex: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>性別</span>
      <div className={styles.form_select}>
        <select
          className={`${styles.form_input} ${
            errors.sex && styles.form_input_error
          }`}
          {...register("sex", {
            required: {
              value: true,
              message: "性別を選択してください",
            },
          })}
        >
          <option value={"男性"}>男性</option>
          <option value={"女性"}>女性</option>
          <option value={"その他"}>その他</option>
        </select>
        {errors.sex?.message && (
          <span className={styles.form_error}>{errors.sex?.message}</span>
        )}
      </div>
    </div>
  );
};
