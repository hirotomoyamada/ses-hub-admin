import { Person } from "types/post";
import root from "../../../Data.module.scss";
import styles from "../Resume.module.scss";

interface PropType {
  user: Person;
  input: React.RefObject<HTMLInputElement>;
  success: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancel: () => void;
  error: string | null;
}

export const Upload: React.FC<PropType> = ({
  user,
  input,
  success,
  error,
  handleChange,
  handleCancel,
}) => {
  return !user?.resume?.url ? (
    <div className={`${root.data_item} ${root.data_item_col}`}>
      <div className={root.data_item}>
        <input
          ref={input}
          type="file"
          id="resume"
          onChange={(e) => handleChange(e)}
          className={styles.resume_input}
        />

        <button
          type="submit"
          className={`${styles.resume_btn} ${
            !success && styles.resume_btn_disable
          }`}
        >
          アップロード
        </button>

        <button
          type="button"
          className={`${styles.resume_btn} ${styles.resume_btn_cancel}`}
          onClick={handleCancel}
        >
          キャンセル
        </button>
      </div>

      {error && <span className={styles.resume_error}>{error}</span>}
    </div>
  ) : (
    <></>
  );
};
