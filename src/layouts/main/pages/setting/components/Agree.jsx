import styles from "../Setting.module.scss";
import { useFormContext } from "react-hook-form";

export const Agree = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.setting_container}>
      <span className={styles.setting_ttl}>
        利用規約・特定商取引法に基づく表示
      </span>

      <div className={styles.setting_item}>
        <input
          className={`${styles.setting_item_input} ${
            errors.agree?.title && styles.setting_item_input_error
          }`}
          {...register("agree.title", {
            required: {
              value: true,
              message: "項目を入力してください",
            },
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            maxLength: {
              value: 40,
              message: "40文字以内で入力してください",
            },
          })}
        />
        <span className={styles.setting_item_error}>
          {errors.agree?.title?.message}
        </span>
      </div>

      <div className={styles.setting_item}>
        <textarea
          className={`${styles.setting_item_textarea} ${
            errors.agree?.body && styles.setting_item_textarea_error
          }`}
          {...register("agree.body", {
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
        <span className={styles.setting_item_error}>
          {errors.agree?.body?.message}
        </span>
      </div>

      <div className={`${styles.setting_item} ${styles.setting_item_row}`}>
        <span className={styles.setting_item_tag}>
          すべてのユーザーの同意を解除しますか？
        </span>
        <div className={styles.setting_toggle}>
          <input
            type="radio"
            id="enable"
            value="enable"
            {...register("agree.status")}
          />
          <label className={styles.setting_toggle_btn} htmlFor="enable">
            はい
          </label>

          <input
            type="radio"
            id="disable"
            value="disable"
            {...register("agree.status")}
          />
          <label className={styles.setting_toggle_btn} htmlFor="disable">
            いいえ
          </label>
        </div>
      </div>
    </div>
  );
};
