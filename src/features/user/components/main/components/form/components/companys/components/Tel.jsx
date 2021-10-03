import styles from "../../../Form.module.scss";
import { useFormContext } from "react-hook-form";

export const Tel = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>電話番号</span>

      <div>
        <input
          className={`${styles.form_input} ${styles.form_input_min} ${
            errors.tel && styles.form_input_error
          }`}
          placeholder="01-2345-6789"
          {...register("tel", {
            pattern: {
              value: /^0\d{2,4}-\d{2,4}-\d{3,4}$/,
              message: "正しい電話番号を入力してください",
            },
            maxLength: {
              value: 13,
              message: "13文字以内で入力してください",
            },
          })}
        />
        {errors.tel?.message && (
          <span className={styles.form_error}>{errors.tel?.message}</span>
        )}
      </div>
    </div>
  );
};
