import styles from "../Toggle.module.scss";

import { useFormContext } from "react-hook-form";

export const Parent = ({ i, user }) => {
  const { register } = useFormContext();

  return (
    <div
      className={`${styles.toggle} ${styles.toggle_parent} ${
        (!user?.uid || user?.payment?.price || user?.type === "child") &&
        styles.toggle_notFound
      }`}
    >
      <input
        type="radio"
        id={`five${i}`}
        value="5"
        {...register(`user[${i}].status`)}
      />
      <label
        className={`
          ${styles.toggle_btn} 
          ${
            user?.payment?.children?.length > 5 - 1 && styles.toggle_btn_disable
          } 
          ${styles.toggle_active} 
          ${
            user?.payment?.price &&
            user?.payment?.account === 5 &&
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
        {...register(`user[${i}].status`)}
      />
      <label
        className={`
          ${styles.toggle_btn} 
          ${
            user?.payment?.children?.length > 10 - 1 &&
            styles.toggle_btn_disable
          } ${styles.toggle_active} 
          ${
            user?.payment?.price &&
            user?.payment?.account === 10 &&
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
        {...register(`user[${i}].status`)}
      />
      <label
        className={`
          ${styles.toggle_btn} 
          ${
            user?.payment?.children?.length > 15 - 1 &&
            styles.toggle_btn_disable
          } 
          ${styles.toggle_active} 
          ${
            user?.payment?.price &&
            user?.payment?.account === 15 &&
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
        {...register(`user[${i}].status`)}
      />
      <label
        className={`
          ${styles.toggle_btn} 
          ${
            user?.payment?.children?.length > 20 - 1 &&
            styles.toggle_btn_disable
          }
          ${styles.toggle_active} 
          ${
            user?.payment?.price &&
            user?.payment?.account === 20 &&
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
        {...register(`user[${i}].status`)}
      />
      <label
        className={`${styles.toggle_btn} ${styles.toggle_canceled} ${
          ((user?.payment?.price && user?.payment?.status === "canceled") ||
            user?.type === "child") &&
          styles.toggle_none
        }`}
        htmlFor={`canceled${i}`}
      >
        無効
      </label>
    </div>
  );
};
