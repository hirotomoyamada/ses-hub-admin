import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";

import { login } from "../features/root/actions/login";
import * as rootSlice from "../features/root/rootSlice";

export const useApp = () => {
  const dispatch = useDispatch();
  const admin = useSelector(rootSlice.admin);

  const [device, setDevice] = useState(true);

  useEffect(() => {
    if (
      navigator.userAgent.indexOf("iPhone") > 0 ||
      (navigator.userAgent.indexOf("Android") > 0 &&
        navigator.userAgent.indexOf("Mobile") > 0) ||
      navigator.userAgent.indexOf("iPad") > 0 ||
      navigator.userAgent.indexOf("Android") > 0
    ) {
      setDevice(false);
    }
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user));
      } else {
        auth.signOut();
        dispatch(rootSlice.logout());
      }
    });
  }, [dispatch]);

  return [admin, device];
};
