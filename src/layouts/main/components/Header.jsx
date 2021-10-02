import styles from "../Main.module.scss";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import FilterListIcon from "@material-ui/icons/FilterList";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import * as postSlice from "../../../features/post/postSlice";

import { Command } from "../../../components/command/Command";

import { timestamp } from "../../../functions/timestamp";

export const Header = ({ index, data }) => {
  const dispatch = useDispatch();
  const search = useSelector(postSlice.search);
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      value: search.value,
    },
  });
  const value = watch("value");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    reset();
  }, [index, reset]);

  useEffect(() => {
    if (value === "") {
      window.scrollTo(0, 0);
      dispatch(postSlice.handleSearch());
    }
  }, [dispatch, value]);

  const handleOpen = () => {
    setOpen(!open);
    window.removeEventListener("scroll", handleOpen);
  };

  const handleSortChange = (search) => {
    window.scrollTo(0, 0);
    dispatch(postSlice.handleSearch(search));
    setOpen(!open);
  };
  const handleAttribuleChange = (filter) => {
    window.scrollTo(0, 0);
    dispatch(postSlice.handleSearch({ filter: filter }));
  };

  const handleSearch = () => {
    window.scrollTo(0, 0);
    dispatch(postSlice.handleSearch({ value: value }));
  };

  const handleReset = () => {
    window.scrollTo(0, 0);
    reset();
    dispatch(postSlice.handleSearch());
  };

  return index !== "setting" ? (
    <form className={styles.main_header} onSubmit={handleSubmit(handleSearch)}>
      {index === "companys" ? (
        <div className={styles.main_header_status}>
          <button
            type="button"
            className={`${styles.main_header_status_btn} ${
              search.filter === "all" && styles.main_header_status_btn_all
            }`}
            onClick={() => handleAttribuleChange("all")}
          >
            すべて
          </button>

          <button
            type="button"
            className={`${styles.main_header_status_btn} ${
              search.filter === "status:hold" &&
              styles.main_header_status_btn_hold
            }`}
            onClick={() => handleAttribuleChange("status:hold")}
          >
            未認証
          </button>

          <button
            type="button"
            className={`${styles.main_header_status_btn} ${
              search.filter === "status:disable" &&
              styles.main_header_status_btn_disable
            }`}
            onClick={() => handleAttribuleChange("status:disable")}
          >
            停止
          </button>
        </div>
      ) : (
        (index === "matters" || index === "resources") && (
          <div className={styles.main_header_status}>
            <button
              type="button"
              className={`${styles.main_header_status_btn} ${
                search.filter === "all" && styles.main_header_status_btn_all
              }`}
              onClick={() => handleAttribuleChange("all")}
            >
              すべて
            </button>

            <button
              type="button"
              className={`${styles.main_header_status_btn} ${
                search.filter === "display:public" &&
                styles.main_header_status_btn_public
              }`}
              onClick={() => handleAttribuleChange("display:public")}
            >
              公開
            </button>

            <button
              type="button"
              className={`${styles.main_header_status_btn} ${
                search.filter === "display:private" &&
                styles.main_header_status_btn_private
              }`}
              onClick={() => handleAttribuleChange("display:private")}
            >
              非公開
            </button>
          </div>
        )
      )}

      <div className={styles.main_header_search}>
        <button type="submit">
          <SearchIcon
            className={`${styles.main_header_search_icon} ${styles.main_header_search_icon_search}`}
          />
        </button>

        <input
          className={styles.main_header_input}
          placeholder="検索"
          {...register("value")}
        />

        <button
          type="button"
          onClick={handleReset}
          className={styles.main_header_search_btn}
        >
          <CloseIcon className={styles.main_header_search_icon} />
        </button>

        {index !== "rerouces" && (
          <div className={styles.main_header_cmd}>
            <button
              type="button"
              onClick={handleOpen}
              className={styles.main_header_search_btn}
            >
              <FilterListIcon className={styles.main_header_search_icon} />
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
    </form>
  ) : (
    <div className={`${styles.main_header} ${styles.main_header_setting}`}>
      <span>最終更新：{timestamp(data.information.updateAt)}</span>
    </div>
  );
};
