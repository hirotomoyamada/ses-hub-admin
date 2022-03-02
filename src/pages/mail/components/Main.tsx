import styles from "../Mail.module.scss";
import { useFormContext } from "react-hook-form";
import { Data } from "types/auth";

export const Main: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data["mail"]>();

  return (
    <div className={styles.mail_container}>
      <span className={styles.mail_ttl}>内容</span>

      <div className={styles.mail_item}>
        <input
          className={`${styles.mail_item_input} ${
            errors.title && styles.mail_item_input_error
          }`}
          {...register("title", {
            required: {
              value: true,
              message: "項目を入力してください",
            },
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            maxLength: {
              value: 72,
              message: "72文字以内で入力してください",
            },
          })}
        />
        <span className={styles.mail_item_error}>{errors.title?.message}</span>
      </div>

      <div className={styles.mail_item}>
        <textarea
          className={`${styles.mail_item_textarea} ${
            errors.body && styles.mail_item_textarea_error
          }`}
          {...register("body", {
            required: {
              value: true,
              message: "項目を入力してください",
            },
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            maxLength: {
              value: 1000,
              message: "1000文字以内で入力してください",
            },
          })}
        ></textarea>
        <span className={styles.mail_item_error}>{errors.body?.message}</span>
      </div>
    </div>
  );
};
