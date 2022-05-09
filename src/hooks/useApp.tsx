import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "libs/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { login } from "features/root/actions";
import * as rootSlice from "features/root/rootSlice";

export const useApp = (): [admin: boolean, support: boolean] => {
  const dispatch = useDispatch();
  const admin = Boolean(useSelector(rootSlice.admin));

  const [support, setSupport] = useState(true);

  useEffect(() => {
    if (
      navigator.userAgent.indexOf("iPhone") > 0 ||
      (navigator.userAgent.indexOf("Android") > 0 &&
        navigator.userAgent.indexOf("Mobile") > 0) ||
      navigator.userAgent.indexOf("iPad") > 0 ||
      navigator.userAgent.indexOf("Android") > 0
    ) {
      setSupport(false);
    }
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
      } else {
        void signOut(auth);
        dispatch(rootSlice.logout());
      }
    });
  }, [dispatch]);

  return [admin, support];
};
