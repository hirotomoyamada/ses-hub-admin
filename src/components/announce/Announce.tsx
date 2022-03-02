import styles from "./Announce.module.scss";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

export const Announce: React.FC = () => {
  const dispatch = useDispatch();
  const announce = useSelector(rootSlice.announce);

  useEffect(() => {
    if (announce?.success || announce?.error) {
      setTimeout(() => dispatch(rootSlice.handleAnnounce()), 4000);
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
