import styles from "./Item.module.scss";
import root from "../Post.module.scss";

import { useFormContext } from "react-hook-form";
import { Data } from "functions/_matter";

export const Times: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={root.post_col}>
      <span className={root.post_tag}>就業時間</span>
      <div className={`${root.post_grid} ${root.post_grid_times}`}>
        <div className={styles.item}>
          <input
            className={`${styles.item_input} ${styles.item_input_center} ${
              errors.times?.start && styles.item_input_error
            }`}
            defaultValue="10:00"
            type="time"
            {...register("times.start", {
              required: {
                value: true,
                message: "開始時間を入力してください",
              },
            })}
          />
        </div>
        <span className={styles.item_mark}>〜</span>
        <div className={styles.item}>
          <input
            className={`${styles.item_input} ${styles.item_input_center} ${
              errors.times?.end && styles.item_input_error
            }`}
            type="time"
            defaultValue="19:00"
            {...register("times.end", {
              required: {
                value: true,
                message: "終了時間を入力してください",
              },
            })}
          />
        </div>
      </div>

      {errors?.times?.start?.message && (
        <span className={styles.item_error}>{errors.times.start.message}</span>
      )}

      {errors?.times?.end?.message && (
        <span className={styles.item_error}>{errors.times.end.message}</span>
      )}
    </div>
  );
};
