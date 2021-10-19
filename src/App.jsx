import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

import { login } from "./features/root/functions/login";
import * as rootSlice from "./features/root/rootSlice";

import { Auth } from "./pages/auth/Auth";
import { Admin } from "./Admin";

import { Load } from "./components/load/Load";
import { Announce } from "./components/announce/Announce";

// import { create } from "./debug/create";

// create();

const App = () => {
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

  return (
    <BrowserRouter>
      <Announce />
      <Load />

      {!admin ? (
        <Switch>
          <Route path="/" component={Auth} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={Admin} />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
