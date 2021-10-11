import styles from "./Mail.module.scss";

import { useEffect } from "react";

import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";

import { sendMail } from "../../../../features/user/functions/sendMail";
import * as postSlice from "../../../../features/post/postSlice";

import { Btn } from "./components/Btn";
import { Main } from "./components/Main";
import { Target } from "./components/Target";

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
    dispatch(postSlice.selectIndex({ edit: index }));
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
