import styles from "../Header.module.scss";

export const User = ({ search, handleAttribuleChange }) => {
  return (
    <div className={styles.header_status}>
      <button
        type="button"
        className={`${styles.header_status_btn} ${
          search.filter === "all" && styles.header_status_btn_all
        }`}
        onClick={() => handleAttribuleChange("all")}
      >
        すべて
      </button>

      <button
        type="button"
        className={`${styles.header_status_btn} ${
          search.filter === "status:hold" && styles.header_status_btn_hold
        }`}
        onClick={() => handleAttribuleChange("status:hold")}
      >
        未認証
      </button>

      <button
        type="button"
        className={`${styles.header_status_btn} ${
          search.filter === "status:disable" && styles.header_status_btn_disable
        }`}
        onClick={() => handleAttribuleChange("status:disable")}
      >
        停止
      </button>
    </div>
  );
};
