import styles from "../../../Main.module.scss";

import Loader from "react-loader-spinner";

export const Load = ({ load, page, hit }) => {
  return (
    <div
      ref={load}
      className={`${styles.main_list_load} ${
        page === hit.pages && styles.main_list_load_none
      }`}
    >
      {page < hit.pages && (
        <Loader type="Oval" color="#49b757" height={32} width={32} />
      )}
    </div>
  );
};
