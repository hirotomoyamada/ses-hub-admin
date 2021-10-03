import styles from "./Setting.module.scss";

import { useEffect } from "react";

import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";

import * as userSlice from "../../../../features/user/userSlice";
import * as postSlice from "../../../../features/post/postSlice";

import { Information } from "./components/Information";
import { Agree } from "./components/Agree";
import { Maintenance } from "./components/Maintenance";
import { Btn } from "./components/Btn";

export const Setting = ({ data, index }) => {
  const dispatch = useDispatch();

  const methods = useForm({
    defaultValues:
      index === "companys"
        ? data.seshub
        : index === "persons" && data.freelanceDirect,
  });

  useEffect(() => {
    const value =
      index === "companys"
        ? data.seshub
        : index === "persons" && data.freelanceDirect;
    methods.reset(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const handleEdit = (data) => {
    data.index = index;
    dispatch(userSlice.editData(data));
  };

  const handleIndex = (index) => {
    dispatch(postSlice.selectIndex({ edit: index }));
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles.setting}
        onSubmit={methods.handleSubmit(handleEdit)}
      >
        <Maintenance />
        <Information />
        <Agree />

        <Btn handleIndex={handleIndex} index={index} />
      </form>
    </FormProvider>
  );
};
