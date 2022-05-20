import React from "react";
import styles from "./Chart.module.scss";
import {
  BarChart as BC,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  LabelList,
} from "recharts";

import { Analytics } from "features/root/initialState";

interface PropType {
  width: number;
  data: Analytics;
}

export const BarChart: React.FC<PropType> = ({ width, data }) => {
  return data?.log?.length ? (
    <div className={styles.chart_scroll}>
      <BC
        layout="vertical"
        barGap={8}
        width={width}
        height={34 * data.log.length}
        data={data?.log || []}
      >
        <XAxis type="number" domain={[0, 1]} hide />
        <YAxis type="category" dataKey="label" hide />

        <Tooltip
          separator=""
          contentStyle={{
            borderRadius: "12px",
            paddingTop: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "8px",
          }}
          itemStyle={{
            display: "flex",
            gap: "2px",
            color: "#49b657",
          }}
          labelStyle={{
            fontWeight: "bold",
          }}
          formatter={(
            _value: unknown,
            _name: unknown,
            { payload }: { payload: Analytics["log"][number] }
          ) => {
            return [payload.active, ""];
          }}
        />

        <Bar
          dataKey="ratio"
          barSize={26}
          fill={"#49b6573b"}
          animationDuration={1580}
          animationEasing="ease-in-out"
        >
          <LabelList
            dataKey="label"
            position="insideLeft"
            fill="#515a74"
            fontSize="14px"
            content={({ x, y, width, height, offset, value }) => {
              const log = (data.log as { label: string; ratio: number }[]).find(
                (log) => log.label === value
              );

              return (
                <text
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill="#515a74"
                  font-size="14px"
                  offset={offset}
                  text-anchor="start"
                >
                  <tspan x="12" dy="18">
                    {value}

                    <tspan fontWeight="bold">
                      {"　"}
                      {((log?.ratio || 0) * 100).toFixed(1)}
                      {" %"}
                    </tspan>
                  </tspan>
                </text>
              );
            }}
          />
        </Bar>
      </BC>
    </div>
  ) : (
    <div className={styles.chart_none}>
      <span className={styles.chart_none_txt}>データがありません</span>
    </div>
  );
};
