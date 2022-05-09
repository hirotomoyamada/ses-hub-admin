import styles from "./Header.module.scss";

import { useFormContext } from "react-hook-form";

import { Icon } from "components/icon/Icon";
import { Cover } from "components/cover/Cover";
import { Data } from "functions/_company";
import React from "react";

interface PropType {
  icon: boolean;
  cover: boolean;
  setIcon: React.Dispatch<React.SetStateAction<boolean>>;
  setCover: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<PropType> = ({
  icon,
  setIcon,
  cover,
  setCover,
}) => {
  const { watch } = useFormContext<Data>();

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
