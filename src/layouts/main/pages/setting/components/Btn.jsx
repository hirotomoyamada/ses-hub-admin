import styles from "../Setting.module.scss";

export const Btn = ({ handleIndex, index }) => {
  return (
    <div className={styles.setting_btn}>
      <div className={styles.setting_btn_wrap}>
        <button
          type="button"
          className={`${styles.setting_btn_index} ${
            index === "companys" && styles.setting_btn_index_sh
          }`}
          onClick={() => handleIndex("companys")}
        >
          SES_HUB
        </button>

        <button
          type="button"
          className={`${styles.setting_btn_index} ${
            index === "persons" && styles.setting_btn_index_fd
          }`}
          onClick={() => handleIndex("persons")}
        >
          Freelance Direct
        </button>
      </div>

      <button type="submit" className={styles.setting_btn_submit}>
        保存
      </button>
    </div>
  );
};
