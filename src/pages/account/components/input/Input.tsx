import styles from "./Input.module.scss";

import CloseIcon from "@material-ui/icons/Close";
import { Oval } from "react-loader-spinner";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormContext } from "react-hook-form";

import { fetchUser } from "features/user/actions";
import * as userSlice from "features/user/userSlice";
import * as rootSlice from "features/root/rootSlice";
import { Index } from "features/root/initialState";
import { Data } from "pages/account/Account";

interface PropType {
  i: number;
  index: Index;
}

export const Input: React.FC<PropType> = ({ i, index }) => {
  const dispatch = useDispatch();
  const { register, watch, setValue } = useFormContext<Data>();

  const [fetch, setFetch] = useState(false);

  const uid = watch(`account.${i}.uid`);
  const load = useSelector(rootSlice.load).list;

  useEffect(() => {
    if (uid?.length === 28 && index === "companys") {
      dispatch(fetchUser({ index: index, uid: uid, type: "accounts", i: i }));
      setFetch(true);
    }
  }, [dispatch, i, index, uid]);

  useEffect(() => {
    !load && setFetch(false);
  }, [load]);

  const handleReset = (): void => {
    setValue(`account.${i}.uid`, "", {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue(`account.${i}.status`, "", {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue(`account.${i}.freelanceDirect`, "none", {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue(`account.${i}.analytics`, "none", {
      shouldValidate: true,
      shouldDirty: true,
    });

    dispatch(userSlice.resetUser(i));
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        className={styles.input_uid}
        {...register(`account.${i}.uid` as const)}
      />
      <button type="button" onClick={handleReset} className={styles.input_btn}>
        {fetch ? (
          <Oval color="#49b757" height={20} width={20} />
        ) : (
          <CloseIcon className={styles.input_icon} />
        )}
      </button>
    </div>
  );
};
