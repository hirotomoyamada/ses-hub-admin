import React from "react";
import styles from "./Header.module.scss";

import CountUp from "react-countup";

import { Sort } from "../../DashBoard";
import { Analytics } from "features/root/initialState";

interface PropType {
  data: Analytics;
  sort?: Sort;
}

export const Header: React.FC<PropType> = ({ sort, data }) => {
  return (
    <div
      className={`
        ${`${styles.header}`}
      `}
    >
      <p className={styles.header_ttl}>{data?.label}</p>

      <div className={styles.header_wrap}>
        {!sort && data.active !== null && !isNaN(Number(data?.active)) && (
          <CountUp
            className={`${styles.header_total}`}
            style={{ color: "#49b657" }}
            start={0}
            end={data.active || 0}
            separator=","
            duration={1.5}
            useEasing={true}
          />
        )}

        {sort?.active &&
          data.active !== null &&
          !isNaN(Number(data?.active)) && (
            <CountUp
              className={`${styles.header_total}`}
              style={{ color: "#49b657" }}
              start={0}
              end={data.active || 0}
              separator=","
              duration={1.5}
              useEasing={true}
            />
          )}

        {sort?.trialing &&
          "trialing" in data &&
          data.trialing !== null &&
          !isNaN(Number(data.trialing)) && (
            <CountUp
              className={`${styles.header_total}`}
              style={{ color: "#1d9bf0" }}
              start={0}
              end={data.trialing || 0}
              separator=","
              duration={1.5}
              useEasing={true}
            />
          )}

        {sort?.canceled &&
          "canceled" in data &&
          data.canceled !== null &&
          !isNaN(Number(data.canceled)) && (
            <CountUp
              className={`${styles.header_total}`}
              style={{ color: "#ff9900" }}
              start={0}
              end={data.canceled || 0}
              separator=","
              duration={1.5}
              useEasing={true}
            />
          )}

        {sort?.person &&
          "person" in data &&
          data.person !== null &&
          !isNaN(Number(data.person)) && (
            <CountUp
              className={`${styles.header_total}`}
              style={{ color: "#515a74" }}
              start={0}
              end={data.person || 0}
              separator=","
              duration={1.5}
              useEasing={true}
            />
          )}
      </div>
    </div>
  );
};
