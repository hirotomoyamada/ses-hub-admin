import { useEffect, useState } from "react";
import styles from "./DashBoard.module.scss";
import { Oval } from "react-loader-spinner";

import { useDispatch, useSelector } from "react-redux";
import { useChart } from "hooks/useChart";
import * as rootSlice from "features/root/rootSlice";
import { fetchActivity } from "features/root/actions";
import { PageProvider } from "components/provider/page/PageProvider";
import { Header } from "components/header/dashboard/Header";
import { Chart } from "./components/Chart";

export type Span = "total" | "day" | "week" | "month";

export type Sort = {
  active: boolean;
  trialing: boolean;
  canceled: boolean;
  person: boolean;
};

export const DashBoard: React.FC = () => {
  const dispatch = useDispatch();
  const [ref, width, height, columns] = useChart();
  const fetch = useSelector(rootSlice.load).list;
  const activity = useSelector(rootSlice.activity);
  const [span, setSpan] = useState<Span>("day");
  const [sort, setSort] = useState<Sort>({
    active: true,
    trialing: true,
    canceled: true,
    person: true,
  });

  useEffect(() => {
    dispatch(fetchActivity({ span }));
  }, [dispatch, span]);

  return (
    <PageProvider header={<Header {...{ span, setSpan, sort, setSort }} />}>
      {!fetch ? (
        <div className={styles.dashboard} ref={ref}>
          {activity.map((data, i) => (
            <Chart
              key={i}
              width={width}
              height={height}
              columns={columns}
              data={data}
              sort={sort}
              span={span}
            />
          ))}
        </div>
      ) : (
        <div className={styles.dashboard_fetch}>
          <Oval color="#49b757" height={56} width={56} />
        </div>
      )}
    </PageProvider>
  );
};
