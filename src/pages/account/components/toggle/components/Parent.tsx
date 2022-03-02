import styles from "../Toggle.module.scss";

import { useFormContext } from "react-hook-form";
import { Accounts } from "features/user/initialState";

interface PropType {
  i: number;
  account: Accounts[number];
}

export const Parent: React.FC<PropType> = ({ i, account }) => {
  const { register } = useFormContext();

  return account?.uid ? (
    <div
      className={`${styles.toggle} ${styles.toggle_parent} ${
        (!account?.uid ||
          account?.payment?.price ||
          account?.type === "child") &&
        styles.toggle_notFound
      }`}
    >
      <input
        type="radio"
        id={`five${i}`}
        value="5"
        {...register(`account[${i}].status`)}
      />
      <label
        className={`
          ${styles.toggle_btn} 
          ${
            account?.payment?.children &&
            account.payment.children.length > 5 - 1 &&
            styles.toggle_btn_disable
          } 
          ${styles.toggle_active} 
          ${
            account?.payment?.price &&
            account?.payment?.account === 5 &&
            styles.toggle_none
          }
        `}
        htmlFor={`five${i}`}
      >
        5人
      </label>

      <input
        type="radio"
        id={`ten${i}`}
        value="10"
        {...register(`account[${i}].status`)}
      />
      <label
        className={`
          ${styles.toggle_btn} 
          ${
            account?.payment?.children &&
            account.payment.children.length > 10 - 1 &&
            styles.toggle_btn_disable
          } ${styles.toggle_active} 
          ${
            account?.payment?.price &&
            account?.payment?.account === 10 &&
            styles.toggle_none
          }
        `}
        htmlFor={`ten${i}`}
      >
        10人
      </label>

      <input
        type="radio"
        id={`fifteen${i}`}
        value="15"
        {...register(`account[${i}].status`)}
      />
      <label
        className={`
          ${styles.toggle_btn} 
          ${
            account?.payment?.children &&
            account.payment.children.length > 15 - 1 &&
            styles.toggle_btn_disable
          } 
          ${styles.toggle_active} 
          ${
            account?.payment?.price &&
            account?.payment?.account === 15 &&
            styles.toggle_none
          }
        `}
        htmlFor={`fifteen${i}`}
      >
        15人
      </label>

      <input
        type="radio"
        id={`twenty${i}`}
        value="20"
        {...register(`account[${i}].status`)}
      />
      <label
        className={`
          ${styles.toggle_btn} 
          ${
            account?.payment?.children &&
            account.payment.children.length > 20 - 1 &&
            styles.toggle_btn_disable
          }
          ${styles.toggle_active} 
          ${
            account?.payment?.price &&
            account?.payment?.account === 20 &&
            styles.toggle_none
          }
        `}
        htmlFor={`twenty${i}`}
      >
        20人
      </label>

      <input
        type="radio"
        id={`canceled${i}`}
        value="canceled"
        {...register(`account[${i}].status`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_canceled} ${
          ((account?.payment?.price &&
            account?.payment?.status === "canceled") ||
            account?.type === "child") &&
          styles.toggle_none
        }`}
        htmlFor={`canceled${i}`}
      >
        無効
      </label>
    </div>
  ) : (
    <></>
  );
};
