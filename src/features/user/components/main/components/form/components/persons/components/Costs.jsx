import styles from "../../../Form.module.scss";
import { useFormContext } from "react-hook-form";

export const Costs = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const display = watch("costs.display");
  const min = watch("costs.min");
  const max = watch("costs.max");

  return (
    <div className={styles.form_grid}>
      <div className={styles.form_col}>
        <span className={styles.form_tag}>
          単価
          <input
            type="radio"
            id="costsDisplay1"
            value="private"
            {...register("costs.display")}
          />
          <input
            type="radio"
            id="costsDisplay2"
            value="public"
            {...register("costs.display")}
          />
          {display === "public" ? (
            <label className={styles.form_tag_display} htmlFor="costsDisplay1">
              &nbsp;※表示したくありませんか？
            </label>
          ) : (
            <label className={styles.form_tag_display} htmlFor="costsDisplay2">
              &nbsp;※単価を入力する
            </label>
          )}
        </span>

        {display === "public" ? (
          <>
            <div className={`${styles.form_grid} ${styles.form_grid_costs}`}>
              <div className={styles.item}>
                <input
                  placeholder="最小"
                  className={`${styles.form_input} ${
                    styles.form_input_center
                  } ${errors.costs?.min && styles.form_input_error}`}
                  type="number"
                  {...register("costs.min", {
                    pattern: {
                      value: /^\d/,
                      message: "半角数字で入力してください",
                    },
                    maxLength: {
                      value: 3,
                      message: "3文字以内で入力してください",
                    },
                  })}
                />
              </div>
              <span className={styles.form_mark}>〜</span>
              <div className={styles.item}>
                <input
                  placeholder="最大"
                  className={`${styles.form_input} ${
                    styles.form_input_center
                  } ${
                    Number(min) >= Number(max) &&
                    errors.costs?.max?.type &&
                    styles.form_input_error
                  }`}
                  type="number"
                  {...register("costs.max", {
                    required: {
                      value: true,
                      message: "最大値を入力してください",
                    },
                    pattern: {
                      value: /^\d/,
                      message: "半角数字で入力してください",
                    },
                    maxLength: {
                      value: 3,
                      message: "3文字以内で入力してください",
                    },
                    validate: {
                      max: (max) => Number(max) > Number(min),
                    },
                  })}
                />
              </div>
            </div>
            {errors.costs?.min?.message && (
              <span className={styles.form_error}>
                {errors.costs?.min?.message}
              </span>
            )}

            {errors.costs?.max?.message && (
              <span className={styles.form_error}>
                {errors.costs?.max?.message}
              </span>
            )}

            {max &&
              Number(min) >= Number(max) &&
              errors.costs?.max?.type === "max" && (
                <span className={styles.form_error}>
                  正しい数値を入力してください
                </span>
              )}
          </>
        ) : (
          <div className={styles.form_select}>
            <select
              className={`${styles.form_input} ${
                errors.costs?.type && styles.form_input_error
              }`}
              {...register("costs.type", {
                required: {
                  value: true,
                  message: "項目を選択してください",
                },
              })}
            >
              <option value={"応談"}>応談</option>
              <option value={"内容次第"}>内容次第</option>
            </select>
            {errors.costs?.type?.message && (
              <span className={styles.form_error}>
                {errors.costs?.type?.message}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
