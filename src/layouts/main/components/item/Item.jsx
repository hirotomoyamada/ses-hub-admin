import { useDispatch } from "react-redux";

import { fetchUser } from "../../../../features/user/functions/fetchUser";
import * as rootSlice from "../../../../features/root/rootSlice";
import * as userSlice from "../../../../features/user/userSlice";
import * as postSlice from "../../../../features/post/postSlice";

import { Post } from "./components/posts/Post";
import { User } from "./components/users/User";

export const Item = ({ index, post, user, min }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    !min && dispatch(rootSlice.handleModal(true));

    dispatch(rootSlice.handleIndex({ edit: index }));
    index === "matters" || index === "resources"
      ? dispatch(postSlice.selectPost(post))
      : (index === "companys" || index === "persons") &&
        dispatch(userSlice.selectUser(post));

    user?.uid !== post.uid &&
      dispatch(
        fetchUser({
          index:
            index === "matters" || index === "resources" || index === "companys"
              ? "companys"
              : index === "persons" && "persons",
          uid: post.uid,
        })
      );
  };

  return (
    <button type="button" onClick={handleEdit}>
      {index === "matters" || index === "resources" ? (
        <Post post={post} index={index} min={min} />
      ) : (
        (index === "companys" || index === "persons") && (
          <User post={post} index={index} min={min} />
        )
      )}
    </button>
  );
};
