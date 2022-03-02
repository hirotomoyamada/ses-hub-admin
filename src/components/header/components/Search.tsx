import styles from "../Header.module.scss";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import FilterListIcon from "@material-ui/icons/FilterList";

import { useFormContext } from "react-hook-form";

import { Command } from "components/command/Command";
import { Page } from "features/root/initialState";

interface PropType {
  index: Page;
  open: boolean;
  handleOpen: () => void;
  handleReset: () => void;
  handleSortChange: ({
    target,
    type,
  }: {
    target: string;
    type: "asc" | "desc";
  }) => void;
}

export const Search: React.FC<PropType> = ({
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

      {index !== "resources" && (
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
