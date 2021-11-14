import styles from "./Side.module.scss";
import { useSelector } from "react-redux";
import { useFetch } from "./hook/useFetch";

import * as rootSlice from "../../features/root/rootSlice";
import * as userSlice from "../../features/user/userSlice";

import { Data } from "./components/data/Data";
import { List } from "./components/list/List";

export const Side = () => {
  const user = useSelector(userSlice.user);
  const edit = useSelector(rootSlice.index).edit;

  const [posts, type, setType, index, setIndex] = useFetch(user, edit);

  const handleOpen = (target) => {
    if (target === "follows" || target === "children") {
      setIndex("companys");
    } else if (target === "requests") {
      setIndex("hold");
    } else if (target !== "likes" || target !== "entries") {
      (index === "companys" ||
        index === "persons" ||
        index === "enable" ||
        index === "hold" ||
        index === "disable") &&
        setIndex("matters");
    }
    setType(target);
  };

  const handleIndex = (index) => {
    setIndex(index);
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
              (user?.type === "parent" && user?.payment?.children?.length)) && (
              <List
                key={post}
                type={type}
                index={index}
                posts={posts}
                user={user}
                handleIndex={handleIndex}
                handleOpen={handleOpen}
                target={post}
              />
            )
        )
        .filter((post) => post)}
    </div>
  );
};
