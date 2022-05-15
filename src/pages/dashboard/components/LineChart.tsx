import React from "react";

import { LineChart as LC, Line, XAxis, Tooltip } from "recharts";

import { Activity } from "features/root/initialState";
import { Sort } from "../DashBoard";

interface PropType {
  width: number;
  height: number;
  data: Activity;
  sort?: Sort;
  formatter?: (value: number, name: string) => (string | number)[];
}

export const LineChart: React.FC<PropType> = ({
  width,
  height,
  data,
  sort,
  formatter,
}) => {
  return (
    <LC width={width} height={height} data={[...data.log].reverse() || []}>
      <XAxis dataKey="label" hide />

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
        }}
        labelStyle={{
          fontWeight: "bold",
        }}
        formatter={formatter}
      />

      {!sort && (
        <Line
          type="linear"
          dataKey="active"
          stroke={"#49b657"}
          animationEasing="ease-in-out"
        />
      )}

      {sort?.active && (
        <Line
          type="linear"
          dataKey="active"
          stroke={"#49b657"}
          animationEasing="ease-in-out"
        />
      )}

      {sort?.trialing && (
        <Line
          type="linear"
          dataKey="trialing"
          stroke={"#1d9bf0"}
          animationEasing="ease-in-out"
        />
      )}

      {sort?.canceled && (
        <Line
          type="linear"
          dataKey="canceled"
          stroke={"#ff9900"}
          animationEasing="ease-in-out"
        />
      )}

      {sort?.person && (
        <Line
          type="linear"
          dataKey="person"
          stroke={"#515a747a"}
          animationEasing="ease-in-out"
        />
      )}
    </LC>
  );
};
