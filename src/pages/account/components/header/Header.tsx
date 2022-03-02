import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <ul className={styles.header}>
      <li>UID</li>
      <li>プラン</li>
      <li>オプション</li>
    </ul>
  );
};
