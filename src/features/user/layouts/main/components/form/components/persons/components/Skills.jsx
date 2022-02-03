import styles from "../../../Form.module.scss";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useFormContext, useFieldArray } from "react-hook-form";

export const Skills = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const {
    fields: skillsFields,
    append: skillsAppend,
    remove: skillsRemove,
  } = useFieldArray({
    control,
    name: "skills",
  });

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>スキル</span>
      <div className={styles.form_col}>
        {skillsFields.map((field, i) => (
          <div key={field.id} className={styles.form_item}>
            <input
              placeholder=""
              className={`${styles.form_input} ${
                errors.skills?.[i]?.skill && styles.form_input_error
              }`}
              {...register(`skills[${i}].skill`, {
                pattern: {
                  value: /^\S+/,
                  message: "先頭にスペースは使えません",
                },
                minLength: {
                  value: 6,
                  message: "6文字以上で入力してください",
                },
                maxLength: {
                  value: 144,
                  message: "144文字以内で入力してください",
                },
              })}
            />

            <div className={`${styles.form_btn} ${styles.form_btn_col}`}>
              {i !== 0 && (
                <button
                  type="button"
                  className={styles.form_btn_remove}
                  onClick={() => skillsRemove(i)}
                >
                  <RemoveIcon className={styles.form_btn_icon} />
                </button>
              )}
              {i === skillsFields.length - 1 && i < 4 && (
                <button
                  type="button"
                  className={styles.form_btn_add}
                  onClick={() => skillsAppend({ skill: "" })}
                >
                  <AddIcon className={styles.form_btn_icon} />
                </button>
              )}
            </div>

            <span className={styles.form_error}>
              {errors.skills?.[i]?.skill.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
