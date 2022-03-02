import styles from "../../../Form.module.scss";

import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { usePostalJp } from "use-postal-jp";
import { Data } from "functions/_company";

export const Address: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<Data>();

  const { address, pending, setPostalCode } = usePostalJp();

  const postal = watch("postal");

  useEffect(() => {
    postal && setPostalCode(postal);
  }, [setPostalCode, postal]);

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>住所</span>

      <div className={styles.form_col}>
        <div>
          <input
            className={`${styles.form_input} ${styles.form_input_min} ${
              errors.postal && styles.form_input_error
            }`}
            placeholder="160-0022"
            {...register("postal", {
              pattern: {
                value: /^\d{3}-\d{4}$/,
                message: "正しい郵便番号を入力してください",
              },
              maxLength: {
                value: 8,
                message: "8文字以内で入力してください",
              },
            })}
          />
          {errors?.postal?.message && (
            <span className={styles.form_error}>{errors.postal.message}</span>
          )}
        </div>

        <div>
          <input
            className={`${styles.form_input} ${
              errors.address && styles.form_input_error
            }`}
            placeholder="東京都新宿区新宿4-3-15 レイフラット新宿B 3F THE HUB"
            defaultValue={
              !pending
                ? `${address.prefecture ? address.prefecture : ""}${
                    address.address1 ? address.address1 : ""
                  }${address.address2 ? address.address2 : ""}${
                    address.address3 ? address.address3 : ""
                  }${address.address4 ? address.address4 : ""}`
                : "検索中"
            }
            {...register("address", {
              pattern: {
                value: /^\S+/,
                message: "先頭にスペースは使えません",
              },
              minLength: {
                value: 8,
                message: "8文字以上で入力してください",
              },
              maxLength: {
                value: 64,
                message: "64文字以内で入力してください",
              },
            })}
          />
          {errors?.address?.message && (
            <span className={styles.form_error}>{errors.address.message}</span>
          )}
        </div>
      </div>
    </div>
  );
};
