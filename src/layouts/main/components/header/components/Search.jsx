import styles from "../Header.module.scss";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import FilterListIcon from "@material-ui/icons/FilterList";

import { useFormContext } from "react-hook-form";

import { Command } from "../../../../../components/command/Command";

export const Search = ({
  index,
  open,
  handleOpen,
  handleReset,
  handleSortChange,
}) => {
  const { register } = useFormContext();

  return (
    <div className={styles.header_search}>
      <button type="submit">
        <SearchIcon
          className={`${styles.header_search_icon} ${styles.header_search_icon_search}`}
        />
      </button>

      <input
        className={styles.header_input}
        placeholder="検索"
        {...register("value")}
      />

      <button
        type="button"
        onClick={handleReset}
        className={styles.header_search_btn}
      >
        <CloseIcon className={styles.header_search_icon} />
      </button>

      {index !== "rerouces" && (
        <div className={styles.header_cmd}>
          <button
            type="button"
            onClick={handleOpen}
            className={styles.header_search_btn}
          >
            <FilterListIcon className={styles.header_search_icon} />
          </button>
          {open && (
            <Command
              sort
              index={index}
              open={open}
              handleSortChange={handleSortChange}
              handleOpen={handleOpen}
            />
          )}
        </div>
      )}
    </div>
  );
};
