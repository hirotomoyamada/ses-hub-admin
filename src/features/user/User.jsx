import styles from "./User.module.scss";

import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

import * as userSlice from "../user/userSlice";

import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

import * as companys from "./functions/companys";
import * as persons from "./functions/persons";

export const User = ({ index, handleClose }) => {
  const dispatch = useDispatch();

  const user = useSelector(userSlice.user);

  const [cover, setCover] = useState(false);
  const [icon, setIcon] = useState(false);

  const methods = useForm({
    defaultValues:
      index === "companys"
        ? companys.defaultValues(user)
        : index === "persons" && persons.defaultValues(user),
  });

  useEffect(() => {
    methods.reset(
      index === "companys"
        ? companys.defaultValues(user)
        : index === "persons" && persons.defaultValues(user)
    );
  }, [index, methods, user]);

  const handleBack = () => {
    setCover(false);
    setIcon(false);
  };

  const handleEdit = (data) => {
    const object =
      index === "companys"
        ? {
            ...user,
            ...companys.object(data),
          }
        : index === "persons" && {
            ...user,
            ...persons.object(data),
          };

    dispatch(userSlice.editUser({ index: index, user: object }));
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.user} onSubmit={methods.handleSubmit(handleEdit)}>
        <Header
          user={user}
          icon={icon}
          cover={cover}
          handleBack={handleBack}
          handleClose={handleClose}
        />

        <Main
          index={index}
          user={user}
          icon={icon}
          setIcon={setIcon}
          cover={cover}
          setCover={setCover}
        />
      </form>
    </FormProvider>
  );
};
