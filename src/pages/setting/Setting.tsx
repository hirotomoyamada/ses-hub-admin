import styles from "./Setting.module.scss";

import { useEffect } from "react";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

import { editData } from "features/root/actions";
import * as rootSlice from "features/root/rootSlice";

import { Information } from "./components/Information";
import { Agree } from "./components/Agree";
import { Maintenance } from "./components/Maintenance";

import { Btn } from "components/btn/Btn";
import { Edit } from "features/root/initialState";
import { Data } from "types/auth";

interface PropType {
  index: Edit;
  data: { seshub: Data; freelanceDirect: Data };
}

export type SettingData = Pick<
  Data,
  "information" | "agree" | "maintenance"
> & {
  index: "companys" | "persons";
};

export const Setting: React.FC<PropType> = ({ data, index }) => {
  const dispatch = useDispatch();

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

  const handleIndex = (index: Edit) => {
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
