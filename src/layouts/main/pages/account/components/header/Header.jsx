import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <ul className={styles.header}>
      <li>UID</li>
      <li>プラン</li>
      <li>オプション</li>
    </ul>
  );
};
