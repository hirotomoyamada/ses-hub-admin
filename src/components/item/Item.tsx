import { Post } from "./components/post/Post";
import { User } from "./components/user/User";
import { Matter, Resource, Company, Person } from "types/post";
import { useNavigate } from "react-router-dom";
import { Type } from "hooks/useSideFetch";
import { useSelector } from "react-redux";
import * as userSlice from "features/user/userSlice";

interface PropType {
  index: "matters" | "resources" | "companys" | "persons";
  post: Matter | Resource | Company | Person;
  target?: Type;
  min?: boolean;
}

export const Item: React.FC<PropType> = ({ index, post, target, min }) => {
  const user = useSelector(userSlice.user);
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() =>
        navigate(`/${index}/${"objectID" in post ? post.objectID : post.uid}`, {
          state:
            "objectID" in post
              ? { type: target, disabled: post.uid === user.uid }
              : undefined,
        })
      }
    >
      {(() => {
        switch (index) {
          case "matters":
          case "resources":
            return (
              <Post post={post as Matter | Resource} index={index} min={min} />
            );

          case "companys":
          case "persons":
            return (
              <User post={post as Company | Person} index={index} min={min} />
            );

          default:
            return <></>;
        }
      })()}
    </button>
  );
};
