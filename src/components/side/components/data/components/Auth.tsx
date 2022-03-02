import React, { useState } from "react";
import styles from "../Data.module.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import * as functions from "functions";
import { Company, Person } from "types/posts";

interface PropType {
  user: Company | Person;
}

export const Auth: React.FC<PropType> = ({ user }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <div className={styles.data_col}>
      <div className={styles.data_item}>
        <span className={styles.data_item_tag}>UID</span>
        <CopyToClipboard text={user?.uid} onCopy={handleCopy}>
          <button
            className={`${styles.data_item_text} ${styles.data_item_btn} ${
              copy && styles.data_item_btn_copy
            }`}
          >
            {user?.uid}
          </button>
        </CopyToClipboard>
      </div>

      {user?.lastLogin && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>最終ログイン</span>
          <span className={styles.data_item_text}>
            {functions.root.timestamp(user?.lastLogin)}
          </span>
        </div>
      )}

      {user?.createAt && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>作成</span>
          <span className={styles.data_item_text}>
            {functions.root.timestamp(user?.createAt)}
          </span>
        </div>
      )}

      {user?.updateAt && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>更新</span>
          <span className={styles.data_item_text}>
            {functions.root.timestamp(user?.updateAt)}
          </span>
        </div>
      )}
    </div>
  );
};
