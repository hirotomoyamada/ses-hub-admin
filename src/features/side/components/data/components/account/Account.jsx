import styles from "./Account.module.scss";

import { Icon } from "../../../../../../components/icon/Icon";

export const Account = ({ user, handleChange }) => {
  return (
    <button
      type="button"
      className={styles.account}
      onClick={handleChange}
    >
      <Icon src={user.icon} />
      <div className={styles.account_wrap}>
        <span className={styles.account_person}>{user?.person}</span>
        <span className={styles.account_name}>{user?.name}</span>
      </div>
    </button>
  );
};
