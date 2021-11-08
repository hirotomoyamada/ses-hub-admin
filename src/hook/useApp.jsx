import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";

import { login } from "../features/root/actions/login";
import * as rootSlice from "../features/root/rootSlice";

export const useApp = () => {
  const dispatch = useDispatch();
  const admin = useSelector(rootSlice.admin);

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

  return admin;
};
