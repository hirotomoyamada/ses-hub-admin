import styles from "./Item.module.scss";
import root from "../Post.module.scss";

import { useFormContext } from "react-hook-form";
import { Data } from "functions/_resource";

export const Parallel: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={root.post_grid}>
      <div className={root.post_col}>
        <span className={root.post_tag}>並行</span>
        <div className={`${styles.item} ${styles.item_select}`}>
          <select
            className={`${styles.item_input} ${
              errors.parallel && styles.item_input_error
            }`}
            {...register("parallel", {
              required: {
                value: true,
                message: "並行を選択してください",
              },
            })}
          >
            <option value={"あり"}>あり</option>
            <option value={"なし"}>なし</option>
            <option value={"提案中"}>提案中</option>
          </select>

          {errors?.parallel?.message && (
            <span className={styles.item_error}>{errors.parallel.message}</span>
          )}
        </div>
      </div>
    </div>
  );
};
