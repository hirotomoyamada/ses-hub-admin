import styles from "../List.module.scss";

import Loader from "react-loader-spinner";

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
      className={`${styles.list_inner_load} ${
        page === hit.pages && styles.list_inner_load_none
      }`}
    >
      {page < hit.pages && (
        <Loader type="Oval" color="#49b757" height={32} width={32} />
      )}
    </div>
  );
};
