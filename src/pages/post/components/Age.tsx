import styles from "./Item.module.scss";
import root from "../Post.module.scss";
import { useFormContext } from "react-hook-form";
import { Data } from "functions/_resource";

export const Age: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  const min = 18;
  const max = 65;
  const length = max - min;
  const Option = () => {
    const option = [];
    for (let i = 0; i <= length; i++) {
      option.push(
        <option key={i} value={min + i}>
          {min + i}歳
        </option>
      );
    }

    return (
      <div className={`${styles.item} ${styles.item_select}`}>
        <select
          className={`${styles.item_input} ${
            errors.age && styles.item_input_error
          }`}
          {...register("age", {
            required: {
              value: true,
              message: "性別を選択してください",
            },
          })}
        >
          {option}
        </select>

        {errors?.age?.message && (
          <span className={styles.item_error}>{errors.age.message}</span>
        )}
      </div>
    );
  };

  return (
    <div className={root.post_col}>
      <span className={root.post_tag}>年齢</span>
      <Option />
    </div>
  );
};
