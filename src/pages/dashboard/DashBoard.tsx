import { useEffect, useState } from "react";
import styles from "./DashBoard.module.scss";
import { Oval } from "react-loader-spinner";

import { useDispatch, useSelector } from "react-redux";
import { useChart } from "hooks/useChart";
import * as rootSlice from "features/root/rootSlice";
import { fetchDashBoard } from "features/root/actions";
import { PageProvider } from "components/provider/page/PageProvider";
import { Header } from "components/header/dashboard/Header";
import { Users } from "./components/Users";
import { Matters } from "./components/Matters";
import { Resources } from "./components/Resources";

export type Span = "total" | "day" | "week" | "month";

export type Sort = {
  active: boolean;
  trialing: boolean;
  canceled: boolean;
  person: boolean;
};

export type Index = "users" | "matters" | "resources";

export const DashBoard: React.FC = () => {
  const dispatch = useDispatch();
  const [ref, width, height, columns] = useChart();
  const fetch = useSelector(rootSlice.load).list;
  const analytics = useSelector(rootSlice.analytics);
  const [index, setIndex] = useState<Index>("users");
  const [span, setSpan] = useState<Span>("day");
  const [sort, setSort] = useState<Sort>({
    active: true,
    trialing: true,
    canceled: true,
    person: true,
  });

  useEffect(() => {
    if (index === "users") {
      dispatch(fetchDashBoard({ span }));
    } else {
      dispatch(fetchDashBoard({ index, span }));
    }
  }, [dispatch, span, index]);

  return (
    <PageProvider
      header={<Header {...{ index, setIndex, span, setSpan, sort, setSort }} />}
    >
      <div
        className={`${styles.dashboard} ${fetch && styles.dashboard_fetch}`}
        ref={ref}
      >
        {(() => {
          switch (true) {
            case fetch:
              return <Oval color="#49b757" height={56} width={56} />;

            case index === "users":
              return (
                <Users {...{ analytics, width, height, columns, sort, span }} />
              );

            case index === "matters":
              return (
                <Matters {...{ analytics, width, height, columns, span }} />
              );

            case index === "resources":
              return (
                <Resources {...{ analytics, width, height, columns, span }} />
              );

            default:
              return <></>;
          }
        })()}
      </div>
    </PageProvider>
  );
};
