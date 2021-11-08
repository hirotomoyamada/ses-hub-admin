import styles from "./Btn.module.scss";

export const Btn = ({ index, handleIndex }) => {
  return (
    <div className={styles.btn}>
      <div className={styles.btn_wrap}>
        <button
          type="button"
          className={`${styles.btn_index} ${
            index === "companys" && styles.btn_index_sh
          }`}
          onClick={() => handleIndex("companys")}
        >
          SES_HUB
        </button>

        <button
          type="button"
          className={`${styles.btn_index} ${
            index === "persons" && styles.btn_index_fd
          }`}
          onClick={() => handleIndex("persons")}
        >
          Freelance Direct
        </button>
      </div>

      <button type="submit" className={styles.btn_submit}>
        送信
      </button>
    </div>
  );
};
