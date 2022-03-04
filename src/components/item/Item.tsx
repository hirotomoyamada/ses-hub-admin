import { useDispatch } from "react-redux";
import { fetchUser } from "features/user/actions";
import * as rootSlice from "features/root/rootSlice";
import * as userSlice from "features/user/userSlice";
import * as postSlice from "features/post/postSlice";
import { Post } from "./components/post/Post";
import { User } from "./components/user/User";
import { Matter, Resource, Company, Person } from "types/post";

interface PropType {
  index: "matters" | "resources" | "companys" | "persons";
  post: Matter | Resource | Company | Person;
  user?: Company | Person;
  min?: boolean;
}

export const Item: React.FC<PropType> = ({ index, post, user, min }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (!min) {
      dispatch(rootSlice.handleModal(true));
    }

    dispatch(rootSlice.handleIndex({ edit: index }));

    if (index === "matters" || index === "resources") {
      dispatch(postSlice.selectPost(post as Matter | Resource));
    }

    if (index === "companys" || index === "persons") {
      dispatch(userSlice.selectUser(post as Company | Person));
    }

    if (user?.uid !== post.uid) {
      dispatch(
        fetchUser({
          index:
            index === "matters" || index === "resources" || index === "companys"
              ? "companys"
              : "persons",
          uid: post.uid,
        })
      );
    }
  };

  return (
    <button type="button" onClick={handleEdit}>
      {index === "matters" || index === "resources" ? (
        <Post post={post as Matter | Resource} index={index} min={min} />
      ) : (
        (index === "companys" || index === "persons") && (
          <User post={post as Company | Person} index={index} min={min} />
        )
      )}
    </button>
  );
};
