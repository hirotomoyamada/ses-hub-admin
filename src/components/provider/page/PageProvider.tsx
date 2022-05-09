import React from "react";
import styles from "./PageProvider.module.scss";

import { Fetch } from "components/load/Load";
import { Side } from "components/side/Side";

interface PropType {
  header?: JSX.Element;
  side?: boolean;
}

export const PageProvider: React.FC<PropType> = ({
  header,
  side,
  children,
}) => {
  return (
    <div className={`${styles.page} ${side && styles.page_side}`}>
      <Fetch />

      <div className={`${styles.page_inner} ${!header && styles.page_single}`}>
        {header}

        {children}
      </div>

      {side && <Side />}
    </div>
  );
};
