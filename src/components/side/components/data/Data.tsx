import styles from "./Data.module.scss";
import root from "../../Side.module.scss";

import Loader from "react-loader-spinner";

import { useDispatch } from "react-redux";

import * as rootSlice from "features/root/rootSlice";
import * as userSlice from "features/user/userSlice";

import { Header } from "../header/Header";
import { Account } from "./components/account/Account";
import { Auth } from "./components/Auth";
import { Payment } from "./components/Payment";
import { Profile } from "./components/Profile";
import { Provider } from "./components/Provider";
import { Posts } from "./components/posts/Posts";
import { Resume } from "./components/resume/Resume";
import { Company, Person } from "types/posts";
import { Edit } from "features/root/initialState";
import { Index, Type } from "hooks/useSideFetch";

interface PropType {
  user: Company | Person;
  index: Edit;
  type: Type;
  handleOpen: (t: Type) => void;
  target: "data";
  setType: React.Dispatch<React.SetStateAction<Type>>;
  setIndex: React.Dispatch<React.SetStateAction<Index>>;
}

export const Data: React.FC<PropType> = ({
  user,
  index,
  type,
  handleOpen,
  target,
  setType,
  setIndex,
}) => {
  const dispatch = useDispatch();

  const handleChange = (): void => {
    dispatch(
      rootSlice.handleIndex({
        edit: "payment" in user ? "companys" : "persons",
      })
    );

    dispatch(
      userSlice.selectUser(
        index === "matters" || index === "resources"
          ? user
          : "parent" in user && user?.parent
          ? user?.parent
          : user
      )
    );
  };

  return (
    <div className={root.side_type}>
      <Header type={type} target={target} handleOpen={handleOpen} />

      <div
        className={`${root.side_type_inner} ${
          type === target &&
          "payment" in user &&
          user?.type === "parent" &&
          user?.payment?.children?.length
            ? root.side_type_inner_current_parent
            : type === target && root.side_type_inner_current
        }`}
      >
        {type === "data" ? (
          <div className={styles.data}>
            {(index === "matters" ||
              index === "resources" ||
              (user as Company).type === "child") && (
              <Account
                user={
                  index === "matters" || index === "resources"
                    ? user
                    : "parent" in user && user?.parent
                    ? user?.parent
                    : user
                }
                index={index}
                handleChange={handleChange}
              />
            )}

            <Auth user={user} />
            {"payment" in user && <Payment user={user} />}
            <Profile user={user} />
            {"resume" in user && <Resume user={user} />}
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
