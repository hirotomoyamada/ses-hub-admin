import styles from "../Toggle.module.scss";

import { useFormContext } from "react-hook-form";

export const Option = ({ i, user }) => {
  const { register } = useFormContext();

  return (
    <div
      className={`${styles.toggle} ${
        (!user?.uid || user?.payment?.price || user?.type === "child") &&
        styles.toggle_notFound
      }`}
    >
      <input
        type="radio"
        id={`enable${i}`}
        value="enable"
        {...register(`user[${i}].option`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_enable} ${
          (user?.payment?.price || user?.type === "child") && styles.toggle_none
        }`}
        htmlFor={`enable${i}`}
      >
        有効
      </label>

      <input
        type="radio"
        id={`disable${i}`}
        value="disable"
        {...register(`user[${i}].option`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_disable} ${
          (user?.payment?.price || user?.type === "child") && styles.toggle_none
        }`}
        htmlFor={`disable${i}`}
      >
        無効
      </label>

      <input
        type="radio"
        id={`none${i}`}
        value="none"
        {...register(`user[${i}].option`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_none}`}
        htmlFor={`none${i}`}
      >
        選択しない
      </label>
    </div>
  );
};
