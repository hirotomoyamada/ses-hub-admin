import styles from "./Input.module.scss";

import CloseIcon from "@material-ui/icons/Close";
import Loader from "react-loader-spinner";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormContext } from "react-hook-form";

import { fetchUser } from "../../../../../../features/user/actions/fetchUser";
import * as userSlice from "../../../../../../features/user/userSlice";
import * as rootSlice from "../../../../../../features/root/rootSlice";

export const Input = ({ i, index }) => {
  const dispatch = useDispatch();
  const { register, watch, setValue } = useFormContext();

  const [fetch, setFetch] = useState(false);

  const uid = watch(`user[${i}].uid`);
  const load = useSelector(rootSlice.load).list;

  useEffect(() => {
    if (uid?.length === 28) {
      dispatch(fetchUser({ index: index, uid: uid, type: "users", i: i }));
      setFetch(true);
    }
  }, [dispatch, i, index, uid]);

  useEffect(() => {
    !load && setFetch(false);
  }, [load]);

  const handleReset = () => {
    setValue(`user[${i}].uid`, "", {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue(`user[${i}].status`, "", {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue(`user[${i}].option`, "none", {
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
        {...register(`user[${i}].uid`)}
      />
      <button type="button" onClick={handleReset} className={styles.input_btn}>
        {fetch ? (
          <Loader type="Oval" color="#49b757" height={20} width={20} />
        ) : (
          <CloseIcon className={styles.input_icon} />
        )}
      </button>
    </div>
  );
};
