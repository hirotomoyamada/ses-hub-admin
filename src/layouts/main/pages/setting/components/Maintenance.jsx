import styles from "../Setting.module.scss";
import { useFormContext } from "react-hook-form";

export const Maintenance = () => {
  const { register } = useFormContext();

  return (
    <div
      className={`${styles.setting_container} ${styles.setting_container_row}`}
    >
      <span className={styles.setting_ttl}>メンテナンス</span>
      <div className={styles.setting_toggle}>
        <input
          type="radio"
          id="onMaintenance"
          value="enable"
          {...register("maintenance.status")}
        />
        <label className={styles.setting_toggle_btn} htmlFor="onMaintenance">
          はい
        </label>

        <input
          type="radio"
          id="offMaintenance"
          value="disable"
          {...register("maintenance.status")}
        />
        <label className={styles.setting_toggle_btn} htmlFor="offMaintenance">
          いいえ
        </label>
      </div>
    </div>
  );
};
