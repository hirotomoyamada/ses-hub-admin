import styles from "./List.module.scss";
import root from "../../Side.module.scss";

import { useFetch } from "./hook/useFetch";

import { Header } from "../header/Header";
import { Index } from "../index/Index";

import { Posts } from "./components/Posts";
import { Load } from "./components/Load";
import { NotFound } from "./components/NotFound";

export const List = ({
  type,
  posts,
  user,
  index,
  handleIndex,
  handleOpen,
  target,
}) => {
  const [list, inner, load, page, hit] = useFetch(index, user, type, target);

  const handleIndexScroll = (index) => {
    inner.current && inner.current.scrollTo(0, 0);
    handleIndex(index);
  };

  const single =
    (user.index === "companys" && target === "children") ||
    (user.index === "companys" && target === "follows") ||
    (user.index === "persons" && target !== "requests");

  return (
    <div className={root.side_type} ref={list}>
      <Header type={type} target={target} handleOpen={handleOpen} />

      <div
        className={`${root.side_type_inner} ${
          type === target &&
          user?.type === "parent" &&
          user?.payment?.children?.length
            ? root.side_type_inner_current_parent
            : type === target && root.side_type_inner_current
        }`}
      >
        <div className={styles.list}>
          {!single && (
            <Index
              type={type}
              index={index}
              handleIndexScroll={handleIndexScroll}
            />
          )}

          {posts?.[target]?.lenght || posts?.[target]?.[index]?.lenght ? (
            <div
              className={`${styles.list_inner} 
              ${single && styles.list_inner_single}
              `}
              ref={inner}
            >
              <Posts
                user={user}
                posts={posts}
                target={target}
                index={index}
                single={single}
              />

              {(posts?.[target]?.length >= 50 ||
                posts?.[target]?.[index]?.length >= 50) && (
                <Load load={load} page={page} hit={hit} />
              )}
            </div>
          ) : (
            <NotFound index={index} />
          )}
        </div>
      </div>
    </div>
  );
};
