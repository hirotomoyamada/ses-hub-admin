import styles from "./Side.module.scss";
import { useSelector } from "react-redux";
import { Type, useSideFetch } from "hooks/useSideFetch";
import { Oval } from "react-loader-spinner";

import * as rootSlice from "features/root/rootSlice";
import * as userSlice from "features/user/userSlice";
import { Data } from "./components/data/Data";
import { List } from "./components/list/List";
import React from "react";

export const Side: React.FC = React.memo(() => {
  const user = useSelector(userSlice.user);
  const index = useSelector(rootSlice.index);

  const [posts, type, handleOpen, handleIndex] = useSideFetch(user, index);

  return Object.keys(posts).length ? (
    <div className={styles.side}>
      <Data
        index={index}
        user={user}
        type={type}
        target={"data"}
        handleOpen={handleOpen}
        handleIndex={handleIndex}
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
                target={post as Type}
                handleOpen={handleOpen}
                handleIndex={handleIndex}
              />
            )
        )
        .filter((post) => post)}
    </div>
  ) : (
    <div className={`${styles.side_fetch}`}>
      <Oval color="#49b757" height={56} width={56} />
    </div>
  );
});
