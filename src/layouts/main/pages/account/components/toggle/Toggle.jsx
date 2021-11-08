import root from "../../Account.module.scss";
import styles from "./Toggle.module.scss";

import { useFormContext } from "react-hook-form";

export const Toggle = ({ i }) => {
  const { register } = useFormContext();

  return (
    <div className={root.account_wrap}>
      <div className={styles.toggle}>
        <input
          type="radio"
          id="active"
          value="active"
          {...register(`user[${i}].status`)}
        />
        <label
          className={`${styles.toggle_btn} ${styles.toggle_btn_active}`}
          htmlFor="active"
        >
          レギュラー
        </label>

        <input
          type="radio"
          id="canceled"
          value="canceled"
          {...register(`user[${i}].status`)}
        />
        <label
          className={`${styles.toggle_btn} ${styles.toggle_btn_canceled}`}
          htmlFor="canceled"
        >
          リミテッド
        </label>
      </div>

      <div className={`${styles.toggle} ${styles.toggle_option}`}>
        <input
          type="radio"
          id="enable"
          value="enable"
          {...register(`user[${i}].option`)}
        />
        <label
          className={`${styles.toggle_btn} ${styles.toggle_btn_enable}`}
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
          className={`${styles.toggle_btn} ${styles.toggle_btn_disable}`}
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
          className={`${styles.toggle_btn} ${styles.toggle_btn_none}`}
          htmlFor="none"
        >
          選択しない
        </label>
      </div>
    </div>
  );
};
