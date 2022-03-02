import { Edit } from "features/root/initialState";
import styles from "./Btn.module.scss";

interface PropType {
  index: Edit;
  handleIndex: (i: Edit) => void;
  disable?: boolean;
  mail?: boolean;
}

export const Btn: React.FC<PropType> = ({
  index,
  handleIndex,
  disable,
  mail,
}) => {
  return (
    <div className={`${styles.btn}`}>
      <div className={styles.btn_wrap}>
        <button
          type="button"
          className={`${styles.btn_index} ${
            index === "companys" && styles.btn_index_sh
          } ${disable && styles.btn_index_disable}`}
          onClick={() => handleIndex("companys")}
        >
          SES_HUB
        </button>

        <button
          type="button"
          className={`${styles.btn_index} ${
            index === "persons" && styles.btn_index_fd
          } ${disable && styles.btn_index_disable}`}
          onClick={() => handleIndex("persons")}
        >
          Freelance Direct
        </button>
      </div>

      <button type="submit" className={styles.btn_submit}>
        {!mail ? "変更" : "送信"}
      </button>
    </div>
  );
};
