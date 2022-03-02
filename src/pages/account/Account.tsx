import styles from "./Account.module.scss";

import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import * as rootSlice from "../../features/root/rootSlice";
import * as userSlice from "../../features/user/userSlice";

import { Header } from "./components/header/Header";
import { Input } from "./components/input/Input";
import { Toggle } from "./components/toggle/Toggle";
import { Profile } from "./components/profile/Profile";
import { Btn } from "../../components/btn/Btn";

import { updateAccount } from "features/root/actions";
import { Edit } from "features/root/initialState";
import { Accounts } from "features/user/initialState";
import { Company } from "types/posts";

interface PropType {
  index: Edit;
}

type Data = {
  account: { uid: string; status: string; option: string }[];
};

export const Account: React.FC<PropType> = ({ index }) => {
  const dispatch = useDispatch();
  const accounts = useSelector(userSlice.accounts);
  const [display, setDisplay] = useState(5);

  const methods = useForm<Data>();

  const handleEdit: SubmitHandler<Data> = (data): void => {
    const array = data.account
      .filter(
        (account, index) =>
          account.uid &&
          accounts?.[index] &&
          "type" in (accounts[index] as Company) &&
          (accounts[index] as Company).type !== "child"
      )
      .map((account) =>
        account.option !== "none"
          ? isNaN(Number(account.status))
            ? {
                uid: account.uid,
                status: account.status,
                option: account.option,
              }
            : {
                uid: account.uid,
                status: "active",
                account: Number(account.status),
                option: account.option,
              }
          : isNaN(Number(account.status))
          ? {
              uid: account.uid,
              status: account.status,
            }
          : {
              uid: account.uid,
              status: "active",
              account: Number(account.status),
            }
      );

    array.length && dispatch(updateAccount(array));
  };

  const handleIndex = (index: Edit): void => {
    dispatch(rootSlice.handleIndex({ edit: index }));
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles.account}
        onSubmit={methods.handleSubmit(handleEdit)}
      >
        <Header />
        <Main index={index} accounts={accounts} display={display} />

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

const Main = ({
  index,
  accounts,
  display,
}: {
  index: Edit;
  accounts: Accounts;
  display: number;
}) => {
  const account = [];
  const length = display;

  for (let i = 0; i < length; i++) {
    account.push(
      <div className={styles.account_container} key={i}>
        <div className={styles.account_wrap}>
          <Input i={i} index={index} />
          <Toggle i={i} account={accounts[i]} />
        </div>
        <Profile account={accounts[i]} />
      </div>
    );
  }

  return <div className={styles.account_main}>{account}</div>;
};
