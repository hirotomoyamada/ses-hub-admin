import styles from "./Mail.module.scss";

import { useEffect } from "react";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

import { sendMail } from "features/root/actions";
import * as rootSlice from "features/root/rootSlice";

import { Main } from "./components/Main";
import { Target } from "./components/Target";

import { Btn } from "components/btn/Btn";
import { Edit } from "features/root/initialState";
import { Data } from "types/auth";

interface PropType {
  index: Edit;
  data: { seshub: Data; freelanceDirect: Data };
}

export const Mail: React.FC<PropType> = ({ index, data }) => {
  const dispatch = useDispatch();

  const methods = useForm<Data["mail"]>({
    defaultValues:
      index === "companys"
        ? data.seshub.mail
        : index === "persons"
        ? data.freelanceDirect.mail
        : undefined,
  });

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

  const handleIndex = (index: Edit) => {
    dispatch(rootSlice.handleIndex({ edit: index }));
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.mail} onSubmit={methods.handleSubmit(handleEdit)}>
        <Target index={index} />
        <Main />
        <Btn handleIndex={handleIndex} index={index} mail />
      </form>
    </FormProvider>
  );
};
