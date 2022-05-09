import styles from "./Tag.module.scss";

export const Tag: React.FC = () => {
  return (
    <ul className={styles.tag}>
      <li>UID</li>
      <li>プラン</li>
      <li>オプション</li>
    </ul>
  );
};
