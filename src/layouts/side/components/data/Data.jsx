import styles from "./Data.module.scss";
import root from "../../Side.module.scss";

import Loader from "react-loader-spinner";

import { useDispatch } from "react-redux";

import * as rootSlice from "../../../../features/root/rootSlice";
import * as userSlice from "../../../../features/user/userSlice";

import { Header } from "../header/Header";
import { Account } from "./components/account/Account";
import { Auth } from "./components/Auth";
import { Payment } from "./components/Payment";
import { Profile } from "./components/Profile";
import { Provider } from "./components/Provider";
import { Posts } from "./components/posts/Posts";
import { Resume } from "./components/resume/Resume";

export const Data = ({
  user,
  index,
  type,
  handleOpen,
  target,
  setType,
  setIndex,
}) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(rootSlice.handleIndex({ edit: user.index }));
    dispatch(
      userSlice.selectUser(
        index === "matters" || index === "resources" ? user : user?.parent
      )
    );
  };

  return (
    <div className={root.side_type}>
      <Header type={type} target={target} handleOpen={handleOpen} />

      <div
        className={`${root.side_type_inner} ${
          type === "data" && root.side_type_inner_current
        }`}
      >
        {type === "data" && user.index ? (
          <div className={styles.data}>
            {(index === "matters" ||
              index === "resources" ||
              user.type === "child") && (
              <Account
                user={
                  index === "matters" || index === "resources"
                    ? user
                    : user?.parent
                }
                index={index}
                handleChange={handleChange}
              />
            )}

            <Auth user={user} />
            {user.index === "companys" && <Payment user={user} />}
            <Profile user={user} />
            {user.index === "persons" && <Resume user={user} />}
            <Provider user={user} />
            <Posts user={user} setType={setType} setIndex={setIndex} />
          </div>
        ) : (
          <div className={`${styles.data} ${styles.data_none}`}>
            <Loader type="Oval" color="#49b757" height={56} width={56} />
          </div>
        )}
      </div>
    </div>
  );
};
