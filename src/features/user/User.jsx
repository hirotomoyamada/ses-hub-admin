import styles from "./User.module.scss";

import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

import * as postSlice from "../post/postSlice";

import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

import { companys } from "./functions/companys";
import { persons } from "./functions/persons";

export const User = ({ index, handleClose }) => {
  const dispatch = useDispatch();

  const user = useSelector(postSlice.post);

  const [cover, setCover] = useState(false);
  const [icon, setIcon] = useState(false);

  const methods = useForm({
    defaultValues:
      index === "companys"
        ? companys(user)
        : index === "persons" && persons(user),
  });

  useEffect(() => {
    methods.reset(
      index === "companys"
        ? companys(user)
        : index === "persons" && persons(user)
    );
  }, [index, methods, user]);

  const handleBack = () => {
    setCover(false);
    setIcon(false);
  };

  const handleEdit = (data) => {
    data.uid = user.uid;

    dispatch(postSlice.editUser({ index: index, user: data }));
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.user} onSubmit={methods.handleSubmit(handleEdit)}>
        <Header
          handleClose={handleClose}
          handleBack={handleBack}
          cover={cover}
          icon={icon}
          user={user}
        />

        <Main
          index={index}
          icon={icon}
          setIcon={setIcon}
          cover={cover}
          setCover={setCover}
        />
      </form>
    </FormProvider>
  );
};
