import React from "react";
import styles from "./Chart.module.scss";
import { Analytics } from "features/root/initialState";
import { Span } from "../DashBoard";

import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { LineChart } from "./LineChart";
import { BarChart } from "./BarChart";

interface PropType {
  analytics: Analytics[];
  width: number;
  height: number;
  columns: number;
  span: Span;
}

export const Matters: React.FC<PropType> = ({
  analytics,
  width,
  height,
  columns,
  span,
}) => {
  return (
    <>
      {analytics.map((data, i) => {
        return (
          <div
            key={i}
            className={`
              ${styles.chart} 
              ${data.key === "posts" && styles.chart_pickup}
              ${data.key === "position" && styles.chart_long}
            `}
          >
            {(() => {
              switch (data.key) {
                case "posts":
                  return (
                    <>
                      <Header data={data} />

                      <LineChart
                        width={
                          data.key !== "posts"
                            ? width
                            : (width +
                                (columns !== 1
                                  ? columns === 3
                                    ? 32
                                    : 24
                                  : 0)) *
                              columns
                        }
                        height={height}
                        formatter={(value: number) => [value, ""]}
                        data={data}
                      />

                      <Footer data={data} span={span} />
                    </>
                  );

                default:
                  return (
                    <>
                      <Header data={data} />

                      <BarChart width={width} data={data} />

                      <Footer data={data} span={span} bar />
                    </>
                  );
              }
            })()}
          </div>
        );
      })}
    </>
  );
};
