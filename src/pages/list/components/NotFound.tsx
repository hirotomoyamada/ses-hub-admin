import styles from "../List.module.scss";

import { Oval } from "react-loader-spinner";

import { useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";
import { Index } from "features/root/initialState";

interface PropType {
  index: Index;
  list: React.RefObject<HTMLDivElement>;
}

export const NotFound: React.FC<PropType> = ({ index, list }) => {
  const load = useSelector(rootSlice.load).list;

  return (
    <div className={styles.list_none} ref={list}>
      {load ? (
        <Oval color="#49b757" height={56} width={56} />
      ) : (
        <span className={styles.list_none_message}>
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
