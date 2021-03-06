import styles from "./Header.module.scss";
import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

interface PropType {
  handleClose: () => void;
  handleDelete: () => void;
}

export const Header: React.FC<PropType> = ({ handleClose, handleDelete }) => {
  const dispatch = useDispatch();
  const { register } = useFormContext();

  return (
    <div className={styles.header}>
      <button
        type="button"
        className={styles.header_cancel}
        onClick={handleClose}
      >
        もどる
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
          onClick={() =>
            dispatch(
              rootSlice.handleModal({
                type: "delete",
                text: "投稿",
                delete: () => handleDelete(),
              })
            )
          }
        >
          削除
        </button>

        <button className={styles.header_submit} type="submit" form="post">
          編集
        </button>
      </div>
    </div>
  );
};
