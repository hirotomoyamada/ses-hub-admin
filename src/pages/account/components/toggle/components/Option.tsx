import styles from "../Toggle.module.scss";

import { useFormContext } from "react-hook-form";

import { Accounts } from "features/user/initialState";

interface PropType {
  i: number;
  account: Accounts[number];
}

export const Option: React.FC<PropType> = ({ i, account }) => {
  const { register } = useFormContext();

  return account?.uid ? (
    <div
      className={`${styles.toggle} ${
        (!account?.uid ||
          account?.payment?.price ||
          account?.type === "child") &&
        styles.toggle_notFound
      }`}
    >
      <input
        type="radio"
        id={`enable${i}`}
        value="enable"
        {...register(`account[${i}].option`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_enable} ${
          (account?.payment?.price || account?.type === "child") &&
          styles.toggle_none
        }`}
        htmlFor={`enable${i}`}
      >
        有効
      </label>

      <input
        type="radio"
        id={`disable${i}`}
        value="disable"
        {...register(`account[${i}].option`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_disable} ${
          (account?.payment?.price || account?.type === "child") &&
          styles.toggle_none
        }`}
        htmlFor={`disable${i}`}
      >
        無効
      </label>

      <input
        type="radio"
        id={`none${i}`}
        value="none"
        {...register(`account[${i}].option`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_none}`}
        htmlFor={`none${i}`}
      >
        選択しない
      </label>
    </div>
  ) : (
    <></>
  );
};
