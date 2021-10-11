import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as userSlice from "../../features/user/userSlice";
import Loader from "react-loader-spinner";
import styles from "./Load.module.scss";
import * as postSlice from "../../features/post/postSlice";

export const Load = () => {
  const load = useSelector(userSlice.load);

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
      <Loader type="Oval" color="#49b757" height={56} width={56} />
    </div>
  );
};

export const Fetch = () => {
  const user = useSelector(userSlice.fetch);
  const post = useSelector(postSlice.fetch);
  const load = user ? user : post && post;

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
      <Loader type="Oval" color="#49b757" height={56} width={56} />
    </div>
  );
};
