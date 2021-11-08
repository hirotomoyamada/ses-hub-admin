import styles from "../../../Main.module.scss";

import Loader from "react-loader-spinner";

import { useSelector } from "react-redux";
import * as rootSlice from "../../../../../features/root/rootSlice";

export const NotFound = ({ index, list }) => {
  const load = useSelector(rootSlice.load).list;

  return (
    <div className={styles.main_list_none} ref={list}>
      {load ? (
        <Loader type="Oval" color="#49b757" height={56} width={56} />
      ) : (
        <span className={styles.main_list_none_message}>
          {index === "matters"
            ? "案件情報がありません"
            : index === "resources"
            ? "人材情報がありません"
            : index === "companys"
            ? "メンバー情報がありません"
            : index === "persons" && "エンジニア情報がありません"}
        </span>
      )}
    </div>
  );
};
