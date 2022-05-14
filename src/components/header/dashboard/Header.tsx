import styles from "./Header.module.scss";
import { Sort, Span } from "pages/dashboard/DashBoard";
import FilterListIcon from "@material-ui/icons/FilterList";

interface PropType {
  sort: Sort;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
  span: Span;
  setSpan: React.Dispatch<React.SetStateAction<Span>>;
}

export const Header: React.FC<PropType> = ({
  sort,
  setSort,
  span,
  setSpan,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.sort}>
        <button
          type="button"
          className={`
            ${styles.sort_btn}
            ${sort.active && styles.sort_btn_active}
            ${
              !sort.trialing &&
              !sort.canceled &&
              !sort.person &&
              styles.sort_btn_disabled
            }
          `}
          onClick={() => setSort((prev) => ({ ...prev, active: !prev.active }))}
        >
          レギュラー
        </button>

        <button
          type="button"
          className={`
            ${styles.sort_btn}
            ${sort.trialing && styles.sort_btn_trialing}
            ${
              !sort.active &&
              !sort.canceled &&
              !sort.person &&
              styles.sort_btn_disabled
            }
          `}
          onClick={() =>
            setSort((prev) => ({ ...prev, trialing: !prev.trialing }))
          }
        >
          フリートライアル
        </button>

        <button
          type="button"
          className={`
            ${styles.sort_btn}
            ${sort.canceled && styles.sort_btn_canceled}
            ${
              !sort.active &&
              !sort.trialing &&
              !sort.person &&
              styles.sort_btn_disabled
            }
          `}
          onClick={() =>
            setSort((prev) => ({ ...prev, canceled: !prev.canceled }))
          }
        >
          リミテッド
        </button>

        <button
          type="button"
          className={`
            ${styles.sort_btn}
            ${sort.person && styles.sort_btn_person}
            ${
              !sort.active &&
              !sort.trialing &&
              !sort.canceled &&
              styles.sort_btn_disabled
            }
          `}
          onClick={() => setSort((prev) => ({ ...prev, person: !prev.person }))}
        >
          エンジニア
        </button>
      </div>

      <div className={styles.span}>
        <select
          className={styles.span_select}
          onChange={(e) => setSpan(e.target.value as Span)}
          defaultValue={span}
        >
          <option value="total">すべて</option>
          <option value="day">今日</option>
          <option value="week">今週</option>
          <option value="month">今月</option>
        </select>

        <FilterListIcon className={styles.span_icon} />
      </div>
    </div>
  );
};
