import styles from "./Modal.module.scss";

import { useDispatch, useSelector } from "react-redux";

import { updateNotice } from "features/root/actions";
import * as rootSlice from "features/root/rootSlice";

import { Index } from "features/root/initialState";

interface PropType {
  index: Index;
}

export const Modal: React.FC<PropType> = ({ index }) => {
  const dispatch = useDispatch();
  const open = useSelector(rootSlice.modal);

  const handleClose = (): void => {
    dispatch(rootSlice.handleModal(false));
    dispatch(updateNotice(index));
  };

  return (
    <div
      className={`${styles.modal} ${
        open ? styles.modal_open : styles.modal_close
      }`}
    ></div>
  );
};
