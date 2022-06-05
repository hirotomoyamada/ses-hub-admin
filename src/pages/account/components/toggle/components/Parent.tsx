import React, { useState } from "react";
import styles from "../Toggle.module.scss";
import { useFormContext } from "react-hook-form";
import { Accounts } from "features/user/initialState";

interface PropType {
  i: number;
  account: Accounts[number];
}

export const Parent: React.FC<PropType> = ({ i, account }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { register, watch } = useFormContext();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const value = watch(`account[${i}].status`);

  return account?.uid ? (
    <div
      className={`
        ${styles.toggle}
        ${
          (!account?.uid ||
            account?.payment?.price ||
            account?.type === "child") &&
          styles.toggle_disable
        }
      `}
    >
      {open && (
        <div
          className={styles.toggle_overlay}
          onClick={() => setOpen(false)}
        ></div>
      )}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`
          ${styles.toggle_btn}
          ${
            value !== "canceled"
              ? styles.toggle_btn_active
              : styles.toggle_btn_canceled
          }
        `}
      >
        {(() => {
          switch (value) {
            case "20":
              return "20人";

            case "15":
              return "15人";

            case "10":
              return "10人";

            case "5":
              return "5人";

            default:
              return "リミテッド";
          }
        })()}
      </button>
      <div
        className={`
          ${styles.modal} 
          ${!open && styles.modal_none}
          ${styles.modal_parent} 
        `}
      >
        <input
          type="radio"
          id={`five${i}`}
          value="5"
          {...register(`account[${i}].status`)}
        />
        <label
          className={`
            ${styles.modal_btn} 
            ${
              account?.payment?.children &&
              account.payment.children.length > 5 - 1 &&
              styles.modal_btn_disable
            } 
            ${styles.modal_active} 
            ${
              account?.payment?.price &&
              account?.payment?.account === 5 &&
              styles.modal_none
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
            ${styles.modal_btn} 
            ${
              account?.payment?.children &&
              account.payment.children.length > 10 - 1 &&
              styles.modal_btn_disable
            } ${styles.modal_active} 
            ${
              account?.payment?.price &&
              account?.payment?.account === 10 &&
              styles.modal_none
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
            ${styles.modal_btn} 
            ${
              account?.payment?.children &&
              account.payment.children.length > 15 - 1 &&
              styles.modal_btn_disable
            } 
            ${styles.modal_active} 
            ${
              account?.payment?.price &&
              account?.payment?.account === 15 &&
              styles.modal_none
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
            ${styles.modal_btn} 
            ${
              account?.payment?.children &&
              account.payment.children.length > 20 - 1 &&
              styles.modal_btn_disable
            }
            ${styles.modal_active} 
            ${
              account?.payment?.price &&
              account?.payment?.account === 20 &&
              styles.modal_none
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
          className={`
            ${styles.modal_btn} 
            ${styles.modal_canceled} 
            ${
              ((account?.payment?.price &&
                account?.payment?.status === "canceled") ||
                account?.type === "child") &&
              styles.modal_none
            }
          `}
          htmlFor={`canceled${i}`}
        >
          無効
        </label>
      </div>
    </div>
  ) : (
    <></>
  );
};
