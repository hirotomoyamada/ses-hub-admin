import styles from "./Account.module.scss";

import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";

import * as rootSlice from "../../../../features/root/rootSlice";

import { Btn } from "../../components/btn/Btn";
import { Input } from "./components/input/Input";
import { Toggle } from "./components/toggle/Toggle";
import { Profile } from "./components/profile/Profile";

export const Account = ({ index }) => {
  const dispatch = useDispatch();

  const methods = useForm({});

  const handleEdit = () => {};

  const handleIndex = (index) => {
    dispatch(rootSlice.handleIndex({ edit: index }));
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles.account}
        onSubmit={methods.handleSubmit(handleEdit)}
      >
        <Main index={index} />
        <Btn handleIndex={handleIndex} index={index} />
      </form>
    </FormProvider>
  );
};

const Main = ({ index }) => {
  const account = [];
  const length = 20;

  for (let i = 0; i <= length; i++) {
    account.push(
      <div className={styles.account_container} key={i}>
        <div className={styles.account_wrap}>
          <Input i={i} index={index} />
          <Toggle i={i} />
        </div>
        <Profile i={i} />
      </div>
    );
  }

  return account;
};
