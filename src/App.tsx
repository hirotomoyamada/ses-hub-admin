import { useApp } from "hooks/useApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "pages/auth/Auth";
import { Load } from "components/load/Load";
import { Announce } from "components/announce/Announce";
import { NotSupported } from "pages/notSupported/NotSupported";
import { List } from "pages/list/List";
import { Setting } from "pages/setting/Setting";
import { Mail } from "pages/mail/Mail";
import { Account } from "pages/account/Account";
import { AdminProvider } from "components/provider/admin/AdminProvider";
import { User } from "pages/user/User";
import { Post } from "pages/post/Post";
import { DashBoard } from "pages/dashboard/DashBoard";
import { Modal } from "components/modal/Modal";

const App: React.FC = () => {
  const [admin, support] = useApp();

  switch (support) {
    case true:
      return (
        <BrowserRouter>
          <Announce />
          <Modal />
          <Load />

          {(() => {
            switch (true) {
              case admin:
                return (
                  <AdminProvider>
                    <Routes>
                      <Route index element={<DashBoard />} />
                      <Route path="/setting" element={<Setting />} />
                      <Route path="/mail" element={<Mail />} />
                      <Route path="/account" element={<Account />} />
                      <Route
                        path="/companys/:uid"
                        element={<User index="companys" />}
                      />
                      <Route
                        path="/persons/:uid"
                        element={<User index="persons" />}
                      />
                      <Route
                        path="/matters/:objectID"
                        element={<Post index="matters" />}
                      />
                      <Route
                        path="/resources/:objectID"
                        element={<Post index="resources" />}
                      />
                      <Route path="/:index" element={<List />} />
                      <Route path="*" element={<></>} />
                    </Routes>
                  </AdminProvider>
                );

              default:
                return (
                  <Routes>
                    <Route index element={<Auth />} />
                    <Route path="*" element={<></>} />
                  </Routes>
                );
            }
          })()}
        </BrowserRouter>
      );

    default:
      return <NotSupported />;
  }
};

export default App;
