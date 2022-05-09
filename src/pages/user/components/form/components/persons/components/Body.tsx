import styles from "../../../Form.module.scss";
import { useFormContext } from "react-hook-form";
import { Data } from "functions/_person";

export const Body: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>プロフィール</span>
      <div>
        <textarea
          className={`${styles.form_textarea} ${
            errors.body && styles.form_textarea_error
          }`}
          {...register("body", {
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            maxLength: {
              value: 360,
              message: "360文字以内で入力してください",
            },
          })}
        ></textarea>

        {errors.body?.message && (
          <span className={styles.form_error}>{errors.body?.message}</span>
        )}
      </div>
    </div>
  );
};
