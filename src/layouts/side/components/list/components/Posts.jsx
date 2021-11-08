import { Item } from "../../../../../components/item/Item";

export const Posts = ({ user, posts, target, index, single }) => {
  return single
    ? posts?.[target]?.map(
        (post) =>
          post && (
            <Item
              key={
                index === "matters" || index === "resources"
                  ? post.objectID
                  : post.uid
              }
              index={index}
              post={post}
              user={user}
              min
            />
          )
      )
    : posts?.[target]?.[index]?.map(
        (post) =>
          post && (
            <Item
              key={
                index === "matters" || index === "resources"
                  ? post.objectID
                  : post.uid
              }
              index={target !== "requests" ? index : "companys"}
              post={post}
              user={user}
              min
            />
          )
      );
};
