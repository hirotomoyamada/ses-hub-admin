import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

import { login } from "./features/user/functions/login";
import * as userSlice from "./features/user/userSlice";

import { Auth } from "./features/auth/Auth";
import { Admin } from "./Admin";

import * as Announce from "./components/announce/Announce";
import { Load } from "./components/load/Load";

// import { db } from "./firebase";

// const test = async (data) => {
//   const user = await db
//     .collection("companys")
//     .where("status", "==", "enable")
//     .where(
//       "payment.status",
//       data.target !== "all" ? "==" : "in",
//       data.target !== "all" ? data.target : ["active", "canceled", "trialing"]
//     )
//     .get()
//     .then((querySnapshot) => {
//       return querySnapshot.docs.map((doc) => doc.data().profile.email);
//     });

//   console.log(user);
// };

// test({ target: "canceled" });

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSlice.user);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user));
      } else {
        auth.signOut();
        dispatch(userSlice.logout());
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Announce.User />
      <Announce.Post />
      <Load />

      {!user ? (
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
