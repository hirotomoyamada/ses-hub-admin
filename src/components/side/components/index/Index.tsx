import * as Side from "hooks/useSideFetch";
import styles from "./Index.module.scss";

interface PropType {
  type: Side.Type;
  index: Side.Index;
  handleIndexScroll: (i: Side.Index) => void;
}

export const Index: React.FC<PropType> = ({
  type,
  index,
  handleIndexScroll,
}) => {
  return (
    <div className={styles.index}>
      <div
        className={`${styles.index_inner} ${
          (type === "likes" || type === "entries" || type === "requests") &&
          styles.index_inner_persons
        }`}
      >
        <button
          type="button"
          className={`${styles.index_btn} ${
            (index === "matters" || index === "enable") &&
            styles.index_btn_current
          }`}
          onClick={() =>
            handleIndexScroll(type !== "requests" ? "matters" : "enable")
          }
        >
          {type !== "requests" ? "案件" : "承認済み"}
        </button>
        <button
          type="button"
          className={`${styles.index_btn} ${
            (index === "resources" || index === "hold") &&
            styles.index_btn_current
          }`}
          onClick={() =>
            handleIndexScroll(type !== "requests" ? "resources" : "hold")
          }
        >
          {type !== "requests" ? "人材" : "未承認"}
        </button>
        {(type === "likes" || type === "entries" || type === "requests") && (
          <button
            type="button"
            className={`${styles.index_btn} ${
              (index === "persons" || index === "disable") &&
              styles.index_btn_current
            }`}
            onClick={() =>
              handleIndexScroll(type !== "requests" ? "persons" : "disable")
            }
          >
            {type !== "requests" ? "エンジニア" : "ブロック"}
          </button>
        )}
      </div>
    </div>
  );
};
