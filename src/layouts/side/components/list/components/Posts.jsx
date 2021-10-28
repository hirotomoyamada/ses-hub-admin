import { Item } from "../../../../../layouts/main/components/item/Item";

export const Posts = ({ user, posts, target, index }) => {
  return target === "follows"
    ? posts?.[target]?.map(
        (post) =>
          post && (
            <Item key={post.uid} index={index} post={post} user={user} min />
          )
      )
    : posts?.[target]?.[index]?.map(
        (post) =>
          post && (
            <Item
              key={
                index === "matters" || index === "resources"
                  ? post.objectID
                  : index === "persons" && post.uid
              }
              index={index}
              post={post}
              user={user}
              min
            />
          )
      );
};
