import styles from "./Item.module.scss";
import root from "../Post.module.scss";

import { useFormContext } from "react-hook-form";
import { Data } from "functions/_matter";

export const Interviews: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={`${root.post_grid} ${root.post_grid_mid}`}>
      <div className={root.post_col}>
        <span className={root.post_tag}>面談</span>
        <div className={`${root.post_grid} ${root.post_grid_interviews}`}>
          <div className={`${styles.item} ${styles.item_select}`}>
            <select
              className={`${styles.item_input} ${
                errors.interviews?.type && styles.item_input_error
              }`}
              {...register("interviews.type", {
                required: {
                  value: true,
                  message: "面談種類を選択してください",
                },
              })}
            >
              <option value={"オンライン"}>オンライン</option>
              <option value={"現地"}>現地</option>
              <option value={"その他"}>その他</option>
            </select>

            {errors?.interviews?.type?.message && (
              <span>{errors.interviews.type.message}</span>
            )}
          </div>
          <div className={`${styles.item} ${styles.item_select}`}>
            <select
              className={`${styles.item_input} ${
                errors.interviews?.count && styles.item_input_error
              }`}
              {...register("interviews.count", {
                required: {
                  value: true,
                  message: "面談回数を選択してください",
                },
              })}
            >
              <option value={"1回"}>1回</option>
              <option value={"2回"}>2回</option>
              <option value={"その他"}>その他</option>
            </select>

            {errors?.interviews?.count?.message && (
              <span>{errors.interviews.count.message}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
