import styles from "./Account.module.scss";

import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import * as rootSlice from "../../../../features/root/rootSlice";
import * as userSlice from "../../../../features/user/userSlice";

import { Btn } from "../../components/btn/Btn";
import { Input } from "./components/input/Input";
import { Toggle } from "./components/toggle/Toggle";
import { Profile } from "./components/profile/Profile";

export const Account = ({ index }) => {
  const dispatch = useDispatch();
  const users = useSelector(userSlice.users);

  const methods = useForm({});

  const handleEdit = (data) => {
    console.log(data);
  };

  const handleIndex = (index) => {
    dispatch(rootSlice.handleIndex({ edit: index }));
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles.account}
        onSubmit={methods.handleSubmit(handleEdit)}
      >
        <Main index={index} users={users} />
        <Btn handleIndex={handleIndex} index={index} disable={true} />
      </form>
    </FormProvider>
  );
};

const Main = ({ index, users }) => {
  const account = [];
  const length = 20;

  for (let i = 0; i <= length; i++) {
    account.push(
      <div className={styles.account_container} key={i}>
        <div className={styles.account_wrap}>
          <Input i={i} index={index} />
          <Toggle i={i} user={users[i]} />
        </div>
        <Profile user={users[i]} />
      </div>
    );
  }

  return account;
};
