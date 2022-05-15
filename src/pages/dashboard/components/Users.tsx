import React, { Fragment } from "react";
import styles from "./Chart.module.scss";
import { Activity } from "features/root/initialState";
import { Sort, Span } from "../DashBoard";

import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { LineChart } from "./LineChart";

interface PropType {
  activity: Activity[];
  width: number;
  height: number;
  columns: number;
  sort: Sort;
  span: Span;
}

export const Users: React.FC<PropType> = ({
  activity,
  width,
  height,
  columns,
  sort,
  span,
}) => {
  return (
    <>
      {activity.map((data, i) => {
        if (!sort.active && !sort.trialing && !sort.canceled && sort.person)
          if (data.key === "posts" || data.key === "outputs")
            return <Fragment key={i}></Fragment>;

        return (
          <div
            key={i}
            className={`${styles.chart} ${
              data.key === "login" && styles.chart_pickup
            }`}
          >
            <Header data={data} sort={sort} />

            <LineChart
              width={
                data.key !== "login"
                  ? width
                  : (width + (columns !== 1 ? (columns === 3 ? 32 : 24) : 0)) *
                    columns
              }
              formatter={(value: number, name: string) => [
                value,
                (() => {
                  switch (name) {
                    case "active":
                      return "レギュラー　　　　";
                    case "trialing":
                      return "フリートライアル　";
                    case "canceled":
                      return "リミテッド　　　　";
                    case "person":
                      return "エンジニア　　　　";
                    default:
                      return "";
                  }
                })(),
              ]}
              height={height}
              data={data}
              sort={sort}
            />

            <Footer data={data} span={span} />
          </div>
        );
      })}
    </>
  );
};
