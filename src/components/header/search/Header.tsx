import styles from "./Header.module.scss";

import { useForm, FormProvider } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import * as rootSlice from "features/root/rootSlice";

import * as Sort from "./components/Sort";
import { SearchBox } from "./components/SearchBox";

interface FormData {
  value: string;
}

interface PropType {
  index: "matters" | "resources" | "companys" | "persons";
}

export const Header: React.FC<PropType> = ({ index }) => {
  const dispatch = useDispatch();
  const search = useSelector(rootSlice.search);
  const data = useSelector(rootSlice.data);
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

  return (
    <FormProvider {...methods}>
      <form
        className={styles.header}
        onSubmit={methods.handleSubmit(handleSearch)}
      >
        {(() => {
          switch (index) {
            case "companys":
            case "persons":
              return (
                <Sort.User
                  index={index}
                  search={search}
                  data={data}
                  handleAttribuleChange={handleAttribuleChange}
                />
              );

            case "matters":
            case "resources":
              return (
                <Sort.Post
                  search={search}
                  handleAttribuleChange={handleAttribuleChange}
                />
              );

            default:
              return <></>;
          }
        })()}

        <SearchBox
          index={index}
          open={open}
          handleOpen={handleOpen}
          handleReset={handleReset}
          handleSortChange={handleSortChange}
        />
      </form>
    </FormProvider>
  );
};
