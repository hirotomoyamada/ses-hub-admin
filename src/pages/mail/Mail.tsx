import styles from "./Mail.module.scss";

import { useEffect } from "react";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { sendMail } from "features/root/actions";
import * as rootSlice from "features/root/rootSlice";

import { Main } from "./components/Main";
import { Target } from "./components/Target";

import { Data } from "types/auth";
import { PageProvider } from "components/provider/page/PageProvider";
import { Header } from "components/header/setting/Header";

export const Mail: React.FC = () => {
  const dispatch = useDispatch();
  const index = useSelector(rootSlice.index);
  const data = useSelector(rootSlice.data);

  const methods = useForm<Data["mail"]>({
    defaultValues:
      index === "companys"
        ? data.seshub.mail
        : index === "persons"
        ? data.freelanceDirect.mail
        : undefined,
  });

  useEffect(() => {
    if (index !== "companys" && index !== "persons")
      dispatch(rootSlice.handleIndex("companys"));
  }, [index]);

  useEffect(() => {
    const value =
      index === "companys"
        ? data.seshub.mail
        : index === "persons"
        ? data.freelanceDirect.mail
        : undefined;
    methods.reset(value);
  }, [index]);

  const handleEdit: SubmitHandler<Data["mail"]> = (data) => {
    if (index === "companys" || index === "persons") {
      data.index = index;
      dispatch(sendMail(data));
    }
  };

  return (
    <PageProvider header={<Header index={index} data={data} />}>
      <FormProvider {...methods}>
        <form
          id="mail"
          className={styles.mail}
          onSubmit={methods.handleSubmit(handleEdit)}
        >
          <Target index={index} />
          <Main />
        </form>
      </FormProvider>
    </PageProvider>
  );
};
