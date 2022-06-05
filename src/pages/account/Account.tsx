import styles from "./Account.module.scss";

import { useEffect, useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import * as userSlice from "features/user/userSlice";
import * as rootSlice from "features/root/rootSlice";

import { Tag } from "./components/tag/Tag";
import { Input } from "./components/input/Input";
import { Toggle } from "./components/toggle/Toggle";
import { Profile } from "./components/profile/Profile";

import { updateAccount, UpdateAccount } from "features/root/actions";
import { Accounts } from "features/user/initialState";
import { Company } from "types/post";
import { PageProvider } from "components/provider/page/PageProvider";
import { Header } from "components/header/setting/Header";
import { Index } from "features/root/initialState";

export type Data = {
  account: {
    uid: string;
    status: string;
    freelanceDirect: string;
    analytics: string;
  }[];
};

export const Account: React.FC = () => {
  const dispatch = useDispatch();
  const index = useSelector(rootSlice.index);
  const accounts = useSelector(userSlice.accounts);
  const [display, setDisplay] = useState(5);

  const methods = useForm<Data>();

  useEffect(() => {
    if (index !== "companys") dispatch(rootSlice.handleIndex("companys"));
  }, [index]);

  const handleEdit: SubmitHandler<Data> = ({ account }): void => {
    const data = account
      .filter(
        ({ uid }, index) =>
          uid &&
          accounts?.[index] &&
          "type" in (accounts[index] as Company) &&
          (accounts[index] as Company).type !== "child"
      )
      .map(({ uid, status, freelanceDirect, analytics }) => {
        const data: UpdateAccount[number] = {
          uid,
          status: isNaN(Number(status)) ? status : "active",
        };

        if (!isNaN(Number(status))) {
          data.account = Number(status);
        }

        if (freelanceDirect !== "none") {
          data.freelanceDirect = freelanceDirect;
        }

        if (analytics !== "none") {
          data.analytics = analytics;
        }

        return data;
      });

    data.length && dispatch(updateAccount(data));
  };

  return (
    <PageProvider header={<Header index={index} disable />}>
      <FormProvider {...methods}>
        <form
          id="account"
          className={styles.account}
          onSubmit={methods.handleSubmit(handleEdit)}
        >
          <Tag accounts={accounts} />
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
        </form>
      </FormProvider>
    </PageProvider>
  );
};

const Main = ({
  index,
  accounts,
  display,
}: {
  index: Index;
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
