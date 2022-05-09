import styles from "./Item.module.scss";
import root from "../Post.module.scss";

import { useFormContext } from "react-hook-form";
import { Data } from "pages/post/Post";
import { Index } from "features/root/initialState";

interface PropType {
  index: Index;
}

export const Body: React.FC<PropType> = ({ index }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={root.post_col}>
      <span className={root.post_tag}>
        {index === "matters" && "案件詳細"}
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
                    message: "案件詳細を入力してください",
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
                    value: 280,
                    message: "280文字以内で入力してください",
                  },
                }
              : index === "resources"
              ? {
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
                    value: 360,
                    message: "360文字以内で入力してください",
                  },
                }
              : {}
          )}
        ></textarea>

        {errors?.body?.message && (
          <span className={styles.item_error}>{errors.body.message}</span>
        )}
      </div>
    </div>
  );
};
