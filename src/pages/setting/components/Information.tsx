import styles from "../Setting.module.scss";
import { useFormContext } from "react-hook-form";
import { SettingData } from "../Setting";

export const Information: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SettingData>();

  return (
    <div className={styles.setting_container}>
      <span className={styles.setting_ttl}>お知らせ</span>

      <div className={styles.setting_item}>
        <input
          className={`${styles.setting_item_input} ${
            errors.information?.title && styles.setting_item_input_error
          }`}
          {...register("information.title", {
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

        {errors?.information?.title?.message && (
          <span className={styles.setting_item_error}>
            {errors.information.title.message}
          </span>
        )}
      </div>

      <div className={styles.setting_item}>
        <textarea
          className={`${styles.setting_item_textarea} ${
            errors.information?.body && styles.setting_item_textarea_error
          }`}
          {...register("information.body", {
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

        {errors?.information?.body?.message && (
          <span className={styles.setting_item_error}>
            {errors.information.body.message}
          </span>
        )}
      </div>
    </div>
  );
};
