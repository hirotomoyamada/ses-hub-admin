import { Item } from "../../../../../components/item/Item";

export const Posts = ({ user, posts, target, index, single }) => {
  return single
    ? posts?.[target]?.map(
        (post, index) =>
          post && (
            <Item
              key={
                index === "matters" || index === "resources"
                  ? post.objectID
                    ? post.objectID
                    : index
                  : post.uid
                  ? post.uid
                  : index
              }
              index={index}
              post={post}
              user={user}
              min
            />
          )
      )
    : posts?.[target]?.[index]?.map(
        (post, index) =>
          post && (
            <Item
              key={
                index === "matters" || index === "resources"
                  ? post.objectID
                    ? post.objectID
                    : index
                  : post.uid
                  ? post.uid
                  : index
              }
              index={target !== "requests" ? index : "companys"}
              post={post}
              user={user}
              min
            />
          )
      );
};
