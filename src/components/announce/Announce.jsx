import styles from "./Announce.module.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import * as userSlice from "../../features/user/userSlice";
import * as postSlice from "../../features/post/postSlice";

export const User = () => {
  const dispatch = useDispatch();
  const announce = useSelector(userSlice.announce);

  useEffect(() => {
    if (announce?.success || announce?.error) {
      setTimeout(() => dispatch(userSlice.handleAnnounce("reset")), 4000);
    }
  }, [announce?.error, announce?.success, dispatch]);

  return (
    <div
      className={`${styles.announce} ${
        (announce?.success || announce?.error) && styles.announce_up
      }`}
    >
      <div
        className={`${styles.announce_inner} ${
          announce?.success && styles.announce_inner_success
        } ${announce?.error && styles.announce_inner_error}`}
      >
        <span className={styles.announce_txt}>
          {announce?.success ? (
            <CheckCircleOutlineIcon className={styles.announce_icon} />
          ) : (
            announce?.error && (
              <ErrorOutlineIcon className={styles.announce_icon} />
            )
          )}
          {announce?.success
            ? announce.success
            : announce?.error && announce.error}
        </span>
      </div>
    </div>
  );
};

export const Post = () => {
  const dispatch = useDispatch();
  const announce = useSelector(postSlice.announce);

  useEffect(() => {
    if (announce?.success || announce?.error) {
      setTimeout(() => dispatch(postSlice.handleAnnounce("reset")), 4000);
    }
  }, [announce?.error, announce?.success, dispatch]);

  return (
    <div
      className={`${styles.announce} ${
        (announce?.success || announce?.error) && styles.announce_up
      }`}
    >
      <div
        className={`${styles.announce_inner} ${
          announce?.success && styles.announce_inner_success
        } ${announce?.error && styles.announce_inner_error}`}
      >
        <span className={styles.announce_txt}>
          {announce?.success ? (
            <CheckCircleOutlineIcon className={styles.announce_icon} />
          ) : (
            announce?.error && (
              <ErrorOutlineIcon className={styles.announce_icon} />
            )
          )}
          {announce?.success
            ? announce.success
            : announce?.error && announce.error}
        </span>
      </div>
    </div>
  );
};
