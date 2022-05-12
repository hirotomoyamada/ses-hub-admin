import styles from "./Modal.module.scss";

import { useDispatch, useSelector } from "react-redux";

import * as rootSlice from "features/root/rootSlice";

import { Delete } from "./components/delete/Delete";

export const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const modal = useSelector(rootSlice.modal);

  const handleClose = (): void => {
    dispatch(rootSlice.handleModal());
  };

  return (
    <div className={`${modal.open ? styles.open : styles.close}`}>
      <div className={styles.overlay}></div>
      <div className={`${styles.modal}`}>
        {(() => {
          switch (modal.type) {
            case "delete":
              return (
                <Delete
                  text={modal.text}
                  close={modal.close}
                  handleClose={handleClose}
                  handleDelete={modal.delete}
                />
              );
            default:
              return <></>;
          }
        })()}
      </div>
    </div>
  );
};
