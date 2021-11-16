import { Item } from "../../../../../components/item/Item";

export const Posts = ({ user, posts, target, index, single }) => {
  return single
    ? posts?.[target]?.map(
        (post, i) =>
          post && (
            <Item
              key={
                index === "matters" || index === "resources"
                  ? post?.objectID
                    ? post.objectID
                    : i
                  : post?.uid
                  ? post?.uid
                  : i
              }
              index={index}
              post={post}
              user={user}
              min
            />
          )
      )
    : posts?.[target]?.[index]?.map(
        (post, i) =>
          post && (
            <Item
              key={
                index === "matters" || index === "resources"
                  ? post?.objectID
                    ? post.objectID
                    : i
                  : post?.uid
                  ? post.uid
                  : i
              }
              index={target !== "requests" ? index : "companys"}
              post={post}
              user={user}
              min
            />
          )
      );
};
