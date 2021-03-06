import styles from "./Item.module.scss";
import root from "../Post.module.scss";

import { useFormContext } from "react-hook-form";
import { Data } from "functions/_matter";

export const Span: React.FC = () => {
  const { register } = useFormContext<Data>();

  return (
    <div className={root.post_col}>
      <span className={root.post_tag}>支払いサイト</span>
      <div className={`${styles.item} ${styles.item_select}`}>
        <select className={styles.item_input} {...register("span")}>
          <option value={30}>30日</option>
          <option value={35}>35日</option>
          <option value={40}>40日</option>
          <option value={45}>45日</option>
          <option value={50}>50日</option>
          <option value={60}>60日</option>
          <option value={"その他"}>その他</option>
        </select>
      </div>
    </div>
  );
};
