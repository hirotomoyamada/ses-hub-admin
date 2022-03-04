import styles from "../Resume.module.scss";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Loader from "react-loader-spinner";

import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import * as rootSlice from "features/root/rootSlice";
import { Person } from "types/post";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface PropType {
  user: Person;
  file: File | null;
  handleDelete: () => void;
}

export const File: React.FC<PropType> = ({ user, file, handleDelete }) => {
  const load = useSelector(rootSlice.load).fetch;

  return (
    <div className={styles.resume_container}>
      {user?.resume?.url ? (
        <div className={styles.resume_file}>
          <a
            href={user?.resume?.url ? user?.resume?.url : "/"}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={faFilePdf as IconProp}
              className={styles.resume_file_icon}
            />
          </a>

          <button type="button" onClick={handleDelete}>
            <RemoveIcon
              className={`${styles.resume_icon} ${styles.resume_icon_delete}`}
            />
          </button>
        </div>
      ) : load ? (
        <div className={`${styles.resume_file} ${styles.resume_file_load}`}>
          <Loader type="Oval" color="#49b757" height={36} width={36} />
        </div>
      ) : (
        <label
          htmlFor="resume"
          className={`${styles.resume_file} ${styles.resume_file_label}`}
        >
          <span>{!file ? "ファイルを選択" : file?.name}</span>
          <AddIcon className={styles.resume_icon} />
        </label>
      )}
    </div>
  );
};
