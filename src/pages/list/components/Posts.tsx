import styles from "../List.module.scss";

import { Item } from "components/item/Item";
import { Page } from "features/root/initialState";
import { Matter, Resource, Company, Person } from "types/post";

interface PropType {
  index: Page;
  list: React.RefObject<HTMLDivElement>;
  posts?: Matter[] | Resource[] | Company[] | Person[];
}

export const Posts: React.FC<PropType> = ({ index, posts, list }) => {
  return (
    <div className={styles.list} ref={list}>
      {posts?.map((post) => (
        <Item
          key={"objectID" in post ? post.objectID : post.uid}
          index={index as "matters" | "resources" | "companys" | "persons"}
          post={post}
        />
      ))}
    </div>
  );
};
