import styles from "../../../Form.module.scss";
import { useFormContext } from "react-hook-form";

export const Name = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>
        名前
        <span className={styles.form_tag_desc}>
          &nbsp;※&nbsp;必ず、フルネームで入力してください
        </span>
      </span>
      <div>
        <input
          className={`${styles.form_input} ${
            errors.name && styles.form_input_error
          }`}
          placeholder="山田太郎"
          {...register("name", {
            required: {
              value: true,
              message: "名前を入力してください",
            },
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            minLength: {
              value: 2,
              message: "2文字以上で入力してください",
            },
            maxLength: {
              value: 24,
              message: "24文字以内で入力してください",
            },
          })}
        />
        {errors.name?.message && (
          <span className={styles.form_error}>{errors.name?.message}</span>
        )}
      </div>
    </div>
  );
};
