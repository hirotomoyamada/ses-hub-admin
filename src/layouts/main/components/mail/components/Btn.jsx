import styles from "../Mail.module.scss";

export const Btn = ({ index, handleIndex }) => {
  return (
    <div className={styles.mail_btn}>
      <div className={styles.mail_btn_wrap}>
        <button
          type="button"
          className={`${styles.mail_btn_index} ${
            index === "companys" && styles.mail_btn_index_sh
          }`}
          onClick={() => handleIndex("companys")}
        >
          SES_HUB
        </button>

        <button
          type="button"
          className={`${styles.mail_btn_index} ${
            index === "persons" && styles.mail_btn_index_fd
          }`}
          onClick={() => handleIndex("persons")}
        >
          Freelance Direct
        </button>
      </div>

      <button type="submit" className={styles.mail_btn_submit}>
        送信
      </button>
    </div>
  );
};
