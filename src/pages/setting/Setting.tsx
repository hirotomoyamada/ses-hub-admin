import styles from "./Setting.module.scss";

import { useEffect } from "react";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { editData } from "features/root/actions";
import * as rootSlice from "features/root/rootSlice";

import { Information } from "./components/Information";
import { Agree } from "./components/Agree";
import { Maintenance } from "./components/Maintenance";

import { Data } from "types/auth";
import { PageProvider } from "components/provider/page/PageProvider";
import { Header } from "components/header/setting/Header";

export type SettingData = Pick<
  Data,
  "information" | "agree" | "maintenance"
> & {
  index: "companys" | "persons";
};

export const Setting: React.FC = () => {
  const dispatch = useDispatch();
  const index = useSelector(rootSlice.index);
  const data = useSelector(rootSlice.data);

  const methods = useForm<SettingData>({
    defaultValues:
      index === "companys"
        ? {
            information: data.seshub.information,
            agree: data.seshub.agree,
            maintenance: data.seshub.maintenance,
          }
        : index === "persons"
        ? {
            information: data.freelanceDirect.information,
            agree: data.freelanceDirect.agree,
            maintenance: data.freelanceDirect.maintenance,
          }
        : undefined,
  });

  useEffect(() => {
    if (index !== "companys" && index !== "persons")
      dispatch(rootSlice.handleIndex("companys"));
  }, [index]);

  useEffect(() => {
    const value =
      index === "companys"
        ? {
            information: data.seshub.information,
            agree: data.seshub.agree,
            maintenance: data.seshub.maintenance,
          }
        : index === "persons"
        ? {
            information: data.freelanceDirect.information,
            agree: data.freelanceDirect.agree,
            maintenance: data.freelanceDirect.maintenance,
          }
        : undefined;
    methods.reset(value);
  }, [index]);

  const handleEdit: SubmitHandler<SettingData> = (data) => {
    if (index === "companys" || index === "persons") {
      data.index = index;
      dispatch(editData(data));
    }
  };

  return (
    <PageProvider header={<Header index={index} data={data} />}>
      <FormProvider {...methods}>
        <form
          id="setting"
          className={styles.setting}
          onSubmit={methods.handleSubmit(handleEdit)}
        >
          <Maintenance />
          <Information />
          <Agree />
        </form>
      </FormProvider>
    </PageProvider>
  );
};
