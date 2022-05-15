import styles from "./Header.module.scss";
import * as DashBoard from "pages/dashboard/DashBoard";

import { Page } from "./components/Page";
import { Span } from "./components/Span";
import { Sort } from "./components/Sort";

interface PropType {
  page: DashBoard.Page;
  setPage: React.Dispatch<React.SetStateAction<DashBoard.Page>>;
  sort: DashBoard.Sort;
  setSort: React.Dispatch<React.SetStateAction<DashBoard.Sort>>;
  span: DashBoard.Span;
  setSpan: React.Dispatch<React.SetStateAction<DashBoard.Span>>;
}

export const Header: React.FC<PropType> = ({
  page,
  setPage,
  sort,
  setSort,
  span,
  setSpan,
}) => {
  return (
    <div className={styles.header}>
      <Page {...{ page, setPage }} />

      <div className={styles.header_wrap}>
        {page === "users" && <Sort {...{ sort, setSort }} />}

        <Span {...{ span, setSpan }} />
      </div>
    </div>
  );
};
