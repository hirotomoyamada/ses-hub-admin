import styles from "./List.module.scss";
import root from "../../Side.module.scss";

import { useSideScrollFetch } from "hooks/useSideScrollFetch";

import { Header } from "../header/Header";
import { Index } from "../index/Index";

import { Posts } from "./components/Posts";
import { Load } from "./components/Load";
import { NotFound } from "./components/NotFound";
import * as Side from "hooks/useSideFetch";
import * as User from "features/user/initialState";
import { Company, Person } from "types/posts";

interface PropType {
  type: Side.Type;
  posts: User.Posts["company"] | User.Posts["person"] | Record<string, never>;
  user: Company | Person;
  index: Side.Index;
  handleIndex: (i: Side.Index) => void;
  handleOpen: (t: Side.Type) => void;
  target: Side.Type;
}
useSideScrollFetch;
export const List: React.FC<PropType> = ({
  type,
  posts,
  user,
  index,
  handleIndex,
  handleOpen,
  target,
}) => {
  const [list, inner, load, page, hit] = useSideScrollFetch(
    index,
    user,
    type,
    target
  );

  const handleIndexScroll = (i: Side.Index) => {
    inner.current && inner.current.scrollTo(0, 0);
    handleIndex(i);
  };

  const single =
    ("posts" in user && (target === "children" || target === "follows")) ||
    ("requests" in user && target !== "requests");

  return (
    <div className={root.side_type} ref={list}>
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
        <div className={styles.list}>
          {!single && (
            <Index
              type={type}
              index={index}
              handleIndexScroll={handleIndexScroll}
            />
          )}

          {"posts" in posts ? (
            (target === "likes" || target === "entries") &&
            (index === "matters" ||
              index === "resources" ||
              index === "persons") &&
            posts?.[target]?.[index]?.length ? (
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
                />

                {posts?.[target]?.[index]?.length >= 50 && (
                  <Load load={load} page={page} hit={hit} />
                )}
              </div>
            ) : (target === "posts" || target === "outputs") &&
              (index === "matters" || index === "resources") &&
              posts?.[target]?.[index]?.length ? (
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
                />

                {posts?.[target]?.[index]?.length >= 50 && (
                  <Load load={load} page={page} hit={hit} />
                )}
              </div>
            ) : (target === "follows" || target === "children") &&
              posts?.[target]?.length ? (
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
                />

                {posts?.[target]?.length >= 50 && (
                  <Load load={load} page={page} hit={hit} />
                )}
              </div>
            ) : (
              <NotFound index={index} />
            )
          ) : (
            <NotFound index={index} />
          )}

          {"requests" in posts ? (
            target === "requests" &&
            (index === "enable" || index === "hold" || index === "disable") &&
            posts?.requests?.[index].length ? (
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
                />

                {posts?.[target]?.[index]?.length >= 50 && (
                  <Load load={load} page={page} hit={hit} />
                )}
              </div>
            ) : (target === "follows" ||
                target === "likes" ||
                target === "entries" ||
                target === "histories") &&
              posts?.[target]?.length ? (
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
                />

                {posts?.[target]?.length >= 50 && (
                  <Load load={load} page={page} hit={hit} />
                )}
              </div>
            ) : (
              <NotFound index={index} />
            )
          ) : (
            <NotFound index={index} />
          )}
        </div>
      </div>
    </div>
  );
};
