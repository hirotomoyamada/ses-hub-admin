import styles from "./Command.module.scss";

export const Command = ({
  sort,
  index,
  open,
  handleSortChange,
  handleOpen,
}) => {
  open && window.addEventListener("scroll", handleOpen);

  return (
    <div>
      {sort && (
        <div className={`${styles.command} ${styles.command_sort}`}>
          {(index === "companys" || index === "persons") && (
            <button
              onClick={() =>
                handleSortChange({ target: "lastLogin", type: "desc" })
              }
              className={styles.command_btn}
            >
              ログイン順
            </button>
          )}
          <button
            onClick={() =>
              handleSortChange({ target: "createAt", type: "desc" })
            }
            className={styles.command_btn}
          >
            新着順
          </button>
          <button
            onClick={() =>
              handleSortChange({ target: "updateAt", type: "desc" })
            }
            className={styles.command_btn}
          >
            更新順
          </button>
        </div>
      )}
      {open && (
        <div onClick={handleOpen} className={styles.command_overlay}></div>
      )}
    </div>
  );
};
