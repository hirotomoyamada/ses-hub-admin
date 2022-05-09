import styles from "./Item.module.scss";
import root from "../Post.module.scss";

import { useFormContext } from "react-hook-form";
import { Data } from "pages/post/Post";

export const Status: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={root.post_grid}>
      <div className={root.post_col}>
        <span className={root.post_tag}>ステータス</span>
        <div className={`${styles.item} ${styles.item_select}`}>
          <select
            className={`${styles.item_input} ${
              errors.status && styles.item_input_error
            }`}
            {...register("status", {
              required: {
                value: true,
                message: "ステータスを選択してください",
              },
            })}
          >
            <option value="新規">新規</option>
            <option value="提案中">提案中</option>
            <option value="面談中">面談中</option>
            <option value="保留中">保留中</option>
            <option value="フォロー中">フォロー中</option>
            <option value="成約">成約</option>
          </select>

          {errors?.status?.message && (
            <span className={styles.item_error}>{errors.status.message}</span>
          )}
        </div>
      </div>
    </div>
  );
};
