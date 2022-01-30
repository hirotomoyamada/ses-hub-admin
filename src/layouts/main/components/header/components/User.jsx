import styles from "../Header.module.scss";

export const User = ({ index, search, notice, handleAttribuleChange }) => {
  return (
    <div
      className={`${styles.header_status} ${
        index === "companys" && styles.header_status_user
      }`}
    >
      <button
        type="button"
        className={`${styles.header_status_btn} ${
          search.filter === "all" && styles.header_status_btn_all
        }`}
        onClick={() => handleAttribuleChange("all")}
      >
        すべて
      </button>

      {index === "companys" && (
        <button
          type="button"
          className={`${styles.header_status_btn} ${
            index === "companys" &&
            notice.seshub.application &&
            styles.header_status_btn_notice
          } ${
            search.filter === "application" &&
            styles.header_status_btn_application
          }`}
          onClick={() => handleAttribuleChange("application")}
        >
          申請
        </button>
      )}

      <button
        type="button"
        className={`${styles.header_status_btn} ${
          ((index === "companys" && notice.seshub.hold) ||
            (index === "persons" && notice.freelanceDirect.hold)) &&
          styles.header_status_btn_notice
        } ${search.filter === "status:hold" && styles.header_status_btn_hold}`}
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
