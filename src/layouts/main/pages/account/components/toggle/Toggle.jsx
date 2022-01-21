import root from "../../Account.module.scss";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { Individual } from "./components/Individual";
import { Parent } from "./components/Parent";
import { Option } from "./components/Option";

export const Toggle = ({ i, user }) => {
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue(
      `user[${i}].status`,
      user?.type !== "child"
        ? user?.type === "parent" && user?.payment?.account > 0
          ? String(user?.payment?.account)
          : user?.payment?.status
        : "canceled",
      {
        shouldValidate: true,
        shouldDirty: true,
      }
    );

    setValue(
      `user[${i}].option`,
      user?.payment?.option
        ? user?.payment?.option?.freelanceDirect
          ? "enable"
          : "disable"
        : "none",
      {
        shouldValidate: true,
        shouldDirty: true,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className={root.account_wrap}>
      {!user?.uid || user?.type === "individual" ? (
        <Individual i={i} user={user} />
      ) : (
        <Parent i={i} user={user} />
      )}

      <Option i={i} user={user} />
    </div>
  );
};
