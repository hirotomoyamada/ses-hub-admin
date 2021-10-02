import { useDispatch } from "react-redux";

import { fetchUser } from "../../../../features/post/functions/fetchUser";
import * as postSlice from "../../../../features/post/postSlice";

import { Post } from "./components/posts/Post";
import { User } from "./components/users/User";

export const Item = ({ index, post, user, mini }) => {
  const dispatch = useDispatch();

  const handlePostEdit = () => {
    dispatch(postSlice.selectIndex({ edit: index }));
    dispatch(postSlice.selectPost(post));
    !mini && dispatch(postSlice.handleModal(true));
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
    <button type="button" onClick={handlePostEdit}>
      {index === "matters" || index === "resources" ? (
        <Post post={post} index={index} mini={mini} />
      ) : (
        (index === "companys" || index === "persons") && (
          <User post={post} index={index} mini={mini} />
        )
      )}
    </button>
  );
};
