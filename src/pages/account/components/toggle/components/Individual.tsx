import React, { useState } from "react";
import styles from "../Toggle.module.scss";
import { useFormContext } from "react-hook-form";
import { Accounts } from "features/user/initialState";

interface PropType {
  i: number;
  account: Accounts[number];
}

export const Individual: React.FC<PropType> = ({ i, account }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { register, watch } = useFormContext();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const value = watch(`account[${i}].status`);

  return account?.uid ? (
    <div
      className={`
        ${styles.toggle}
        ${(!account?.uid || account?.payment?.price) && styles.toggle_disable}
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
          ${value === "active" && styles.toggle_btn_active}
          ${value === "trialing" && styles.toggle_btn_trialing}
          ${value === "canceled" && styles.toggle_btn_canceled}
        `}
      >
        {(() => {
          switch (value) {
            case "active":
              return "レギュラー";

            case "trialing":
              return "フリートライアル";

            default:
              return "リミテッド";
          }
        })()}
      </button>

      <div
        className={`
          ${styles.modal} 
          ${!open && styles.modal_none}
        `}
      >
        <input
          type="radio"
          id={`active${i}`}
          value="active"
          {...register(`account[${i}].status`)}
        />
        <label
          className={`
            ${styles.modal_btn} 
            ${styles.modal_active} 
            ${
              account?.payment?.price &&
              account?.payment?.status === "active" &&
              styles.modal_none
            }
          `}
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
          className={`
            ${styles.modal_btn} 
            ${styles.modal_trialing} 
            ${
              account?.payment?.price &&
              account?.payment?.status === "trialing" &&
              styles.modal_none
            }
          `}
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
          className={`
            ${styles.modal_btn} 
            ${styles.modal_canceled} 
            ${
              account?.payment?.price &&
              account?.payment?.status === "canceled" &&
              styles.modal_none
            }
          `}
          htmlFor={`canceled${i}`}
        >
          リミテッド
        </label>
      </div>
    </div>
  ) : (
    <></>
  );
};
