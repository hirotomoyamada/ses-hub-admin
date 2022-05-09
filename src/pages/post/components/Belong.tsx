import styles from "./Item.module.scss";
import root from "../Post.module.scss";

import { useFormContext } from "react-hook-form";
import { Data } from "functions/_resource";

export const Belong: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={`${root.post_col} ${root.post_col_mid}`}>
      <span className={root.post_tag}>所属</span>
      <div className={styles.item}>
        <input
          placeholder="Hit me up 株式会社"
          className={`${styles.item_input} ${
            errors.belong && styles.item_input_error
          }`}
          {...register("belong", {
            required: {
              value: true,
              message: "所属を入力してください",
            },
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            minLength: {
              value: 2,
              message: "2文字以上で入力してください",
            },
            maxLength: {
              value: 24,
              message: "24文字以内で入力してください",
            },
          })}
        />

        {errors?.belong?.message && (
          <span className={styles.item_error}>{errors.belong.message}</span>
        )}
      </div>
    </div>
  );
};
