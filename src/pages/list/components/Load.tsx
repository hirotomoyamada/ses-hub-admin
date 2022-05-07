import styles from "../List.module.scss";

import { Oval } from "react-loader-spinner";

interface PropType {
  load: React.RefObject<HTMLDivElement>;
  page: number;
  hit: {
    posts: number;
    pages: number;
    currentPage: number;
  };
}

export const Load: React.FC<PropType> = ({ load, page, hit }) => {
  return (
    <div
      ref={load}
      className={`${styles.list_load} ${
        page === hit.pages && styles.list_load_none
      }`}
    >
      {page < hit.pages && <Oval color="#49b757" height={32} width={32} />}
    </div>
  );
};
