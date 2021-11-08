import styles from "./Setting.module.scss";

import { useEffect } from "react";

import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";

import { editData } from "../../../../features/root/actions/editData";
import * as rootSlice from "../../../../features/root/rootSlice";

import { Information } from "./components/Information";
import { Agree } from "./components/Agree";
import { Maintenance } from "./components/Maintenance";

import { Btn } from "../../components/btn/Btn";

export const Setting = ({ data, index }) => {
  const dispatch = useDispatch();

  const methods = useForm({
    defaultValues:
      index === "companys"
        ? {
            information: data.seshub.information,
            agree: data.seshub.agree,
            maintenance: data.seshub.maintenance,
          }
        : index === "persons" && {
            information: data.freelanceDirect.information,
            agree: data.freelanceDirect.agree,
            maintenance: data.freelanceDirect.maintenance,
          },
  });

  useEffect(() => {
    const value =
      index === "companys"
        ? {
            information: data.seshub.information,
            agree: data.seshub.agree,
            maintenance: data.seshub.maintenance,
          }
        : index === "persons" && {
            information: data.freelanceDirect.information,
            agree: data.freelanceDirect.agree,
            maintenance: data.freelanceDirect.maintenance,
          };
    methods.reset(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const handleEdit = (data) => {
    data.index = index;
    dispatch(editData(data));
  };

  const handleIndex = (index) => {
    dispatch(rootSlice.handleIndex({ edit: index }));
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
