import styles from "./Modal.module.scss";

import { useDispatch, useSelector } from "react-redux";

import { updateNotice } from "features/root/actions";
import * as rootSlice from "features/root/rootSlice";

import { Post } from "pages/post/Post";
import { User } from "pages/user/User";

import { Side } from "components/side/Side";
import { Edit } from "features/root/initialState";

interface PropType {
  index: Edit;
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
