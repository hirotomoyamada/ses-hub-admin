import styles from "./Item.module.scss";
import root from "../Main.module.scss";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useFormContext, useFieldArray } from "react-hook-form";

export const Handles = ({ index }) => {
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
    <div className={root.main_col}>
      <div className={`${root.main_grid} ${root.main_grid_gap}`}>
        {handlesFields.map((field, i) => (
          <div key={field.id} className={styles.item}>
            <input
              placeholder="言語"
              className={`${styles.item_input} ${
                errors.handles?.[i]?.handle && styles.item_input_error
              }`}
              {...register(`handles[${i}].handle`, {
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

            <div className={styles.item_btn}>
              {i !== 0 && (
                <button
                  className={styles.item_btn_remove}
                  onClick={() => handlesRemove(i)}
                >
                  <RemoveIcon className={styles.item_btn_icon} />
                </button>
              )}
              {index === "matters" && i === handlesFields.length - 1 && i < 4 && (
                <button
                  className={styles.item_btn_add}
                  onClick={() => handlesAppend({ handle: "" })}
                >
                  <AddIcon className={styles.item_btn_icon} />
                </button>
              )}
              {index === "resources" &&
                i === handlesFields.length - 1 &&
                i < 9 && (
                  <button
                    className={styles.item_btn_add}
                    onClick={() => handlesAppend({ handle: "" })}
                  >
                    <AddIcon className={styles.item_btn_icon} />
                  </button>
                )}
            </div>

            {errors.handles?.[i]?.handle.message && (
              <span className={styles.item_error}>
                {errors.handles?.[i]?.handle.message}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
