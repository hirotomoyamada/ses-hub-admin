import styles from "./Item.module.scss";
import root from "../Post.module.scss";

import { useFormContext } from "react-hook-form";
import { Data } from "pages/post/Post";

export const Note: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={root.post_col}>
      <span className={root.post_tag}>備考</span>
      <div className={styles.item}>
        <textarea
          className={`${styles.item_textarea} ${
            errors.note && styles.item_textarea_error
          }`}
          {...register("note", {
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            maxLength: {
              value: 600,
              message: "600文字以内で入力してください",
            },
          })}
        ></textarea>

        {errors?.note?.message && (
          <span className={styles.item_error}>{errors.note.message}</span>
        )}
      </div>
    </div>
  );
};
