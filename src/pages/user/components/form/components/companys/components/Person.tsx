import styles from "../../../Form.module.scss";
import { useFormContext } from "react-hook-form";
import { Data } from "functions/_company";

export const Person: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>
        担当者名
        <span className={styles.form_tag_desc}>
          &nbsp;※&nbsp;必ず、フルネームで入力してください
        </span>
      </span>
      <div>
        <input
          className={`${styles.form_input} ${
            errors.person && styles.form_input_error
          }`}
          placeholder="山田太郎"
          {...register("person", {
            required: {
              value: true,
              message: "担当者名を入力してください",
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
        {errors?.person?.message && (
          <span className={styles.form_error}>{errors.person.message}</span>
        )}
      </div>
    </div>
  );
};
