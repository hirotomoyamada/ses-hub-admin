import styles from "./Header.module.scss";
import * as DashBoard from "pages/dashboard/DashBoard";

import { Index } from "./components/Index";
import { Span } from "./components/Span";
import { Sort } from "./components/Sort";

interface PropType {
  index: DashBoard.Index;
  setIndex: React.Dispatch<React.SetStateAction<DashBoard.Index>>;
  sort: DashBoard.Sort;
  setSort: React.Dispatch<React.SetStateAction<DashBoard.Sort>>;
  span: DashBoard.Span;
  setSpan: React.Dispatch<React.SetStateAction<DashBoard.Span>>;
}

export const Header: React.FC<PropType> = ({
  index,
  setIndex,
  sort,
  setSort,
  span,
  setSpan,
}) => {
  return (
    <div className={styles.header}>
      <Index {...{ index, setIndex }} />

      <div className={styles.header_wrap}>
        {index === "users" && <Sort {...{ sort, setSort }} />}

        <Span {...{ span, setSpan }} />
      </div>
    </div>
  );
};
