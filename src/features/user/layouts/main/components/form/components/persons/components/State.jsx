import styles from "../../../Form.module.scss";
import { useFormContext } from "react-hook-form";

export const State = () => {
  const { register, watch } = useFormContext();

  const state = watch("state");

  return (
    <select
      className={`${styles.form_toggle} ${
        (state === "確定" || state === "商談中" || state === "情報収集中") &&
        styles.form_toggle_disable
      } ${state === "至急" && styles.form_toggle_hurry}`}
      {...register("state")}
    >
      <option value="案件探し中">案件探し中</option>
      <option value="確定">確定</option>
      <option value="商談中">商談中</option>
      <option value="内容次第">内容次第</option>
      <option value="至急">至急</option>
      <option value="情報収集中">情報収集中</option>
    </select>
  );
};
