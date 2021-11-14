import styles from "./Account.module.scss";

import { Icon } from "../../../../../../components/icon/Icon";

export const Account = ({ user, index, handleChange }) => {
  return (
    <button type="button" className={styles.account} onClick={handleChange}>
      <Icon src={user?.icon} />
      <div className={styles.account_wrap}>
        <span className={styles.account_person}>
          {user?.person ? user?.person : "未設定"}
        </span>
        <span className={styles.account_name}>{user?.name}</span>

        {index !== "matters" && index !== "resources" && (
          <span className={styles.account_parent}>親アカウント</span>
        )}
      </div>
    </button>
  );
};
