import styles from "./Setting.module.scss";

import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";

import * as userSlice from "../../../../features/user/userSlice";
import * as postSlice from "../../../../features/post/postSlice";

import { Information } from "./components/Information";
import { Agree } from "./components/Agree";
import { Maintenance } from "./components/Maintenance";

export const Setting = ({ data, index }) => {
  const dispatch = useDispatch();

  const methods = useForm({
    defaultValues: data,
  });

  const handleEdit = (data) => {
    dispatch(userSlice.editData(data));
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

        <button type="submit" className={styles.setting_btn}>
          保存
        </button>
      </form>
    </FormProvider>
  );
};
