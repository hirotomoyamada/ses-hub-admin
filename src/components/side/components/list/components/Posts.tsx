import { Item } from "components/item/Item";
import { Type } from "hooks/useSideFetch";
import * as User from "features/user/initialState";
import { Index } from "features/root/initialState";

interface PropType {
  posts: User.Posts["company"] | User.Posts["person"] | Record<string, never>;
  target: Type;
  index: Index;
}

export const Posts: React.FC<PropType> = ({ posts, target, index }) => {
  return (
    <>
      {"posts" in posts ? (
        (target === "likes" || target === "entries") &&
        (index === "matters" || index === "resources" || index === "persons") &&
        posts?.[target]?.[index]?.length ? (
          posts?.[target]?.[index]?.map(
            (post, i) =>
              post && (
                <Item
                  key={
                    "objectID" in post
                      ? post?.objectID
                      : "uid" in post
                      ? post?.uid
                      : i
                  }
                  index={index}
                  post={post}
                  min
                />
              )
          )
        ) : (target === "posts" || target === "outputs") &&
          (index === "matters" || index === "resources") &&
          posts?.[target]?.[index]?.length ? (
          posts?.[target]?.[index]?.map(
            (post, i) =>
              post && (
                <Item
                  key={"objectID" in post ? post.objectID : i}
                  index={index}
                  post={post}
                  min
                />
              )
          )
        ) : (target === "follows" || target === "children") &&
          posts?.[target]?.length ? (
          posts?.[target]?.map(
            (post, i) =>
              post && (
                <Item
                  key={"uid" in post ? post.uid : i}
                  index={"companys"}
                  post={post}
                  min
                />
              )
          )
        ) : (
          <></>
        )
      ) : "requests" in posts ? (
        target === "requests" &&
        (index === "enable" || index === "hold" || index === "disable") &&
        posts?.requests?.[index].length ? (
          posts?.[target]?.[index]?.map(
            (post, i) =>
              post && (
                <Item
                  key={"uid" in post ? post.uid : i}
                  index={"companys"}
                  post={post}
                  min
                />
              )
          )
        ) : (target === "follows" ||
            target === "likes" ||
            target === "entries" ||
            target === "histories") &&
          posts?.[target]?.length ? (
          posts?.[target]?.map(
            (post, i) =>
              post && (
                <Item
                  key={
                    "objectID" in post
                      ? post?.objectID
                      : "uid" in post
                      ? post?.uid
                      : i
                  }
                  index={"matters"}
                  post={post}
                  min
                />
              )
          )
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </>
  );
};
