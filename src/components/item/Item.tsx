import { Post } from "./components/post/Post";
import { User } from "./components/user/User";
import { Matter, Resource, Company, Person } from "types/post";
import { useNavigate } from "react-router-dom";

interface PropType {
  index: "matters" | "resources" | "companys" | "persons";
  post: Matter | Resource | Company | Person;
  min?: boolean;
}

export const Item: React.FC<PropType> = ({ index, post, min }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() =>
        navigate(`/${index}/${"objectID" in post ? post.objectID : post.uid}`)
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
