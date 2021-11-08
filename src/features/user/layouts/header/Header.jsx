import styles from "./Header.module.scss";
import { useFormContext } from "react-hook-form";

export const Header = ({ handleClose, handleBack, icon, cover, user }) => {
  const { register } = useFormContext();

  return (
    <div className={styles.header}>
      <button
        type="button"
        className={styles.header_cancel}
        onClick={!cover && !icon ? handleClose : handleBack}
      >
        {!cover && !icon ? "とじる" : "保存"}
      </button>

      {!cover && !icon && (
        <div className={styles.header_wrap}>
          <div
            className={`${styles.header_status} ${
              user.status === "hold" && styles.header_status_hold
            }`}
          >
            <input
              type="radio"
              id="status1"
              value="enable"
              {...register("status")}
            />
            <label
              className={`${styles.header_status_btn} ${styles.header_status_btn_enable}`}
              htmlFor="status1"
            >
              認証
            </label>

            {user.status === "hold" && (
              <>
                <input
                  type="radio"
                  id="status2"
                  value="hold"
                  {...register("status")}
                />
                <label
                  className={`${styles.header_status_btn} ${styles.header_status_btn_hold}`}
                  htmlFor="status2"
                >
                  未認証
                </label>
              </>
            )}
            
            <input
              type="radio"
              id="status3"
              value="disable"
              {...register("status")}
            />
            <label
              className={`${styles.header_status_btn} ${styles.header_status_btn_disable}`}
              htmlFor="status3"
            >
              停止
            </label>
          </div>

          <button className={styles.header_submit} type="submit">
            編集
          </button>
        </div>
      )}
    </div>
  );
};