import styles from "../../../Form.module.scss";
import { useFormContext } from "react-hook-form";
import { Data } from "functions/_company";

export const Type: React.FC = () => {
  const { register, watch } = useFormContext<Data>();

  const state = watch("type");

  return (
    <select
      className={`${styles.form_toggle} ${
        state === "individual" && styles.form_toggle_individual
      } ${state === "parent" && styles.form_toggle_parent} ${
        state === "child" && styles.form_toggle_child
      }`}
      {...register("type")}
    >
      <option value="individual">個人</option>
      <option value="parent">法人</option>
      <option value="child" disabled>
        法人(子)
      </option>
    </select>
  );
};
