import styles from "./Header.module.scss";
import { useFormContext } from "react-hook-form";

export const Header = ({ handleClose, handleDelete }) => {
  const { register } = useFormContext();

  return (
    <div className={styles.header}>
      <button
        type="button"
        className={styles.header_cancel}
        onClick={handleClose}
      >
        とじる
      </button>

      <div className={styles.header_wrap}>
        <div className={styles.header_display}>
          <input
            type="radio"
            id="display1"
            value="public"
            {...register("display")}
          />
          <label className={styles.header_display_btn} htmlFor="display1">
            公開
          </label>
          <input
            type="radio"
            id="display2"
            value="private"
            {...register("display")}
          />
          <label className={styles.header_display_btn} htmlFor="display2">
            非公開
          </label>
        </div>

        <button
          type="button"
          className={styles.header_delete}
          onClick={handleDelete}
        >
          削除
        </button>
        <button className={styles.header_submit} type="submit">
          編集
        </button>
      </div>
    </div>
  );
};
