import React from "react";

import { LineChart as LC, Line, XAxis, Tooltip } from "recharts";

import { Activity } from "features/root/initialState";
import { Sort } from "../DashBoard";

interface PropType {
  width: number;
  height: number;
  columns: number;
  data: Activity;
  sort: Sort;
}

export const LineChart: React.FC<PropType> = ({
  width,
  height,
  columns,
  data,
  sort,
}) => {
  return (
    <LC
      width={
        data.key !== "login"
          ? width
          : (width + (columns !== 1 ? (columns === 3 ? 32 : 24) : 0)) * columns
      }
      height={height}
      data={[...data.log].reverse() || []}
    >
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
      />

      {sort.active && (
        <Line
          type="linear"
          dataKey="active"
          stroke={"#49b657"}
          animationEasing="ease-in-out"
        />
      )}

      {sort.trialing && (
        <Line
          type="linear"
          dataKey="trialing"
          stroke={"#1d9bf0"}
          animationEasing="ease-in-out"
        />
      )}

      {sort.canceled && (
        <Line
          type="linear"
          dataKey="canceled"
          stroke={"#ff9900"}
          animationEasing="ease-in-out"
        />
      )}

      {sort.person && (
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
