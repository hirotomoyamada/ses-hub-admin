import styles from "../../../Form.module.scss";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useFormContext, useFieldArray } from "react-hook-form";

export const Tools = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const {
    fields: toolsFields,
    append: toolsAppend,
    remove: toolsRemove,
  } = useFieldArray({
    control,
    name: "tools",
  });

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>ツール</span>
      <div className={styles.form_grid}>
        {toolsFields.map((field, i) => (
          <div key={field.id} className={styles.form_item}>
            <input
              placeholder="ツール"
              className={`${styles.form_input} ${
                errors.tools?.[i]?.tool && styles.form_input_error
              }`}
              {...register(`tools[${i}].tool`, {
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
                  onClick={() => toolsRemove(i)}
                >
                  <RemoveIcon className={styles.form_btn_icon} />
                </button>
              )}
              {i === toolsFields.length - 1 && i < 7 && (
                <button
                  type="button"
                  className={styles.form_btn_add}
                  onClick={() => toolsAppend({ tool: "" })}
                >
                  <AddIcon className={styles.form_btn_icon} />
                </button>
              )}
            </div>

            {errors.tools?.[i]?.tool.message && (
              <span className={styles.form_error}>
                {errors.tools?.[i]?.tool.message}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
