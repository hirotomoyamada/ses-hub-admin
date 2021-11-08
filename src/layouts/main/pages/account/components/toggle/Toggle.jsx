import root from "../../Account.module.scss";
import styles from "./Toggle.module.scss";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export const Toggle = ({ i, user }) => {
  const { register, setValue } = useFormContext();

  useEffect(() => {
    setValue(`user[${i}].status`, user?.payment?.status, {
      shouldValidate: true,
      shouldDirty: true,
    });

    setValue(
      `user[${i}].option`,
      user?.payment?.option
        ? user?.payment?.option?.freelanceDirect
          ? "enable"
          : "disable"
        : "none",
      {
        shouldValidate: true,
        shouldDirty: true,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className={root.account_wrap}>
      <div className={`${styles.toggle} ${!user && styles.toggle_disable}`}>
        <input
          type="radio"
          id="active"
          value="active"
          {...register(`user[${i}].status`)}
        />
        <label
          className={`${styles.toggle_btn} ${styles.toggle_active}`}
          htmlFor="active"
        >
          レギュラー
        </label>

        <input
          type="radio"
          id="trialing"
          value="trialing"
          {...register(`user[${i}].status`)}
        />
        <label
          className={`${styles.toggle_btn} ${styles.toggle_trialing}`}
          htmlFor="trialing"
        >
          トライアル
        </label>

        <input
          type="radio"
          id="canceled"
          value="canceled"
          {...register(`user[${i}].status`)}
        />
        <label
          className={`${styles.toggle_btn} ${styles.toggle_canceled}`}
          htmlFor="canceled"
        >
          リミテッド
        </label>
      </div>

      <div className={`${styles.toggle} ${!user && styles.toggle_disable}`}>
        <input
          type="radio"
          id="enable"
          value="enable"
          {...register(`user[${i}].option`)}
        />
        <label
          className={`${styles.toggle_btn} ${styles.toggle_enable}`}
          htmlFor="enable"
        >
          有効
        </label>

        <input
          type="radio"
          id="disable"
          value="disable"
          {...register(`user[${i}].option`)}
        />
        <label
          className={`${styles.toggle_btn} ${styles.toggle_disable}`}
          htmlFor="disable"
        >
          無効
        </label>

        <input
          type="radio"
          id="none"
          value="none"
          {...register(`user[${i}].option`)}
        />
        <label
          className={`${styles.toggle_btn} ${styles.toggle_none}`}
          htmlFor="none"
        >
          選択しない
        </label>
      </div>
    </div>
  );
};
