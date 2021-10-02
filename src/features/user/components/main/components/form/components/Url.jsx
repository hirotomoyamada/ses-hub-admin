import styles from "../Form.module.scss";
import { useFormContext } from "react-hook-form";

export const Url = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>URL</span>

      <div>
        <input
          className={`${styles.form_input} ${
            errors.url && styles.form_input_error
          }`}
          placeholder="https://"
          {...register("url", {
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            maxLength: {
              value: 144,
              message: "144文字以内で入力してください",
            },
          })}
        />
        {errors.url?.message && (
          <span className={styles.form_error}>{errors.url?.message}</span>
        )}
      </div>
    </div>
  );
};
