import { Accounts } from 'features/user/initialState';
import styles from './Tag.module.scss';

interface PropType {
  accounts: Accounts;
}

export const Tag: React.FC<PropType> = ({ accounts }) => {
  return (
    <ul className={styles.tag}>
      <li>UID</li>

      {accounts.filter((account) => account).length ? (
        <>
          <li>プラン</li>
          <li>Freelance Direct</li>
        </>
      ) : (
        <></>
      )}
    </ul>
  );
};
