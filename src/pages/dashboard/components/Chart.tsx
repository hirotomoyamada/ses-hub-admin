import React from "react";
import styles from "./Chart.module.scss";
import { LineChart } from "./LineChart";

import { Activity } from "features/root/initialState";
import { Sort, Span } from "../DashBoard";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PropType {
  width: number;
  height: number;
  columns: number;
  data: Activity;
  sort: Sort;
  span: Span;
}

export const Chart: React.FC<PropType> = ({
  width,
  height,
  columns,
  data,
  span,
  sort,
}) => {
  return sort.active ||
    sort.trialing ||
    sort.canceled ||
    (sort.person && data.key !== "posts" && data.key !== "outputs") ? (
    <div
      className={`${styles.chart} ${
        data.key === "login" && styles.chart_login
      }`}
    >
      <Header data={data} sort={sort} />
      <LineChart
        width={width}
        height={height}
        columns={columns}
        data={data}
        sort={sort}
      />
      <Footer data={data} span={span} />
    </div>
  ) : (
    <></>
  );
};
