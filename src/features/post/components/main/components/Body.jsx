import styles from "./Item.module.scss";
import root from "../Main.module.scss";

import { useFormContext } from "react-hook-form";

export const Body = ({ index }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={root.main_col}>
      <span className={root.main_tag}>
        {index === "matters" && "概要"}
        {index === "resources" && "PR文"}
      </span>
      <div className={styles.item}>
        <textarea
          className={`${styles.item_textarea} ${
            errors.body && styles.item_textarea_error
          }`}
          {...register(
            "body",
            index === "matters"
              ? {
                  required: {
                    value: true,
                    message: "概要を入力してください",
                  },
                  pattern: {
                    value: /^\S+/,
                    message: "先頭にスペースは使えません",
                  },
                  minLength: {
                    value: 16,
                    message: "16文字以上で入力してください",
                  },
                  maxLength: {
                    value: 600,
                    message: "600文字以内で入力してください",
                  },
                }
              : index === "resources" && {
                  required: {
                    value: true,
                    message: "PR文を入力してください",
                  },
                  pattern: {
                    value: /^\S+/,
                    message: "先頭にスペースは使えません",
                  },
                  minLength: {
                    value: 16,
                    message: "16文字以上で入力してください",
                  },
                  maxLength: {
                    value: 600,
                    message: "600文字以内で入力してください",
                  },
                }
          )}
        ></textarea>
        {errors.body?.message && (
          <span className={styles.item_error}>{errors.body?.message}</span>
        )}
      </div>
    </div>
  );
};
