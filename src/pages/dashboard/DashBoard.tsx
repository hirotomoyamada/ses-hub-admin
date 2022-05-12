import styles from "./DashBoard.module.scss";
import { PageProvider } from "components/provider/page/PageProvider";
import { Header } from "components/header/dashboard/Header";

export const DashBoard: React.FC = () => {
  return (
    <PageProvider header={<Header />}>
      <div className={styles.dashboard}>ダッシュボード</div>
    </PageProvider>
  );
};
