import styles from "../List.module.scss";

import Loader from "react-loader-spinner";

import { useSelector } from "react-redux";
import * as rootSlice from "../../../../../features/root/rootSlice";

export const NotFound = ({ index }) => {
  const load = useSelector(rootSlice.load).list;

  return (
    <div className={styles.list_inner_none}>
      {load ? (
        <Loader type="Oval" color="#49b757" height={56} width={56} />
      ) : (
        <span className={styles.list_inner_none_message}>
          {index === "matters"
            ? "案件情報がありません"
            : index === "resources"
            ? "人材情報がありません"
            : index === "companys" ||
              index === "enable" ||
              index === "hold" ||
              index === "disable"
            ? "メンバー情報がありません"
            : index === "persons" && "エンジニア情報がありません"}
        </span>
      )}
    </div>
  );
};
