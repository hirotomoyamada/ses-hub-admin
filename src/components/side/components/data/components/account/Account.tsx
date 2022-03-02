import styles from "./Account.module.scss";

import { Icon } from "components/icon/Icon";
import { Company, Person } from "types/posts";
import { Edit } from "features/root/initialState";

interface PropType {
  user: Company | Person;
  index: Edit;
  handleChange: () => void;
}

export const Account: React.FC<PropType> = ({ user, index, handleChange }) => {
  return (
    <button type="button" className={styles.account} onClick={handleChange}>
      <Icon src={user?.icon} />
      <div className={styles.account_wrap}>
        <span className={styles.account_person}>
          {"person" in user && user?.person ? user?.person : "未設定"}
        </span>
        <span className={styles.account_name}>{user?.name}</span>

        {index !== "matters" && index !== "resources" && (
          <span className={styles.account_parent}>親アカウント</span>
        )}
      </div>
    </button>
  );
};
