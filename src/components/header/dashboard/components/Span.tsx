import React from "react";
import styles from "../Header.module.scss";
import FilterListIcon from "@material-ui/icons/FilterList";

import * as DashBoard from "pages/dashboard/DashBoard";

interface PropType {
  span: DashBoard.Span;
  setSpan: React.Dispatch<React.SetStateAction<DashBoard.Span>>;
}

export const Span: React.FC<PropType> = ({ span, setSpan }) => {
  return (
    <div className={styles.span}>
      <select
        className={styles.span_select}
        onChange={(e) => setSpan(e.target.value as DashBoard.Span)}
        defaultValue={span}
      >
        <option value="total">すべて</option>
        <option value="day">今日</option>
        <option value="week">今週</option>
        <option value="month">今月</option>
      </select>

      <FilterListIcon className={styles.span_icon} />
    </div>
  );
};
