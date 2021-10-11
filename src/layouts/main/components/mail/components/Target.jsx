import styles from "../Mail.module.scss";
import { useFormContext } from "react-hook-form";

export const Target = () => {
  const { register } = useFormContext();

  return (
    <div className={`${styles.mail_container} ${styles.mail_container_row}`}>
      <span className={styles.mail_ttl}>送信先</span>
      <div className={styles.mail_toggle}>
        <input type="radio" id="all" value="all" {...register("target")} />
        <label className={styles.mail_toggle_btn} htmlFor="all">
          すべて
        </label>

        <input
          type="radio"
          id="active"
          value="active"
          {...register("target")}
        />
        <label className={styles.mail_toggle_btn} htmlFor="active">
          レギュラー
        </label>

        <input
          type="radio"
          id="trialing"
          value="trialing"
          {...register("target")}
        />
        <label className={styles.mail_toggle_btn} htmlFor="trialing">
          フリートライアル
        </label>

        <input
          type="radio"
          id="canceled"
          value="canceled"
          {...register("target")}
        />
        <label className={styles.mail_toggle_btn} htmlFor="canceled">
          リミテッド
        </label>
      </div>
    </div>
  );
};
