import styles from "./Header.module.scss";

import { useFormContext } from "react-hook-form";

import { Icon } from "../../../../../../../../components/icon/Icon";
import { Cover } from "../../../../../../../../components/cover/Cover";

export const Header = ({ icon, setIcon, cover, setCover }) => {
  const { watch } = useFormContext();

  return (
    <div className={styles.header}>
      <button onClick={() => setCover(!cover)} className={styles.header_btn}>
        <Cover src={watch("cover")} />
      </button>
      <button onClick={() => setIcon(!icon)} className={styles.header_btn_icon}>
        <Icon src={watch("icon")} />
      </button>
    </div>
  );
};
