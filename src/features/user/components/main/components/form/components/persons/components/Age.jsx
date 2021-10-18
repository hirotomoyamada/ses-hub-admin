import styles from "../../../Form.module.scss";
import { useFormContext } from "react-hook-form";

export const Age = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const min = 18;
  const max = 65;
  const length = max - min;
  const Option = () => {
    const option = [];
    for (let i = 0; i <= length; i++) {
      option.push(
        <option key={i} value={min + i}>
          {min + i}歳
        </option>
      );
    }
    return (
      <select
        className={`${styles.form_input}  ${
          errors.location && styles.form_input_error
        }`}
        {...register("age", {
          required: {
            value: true,
            message: "性別を選択してください",
          },
        })}
      >
        {option}
      </select>
    );
  };

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>年齢</span>
      <div className={styles.form_select}>
        <Option />
        {errors.age?.message && (
          <span className={styles.form_error}>{errors.age?.message}</span>
        )}
      </div>
    </div>
  );
};
