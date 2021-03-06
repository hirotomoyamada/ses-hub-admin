import styles from "./Load.module.scss";
import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

export const Load: React.FC = () => {
  const load = useSelector(rootSlice.load).root;

  const [none, setNone] = useState(true);

  useEffect(() => {
    !none && setNone(load);
  }, [load, none]);

  useEffect(() => {
    !load && setTimeout(() => setNone(false), 700);
  }, [load]);

  return (
    <div
      className={`${styles.load} 
      ${!load && styles.load_opacity} 
      ${!none && styles.load_none}
      `}
    >
      <Oval color="#49b757" height={56} width={56} />
    </div>
  );
};

export const Fetch = (): JSX.Element => {
  const load = useSelector(rootSlice.load).fetch;

  const [none, setNone] = useState(true);

  useEffect(() => {
    !none && setNone(load);
  }, [load, none]);

  useEffect(() => {
    !load && setTimeout(() => setNone(false), 400);
  }, [load]);

  return (
    <div
      className={`${styles.load} ${styles.load_fetch}
      ${!load && styles.load_opacity} 
      ${!none && styles.load_none}
      `}
    >
      <Oval color="#49b757" height={56} width={56} />
    </div>
  );
};
