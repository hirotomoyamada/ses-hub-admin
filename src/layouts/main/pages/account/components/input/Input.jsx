import styles from "./Input.module.scss";

import CloseIcon from "@material-ui/icons/Close";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormContext } from "react-hook-form";

import { fetchUser } from "../../../../../../features/user/actions/fetchUser";

export const Input = ({ i, index }) => {
  const dispatch = useDispatch();
  const { register, watch, reset } = useFormContext();

  const uid = watch(`user[${i}].uid`);

  useEffect(() => {
    uid?.length === 28 &&
      dispatch(fetchUser({ index: index, uid: uid, type: "selectUser" }));
  }, [dispatch, index, uid]);

  const handleReset = () => {
    reset();
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
