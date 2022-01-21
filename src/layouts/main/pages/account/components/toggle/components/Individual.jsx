import styles from "../Toggle.module.scss";

import { useFormContext } from "react-hook-form";

export const Individual = ({ i, user }) => {
  const { register } = useFormContext();

  return (
    <div
      className={`${styles.toggle} ${
        (!user?.uid || user?.payment?.price) && styles.toggle_notFound
      }`}
    >
      <input
        type="radio"
        id={`active${i}`}
        value="active"
        {...register(`user[${i}].status`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_active} ${
          user?.payment?.price &&
          user?.payment?.status === "active" &&
          styles.toggle_none
        }`}
        htmlFor={`active${i}`}
      >
        レギュラー
      </label>

      <input
        type="radio"
        id={`trialing${i}`}
        value="trialing"
        {...register(`user[${i}].status`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_trialing} ${
          user?.payment?.price &&
          user?.payment?.status === "trialing" &&
          styles.toggle_none
        }`}
        htmlFor={`trialing${i}`}
      >
        トライアル
      </label>

      <input
        type="radio"
        id={`canceled${i}`}
        value="canceled"
        {...register(`user[${i}].status`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_canceled} ${
          user?.payment?.price &&
          user?.payment?.status === "canceled" &&
          styles.toggle_none
        }`}
        htmlFor={`canceled${i}`}
      >
        リミテッド
      </label>
    </div>
  );
};
