import styles from "./Data.module.scss";
import root from "../../Side.module.scss";

import { useDispatch } from "react-redux";

import { selectIndex, selectPost } from "../../../post/postSlice";

import { Header } from "../header/Header";
import { Account } from "./components/account/Account";
import { Auth } from "./components/Auth";
import { Payment } from "./components/Payment";
import { Profile } from "./components/Profile";
import { Provider } from "./components/Provider";
import { Posts } from "./components/posts/Posts";

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
    dispatch(selectIndex({ edit: user.index }));
    dispatch(selectPost(user));
  };

  return (
    <div className={root.side_type}>
      <Header type={type} target={target} handleOpen={handleOpen} />

      <div
        className={`${root.side_type_inner} ${
          type === "data" && root.side_type_inner_current
        }`}
      >
        {type === "data" && (
          <div className={styles.data}>
            {(index === "matters" || index === "resources") && (
              <Account user={user} handleChange={handleChange} />
            )}

            <Auth user={user} />
            {user.index === "companys" && <Payment user={user} />}
            <Profile user={user} />
            <Provider user={user} />
            <Posts user={user} setType={setType} setIndex={setIndex} />
          </div>
        )}
      </div>
    </div>
  );
};
