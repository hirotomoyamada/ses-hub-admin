import styles from "./Account.module.scss";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import * as rootSlice from "../../../../features/root/rootSlice";
import * as userSlice from "../../../../features/user/userSlice";

import { Header } from "./components/header/Header";
import { Input } from "./components/input/Input";
import { Toggle } from "./components/toggle/Toggle";
import { Profile } from "./components/profile/Profile";
import { Btn } from "../../components/btn/Btn";

import { updateUser } from "../../../../features/root/actions/updateUser";

export const Account = ({ index }) => {
  const dispatch = useDispatch();
  const users = useSelector(userSlice.users);
  const [display, setDisplay] = useState(5);

  const methods = useForm();

  const handleEdit = (data) => {
    const array = data.user
      .filter(
        (user, index) =>
          user.uid && !users?.[index]?.error && users?.[index]?.type !== "child"
      )
      .map((user) =>
        user.option !== "none"
          ? isNaN(Number(user.status))
            ? {
                uid: user.uid,
                status: user.status,
                option: user.option,
              }
            : {
                uid: user.uid,
                status: "active",
                account: Number(user.status),
                option: user.option,
              }
          : isNaN(Number(user.status))
          ? {
              uid: user.uid,
              status: user.status,
            }
          : {
              uid: user.uid,
              status: "active",
              account: Number(user.status),
            }
      );

    array.length && dispatch(updateUser(array));
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
        <Header />
        <Main index={index} users={users} display={display} />

        {display < 20 && (
          <button
            type="button"
            className={styles.account_btn}
            onClick={() => setDisplay((prev) => prev + 5)}
          >
            さらに表示する
          </button>
        )}

        <Btn handleIndex={handleIndex} index={index} disable={true} />
      </form>
    </FormProvider>
  );
};

const Main = ({ index, users, display }) => {
  const account = [];
  const length = display;

  for (let i = 0; i < length; i++) {
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

  return <div className={styles.account_main}>{account}</div>;
};
