import { useApp } from "./hook/useApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Auth } from "./pages/auth/Auth";
import { Admin } from "./pages/admin/Admin";

import { Load } from "./components/load/Load";
import { Announce } from "./components/announce/Announce";

// import { create } from "./debug/create";
// create();

// import { insert } from "./firebase";
// insert();

const App = () => {
  const admin = useApp();

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
