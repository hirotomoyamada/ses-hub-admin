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

import { Activity } from "features/root/initialState";

interface PropType {
  width: number;
  data: Activity;
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
        <XAxis type="number" domain={[0, "dataMax"]} hide />
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
          formatter={(value: number) => [value, ""]}
        />

        <Bar
          dataKey="active"
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
