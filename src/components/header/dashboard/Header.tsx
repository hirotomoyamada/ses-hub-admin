import styles from "./Header.module.scss";

interface PropType {
  i?: string;
}

export const Header: React.FC<PropType> = ({ i }) => {
  return <div className={styles.header}></div>;
};
