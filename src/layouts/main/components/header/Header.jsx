import styles from "./Header.module.scss";

import { useForm, FormProvider } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import * as rootSlice from "../../../../features/root/rootSlice";

import { User } from "./components/User";
import { Post } from "./components/Post";
import { Setting } from "./components/Setting";
import { Search } from "./components/Search";

export const Header = ({ index, data, edit }) => {
  const dispatch = useDispatch();
  const search = useSelector(rootSlice.search);
  const notice = useSelector(rootSlice.data);
  const methods = useForm({
    defaultValues: {
      value: search.value,
    },
  });
  const value = methods.watch("value");
  const [open, setOpen] = useState(false);
  const [control, setControl] = useState(false);

  useEffect(() => {
    methods.reset();
  }, [index, methods]);

  useEffect(() => {
    value && setControl(true);

    if (!value && control) {
      window.scrollTo(0, 0);
      dispatch(rootSlice.handleSearch());
      setControl(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [control, value]);

  const handleOpen = () => {
    setOpen(!open);
    window.removeEventListener("scroll", handleOpen);
  };

  const handleSortChange = (search) => {
    window.scrollTo(0, 0);
    dispatch(rootSlice.handleSearch(search));
    setOpen(!open);
  };
  const handleAttribuleChange = (filter) => {
    window.scrollTo(0, 0);
    dispatch(rootSlice.handleSearch({ filter: filter }));
  };

  const handleSearch = () => {
    window.scrollTo(0, 0);
    dispatch(rootSlice.handleSearch({ value: value }));
  };

  const handleReset = () => {
    window.scrollTo(0, 0);
    methods.reset();
    dispatch(rootSlice.handleSearch());
  };

  return index !== "setting" && index !== "mail" && index !== "account" ? (
    <FormProvider {...methods}>
      <form
        className={styles.header}
        onSubmit={methods.handleSubmit(handleSearch)}
      >
        {index === "companys" || index === "persons" ? (
          <User
            index={index}
            search={search}
            notice={notice}
            handleAttribuleChange={handleAttribuleChange}
          />
        ) : (
          (index === "matters" || index === "resources") && (
            <Post
              search={search}
              handleAttribuleChange={handleAttribuleChange}
            />
          )
        )}
        <Search
          index={index}
          open={open}
          handleOpen={handleOpen}
          handleReset={handleReset}
          handleSortChange={handleSortChange}
        />
      </form>
    </FormProvider>
  ) : (
    <Setting index={index} data={data} edit={edit} />
  );
};
