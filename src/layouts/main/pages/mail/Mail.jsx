import styles from "./Mail.module.scss";

import { useEffect } from "react";

import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";

import { sendMail } from "../../../../features/root/actions/sendMail";
import * as rootSlice from "../../../../features/root/rootSlice";

import { Main } from "./components/Main";
import { Target } from "./components/Target";

import { Btn } from "../../components/btn/Btn";

export const Mail = ({ index, data }) => {
  const dispatch = useDispatch();

  const methods = useForm({
    defaultValues:
      index === "companys"
        ? data.seshub.mail
        : index === "persons" && data.freelanceDirect.mail,
  });

  useEffect(() => {
    const value =
      index === "companys"
        ? data.seshub.mail
        : index === "persons" && data.freelanceDirect.mail;
    methods.reset(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const handleEdit = (data) => {
    data.index = index;
    dispatch(sendMail(data));
  };

  const handleIndex = (index) => {
    dispatch(rootSlice.handleIndex({ edit: index }));
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.mail} onSubmit={methods.handleSubmit(handleEdit)}>
        <Target />
        <Main />
        <Btn handleIndex={handleIndex} index={index} />
      </form>
    </FormProvider>
  );
};
