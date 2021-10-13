import styles from "./Index.module.scss";

export const Index = ({ type, index, handleIndexScroll }) => {
  return (
    type !== "follows" && (
      <div className={styles.index}>
        <div
          className={`${styles.index_inner} ${
            (type === "likes" || type === "entries") &&
            styles.index_inner_persons
          }`}
        >
          <button
            type="button"
            className={`${styles.index_btn} ${
              index === "matters" && styles.index_btn_current
            }`}
            onClick={() => handleIndexScroll("matters")}
          >
            案件
          </button>
          <button
            type="button"
            className={`${styles.index_btn} ${
              index === "resources" && styles.index_btn_current
            }`}
            onClick={() => handleIndexScroll("resources")}
          >
            人材
          </button>
          {(type === "likes" || type === "entries") && (
            <button
              type="button"
              className={`${styles.index_btn} ${
                index === "persons" && styles.index_btn_current
              }`}
              onClick={() => handleIndexScroll("persons")}
            >
              エンジニア
            </button>
          )}
        </div>
      </div>
    )
  );
};
