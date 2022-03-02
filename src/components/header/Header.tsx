import styles from "./Header.module.scss";

import { useForm, FormProvider } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import * as rootSlice from "features/root/rootSlice";

import { User } from "./components/User";
import { Post } from "./components/Post";
import { Setting } from "./components/Setting";
import { Search } from "./components/Search";

import { Edit, Page } from "features/root/initialState";
import { Data } from "types/auth";

interface PropType {
  index: Page;
  edit?: Edit;
  data?: { seshub: Data; freelanceDirect: Data };
}

interface FormData {
  value: string;
}

export const Header: React.FC<PropType> = ({ index, data, edit }) => {
  const dispatch = useDispatch();
  const search = useSelector(rootSlice.search);
  const methods = useForm<FormData>({
    defaultValues: {
      value: search.value ? search.value : "",
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
  }, [control, value]);

  const handleOpen = () => {
    setOpen(!open);
    window.removeEventListener("scroll", handleOpen);
  };

  const handleSortChange = ({
    target,
    type,
  }: {
    target: string;
    type: string;
  }): void => {
    window.scrollTo(0, 0);
    dispatch(rootSlice.handleSearch({ target, type }));
    setOpen(!open);
  };
  const handleAttribuleChange = (filter: string): void => {
    window.scrollTo(0, 0);
    dispatch(rootSlice.handleSearch({ filter: filter }));
  };

  const handleSearch = (): void => {
    window.scrollTo(0, 0);
    dispatch(rootSlice.handleSearch({ value: value }));
  };

  const handleReset = (): void => {
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
            data={data}
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
