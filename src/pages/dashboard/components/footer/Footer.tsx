import React from "react";
import styles from "./Footer.module.scss";

import { Span } from "../../DashBoard";
import { Analytics } from "features/root/initialState";

interface PropType {
  span?: Span;
  data?: Analytics;
  bar?: boolean;
}

export const Footer: React.FC<PropType> = ({ span, data, bar }) => {
  return !bar ? (
    <div className={`${styles.footer}`}>
      <span className={styles.footer_day}>
        {data && [...data.log]?.reverse()?.[0]?.label}
      </span>

      <span className={styles.footer_day}>
        {span === "day" ? "今日" : span === "week" ? "今週" : "今月"}
      </span>
    </div>
  ) : (
    <div className={`${styles.footer}`}>
      <span className={styles.footer_day}>最小</span>
      <span className={styles.footer_day}>最大</span>
    </div>
  );
};
