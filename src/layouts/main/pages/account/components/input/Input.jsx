import styles from "./Input.module.scss";

import CloseIcon from "@material-ui/icons/Close";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormContext } from "react-hook-form";

import { fetchUser } from "../../../../../../features/user/actions/fetchUser";
import * as userSlice from "../../../../../../features/user/userSlice";
export const Input = ({ i, index }) => {
  const dispatch = useDispatch();
  const { register, watch, setValue } = useFormContext();

  const uid = watch(`user[${i}].uid`);

  useEffect(() => {
    uid?.length === 28 &&
      dispatch(fetchUser({ index: index, uid: uid, type: "users", i: i }));
  }, [dispatch, i, index, uid]);

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
    
    dispatch(userSlice.resetUser(i))
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        className={styles.input_uid}
        {...register(`user[${i}].uid`, {})}
      />
      <button type="button" onClick={handleReset} className={styles.input_btn}>
        <CloseIcon className={styles.input_icon} />
      </button>
    </div>
  );
};
