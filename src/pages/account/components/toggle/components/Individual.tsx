import styles from "../Toggle.module.scss";

import { useFormContext } from "react-hook-form";

import { Accounts } from "features/user/initialState";

interface PropType {
  i: number;
  account: Accounts[number];
}

export const Individual: React.FC<PropType> = ({ i, account }) => {
  const { register } = useFormContext();

  return account?.uid ? (
    <div
      className={`${styles.toggle} ${
        (!account?.uid || account?.payment?.price) && styles.toggle_notFound
      }`}
    >
      <input
        type="radio"
        id={`active${i}`}
        value="active"
        {...register(`account[${i}].status`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_active} ${
          account?.payment?.price &&
          account?.payment?.status === "active" &&
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
        {...register(`account[${i}].status`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_trialing} ${
          account?.payment?.price &&
          account?.payment?.status === "trialing" &&
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
        {...register(`account[${i}].status`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_canceled} ${
          account?.payment?.price &&
          account?.payment?.status === "canceled" &&
          styles.toggle_none
        }`}
        htmlFor={`canceled${i}`}
      >
        リミテッド
      </label>
    </div>
  ) : (
    <></>
  );
};
