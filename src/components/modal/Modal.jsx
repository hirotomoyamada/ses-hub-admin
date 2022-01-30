import styles from "./Modal.module.scss";

import { useDispatch, useSelector } from "react-redux";

import { updateNotice } from "../../features/root/actions/updateNotice";
import * as rootSlice from "../../features/root/rootSlice";

import { Post } from "../../features/post/Post";
import { User } from "../../features/user/User";

import { Side } from "../../layouts/side/Side";

export const Modal = ({ index }) => {
  const dispatch = useDispatch();
  const open = useSelector(rootSlice.modal);

  const handleClose = () => {
    dispatch(rootSlice.handleModal(false));
    dispatch(updateNotice(""));
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
