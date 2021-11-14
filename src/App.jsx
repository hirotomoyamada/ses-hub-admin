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
  const [admin, device] = useApp();

  return (
    <BrowserRouter>
      <Announce />
      <Load />

      {device ? (
        !admin ? (
          <Switch>
            <Route path="/" component={Auth} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" component={Admin} />
          </Switch>
        )
      ) : (
        <div className="disable">
          <span>このデバイスでは操作できません</span>
          <span>スマートフォン・タブレット以外をご利用ください</span>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
