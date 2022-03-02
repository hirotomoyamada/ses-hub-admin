import styles from "./Side.module.scss";
import { useSelector } from "react-redux";
import { Index, Type, useSideFetch } from "hooks/useSideFetch";

import * as rootSlice from "features/root/rootSlice";
import * as userSlice from "features/user/userSlice";

import { Data } from "./components/data/Data";
import { List } from "./components/list/List";

export const Side: React.FC = () => {
  const user = useSelector(userSlice.user);
  const edit = useSelector(rootSlice.index).edit;

  const [posts, type, setType, index, setIndex] = useSideFetch(user, edit);

  const handleOpen = (t: Type): void => {
    if (t === "follows" || t === "children") {
      setIndex("companys");
    } else if (t === "requests") {
      setIndex("hold");
    } else if (t !== "likes" && t !== "entries") {
      (index === "companys" ||
        index === "persons" ||
        index === "enable" ||
        index === "hold" ||
        index === "disable") &&
        setIndex("matters");
    }
    setType(t);
  };

  const handleIndex = (i: Index): void => {
    setIndex(i);
  };

  return (
    <div className={styles.side}>
      <Data
        index={edit}
        user={user}
        type={type}
        handleOpen={handleOpen}
        target={"data"}
        setType={setType}
        setIndex={setIndex}
      />

      {Object.keys(posts)
        .map(
          (post) =>
            (post !== "children" ||
              ("payment" in user &&
                user?.type === "parent" &&
                user?.payment?.children?.length)) && (
              <List
                key={post}
                type={type}
                index={index}
                posts={posts}
                user={user}
                handleIndex={handleIndex}
                handleOpen={handleOpen}
                target={post as Type}
              />
            )
        )
        .filter((post) => post)}
    </div>
  );
};
