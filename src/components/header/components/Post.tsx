import styles from "../Header.module.scss";

interface PropType {
  search: {
    value: string | null;
    target: string | null;
    type: string | null;
    filter: string | null;
  };
  handleAttribuleChange: (f: string) => void;
}

export const Post: React.FC<PropType> = ({ search, handleAttribuleChange }) => {
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
          search.filter === "display:public" && styles.header_status_btn_public
        }`}
        onClick={() => handleAttribuleChange("display:public")}
      >
        公開
      </button>

      <button
        type="button"
        className={`${styles.header_status_btn} ${
          search.filter === "display:private" &&
          styles.header_status_btn_private
        }`}
        onClick={() => handleAttribuleChange("display:private")}
      >
        非公開
      </button>
    </div>
  );
};
