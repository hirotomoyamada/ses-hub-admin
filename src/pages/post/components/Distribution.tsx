import styles from "./Item.module.scss";
import root from "../Post.module.scss";

import { useFormContext } from "react-hook-form";
import { Data } from "functions/_matter";

export const Distribution: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={`${root.post_col} ${root.post_col_min}`}>
      <span className={root.post_tag}>商流</span>
      <div className={`${styles.item} ${styles.item_select}`}>
        <select
          className={`${styles.item_input} ${
            errors.distribution && styles.item_input_error
          }`}
          {...register("distribution", {
            required: {
              value: true,
              message: "商流を選択してください",
            },
          })}
        >
          <option value={"プライム"}>プライム</option>
          <option value={"二次請け"}>二次請け</option>
          <option value={"三次請け"}>三次請け</option>
          <option value={"営業支援"}>営業支援</option>
          <option value={"その他"}>その他</option>
        </select>

        {errors?.distribution?.message && (
          <span className={styles.item_error}>
            {errors.distribution.message}
          </span>
        )}
      </div>
    </div>
  );
};
