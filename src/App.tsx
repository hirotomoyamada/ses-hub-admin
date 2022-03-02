import { useApp } from "hooks/useApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Auth } from "pages/auth/Auth";
import { Admin } from "pages/admin/Admin";
import { Load } from "components/load/Load";
import { Announce } from "components/announce/Announce";
import { NotSupported } from "pages/notSupported/NotSupported";

const App: React.FC = () => {
  const [admin, support] = useApp();

  switch (support) {
    case true:
      return (
        <BrowserRouter>
          <Announce />
          <Load />

          <Switch>
            <Route path="/" component={!admin ? Auth : Admin} />
          </Switch>
        </BrowserRouter>
      );
    default:
      return <NotSupported />;
  }
};

export default App;
