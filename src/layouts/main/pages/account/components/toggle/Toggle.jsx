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
      <div className={`${styles.toggle} ${!user && styles.toggle_notFound}`}>
        <input
          type="radio"
          id={`active${i}`}
          value="active"
          {...register(`user[${i}].status`)}
        />
        <label
          className={`${styles.toggle_btn} ${styles.toggle_active}`}
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
          className={`${styles.toggle_btn} ${styles.toggle_trialing}`}
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
          className={`${styles.toggle_btn} ${styles.toggle_canceled}`}
          htmlFor={`canceled${i}`}
        >
          リミテッド
        </label>
      </div>

      <div className={`${styles.toggle} ${!user && styles.toggle_notFound}`}>
        <input
          type="radio"
          id={`enable${i}`}
          value="enable"
          {...register(`user[${i}].option`)}
        />
        <label
          className={`${styles.toggle_btn} ${styles.toggle_enable}`}
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
          className={`${styles.toggle_btn} ${styles.toggle_disable}`}
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
    </div>
  );
};
