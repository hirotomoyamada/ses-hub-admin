import styles from "./Icon.module.scss";
import { useFormContext } from "react-hook-form";
import { Index } from "features/root/initialState";

interface PropType {
  index: Index;
}

export const Icon: React.FC<PropType> = ({ index }) => {
  const { register } = useFormContext();

  const icon = index === "companys" ? 17 : 35;
  const input = [];

  for (let i = index === "companys" ? 0 : 18; i <= icon; i++) {
    input.push(
      <div key={i} className={styles.icon_item}>
        <input
          type="radio"
          id={`icon${i}`}
          {...register("icon")}
          value={`icon${i}`}
          className={styles.icon_input}
        />

        <label htmlFor={`icon${i}`} className={styles.icon_input_label}>
          <img
            src={`${process.env.PUBLIC_URL}/img/icon/icon${i}.svg`}
            alt=""
            className={`${styles.icon_img}`}
          />
        </label>
      </div>
    );
  }

  return (
    <div className={styles.icon}>
      <div className={styles.icon_inner}>{input}</div>
    </div>
  );
};
