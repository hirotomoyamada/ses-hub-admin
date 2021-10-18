import styles from "../../../Form.module.scss";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useFormContext, useFieldArray } from "react-hook-form";

export const Handles = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const {
    fields: handlesFields,
    append: handlesAppend,
    remove: handlesRemove,
  } = useFieldArray({
    control,
    name: "handles",
  });

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>言語</span>
      <div className={styles.form_grid}>
        {handlesFields.map((field, i) => (
          <div key={field.id} className={styles.form_item}>
            <input
              placeholder="言語"
              className={`${styles.form_input} ${
                errors.handles?.[i]?.handle && styles.form_input_error
              }`}
              {...register(`handles[${i}].handle`, {
                required: i === 0 && {
                  value: true,
                  message: "項目を入力してください",
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
                  value: 16,
                  message: "16文字以内で入力してください",
                },
              })}
            />

            <div className={styles.form_btn}>
              {i !== 0 && (
                <button
                  type="button"
                  className={styles.form_btn_remove}
                  onClick={() => handlesRemove(i)}
                >
                  <RemoveIcon className={styles.form_btn_icon} />
                </button>
              )}
              {i === handlesFields.length - 1 && i < 7 && (
                <button
                  type="button"
                  className={styles.form_btn_add}
                  onClick={() => handlesAppend({ handle: "" })}
                >
                  <AddIcon className={styles.form_btn_icon} />
                </button>
              )}
            </div>

            {errors.handles?.[i]?.handle.message && (
              <span className={styles.form_error}>
                {errors.handles?.[i]?.handle.message}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
