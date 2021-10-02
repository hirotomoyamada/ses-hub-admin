import styles from "./Icon.module.scss";

export const Icon = ({ src }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/img/icon/${src}.svg`}
      alt=""
      className={`${styles.icon}`}
    />
  );
};
