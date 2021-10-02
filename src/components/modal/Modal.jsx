import styles from "./Modal.module.scss";

import { useDispatch, useSelector } from "react-redux";

import * as postSlice from "../../features/post/postSlice";

import { Post } from "../../features/post/Post";
import { User } from "../../features/user/User";
import { Side } from "../../features/side/Side";

export const Modal = ({ index }) => {
  const dispatch = useDispatch();
  const open = useSelector(postSlice.modal);

  const handleClose = () => {
    dispatch(postSlice.handleModal(false));
  };

  return (
    <div
      className={`${styles.modal} ${
        open ? styles.modal_open : styles.modal_close
      }`}
    >
      {index === "matters" || index === "resources" ? (
        <Post index={index} handleClose={handleClose} />
      ) : (
        (index === "companys" || index === "persons") && (
          <User index={index} handleClose={handleClose} />
        )
      )}
      <Side />
    </div>
  );
};
