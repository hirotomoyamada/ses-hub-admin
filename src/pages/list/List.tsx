import { useListScrollFetch } from "hooks/useListScrollFetch";

import { Posts } from "./components/Posts";
import { NotFound } from "./components/NotFound";
import { Load } from "./components/Load";
import { Page } from "features/root/initialState";
import { Matter, Resource, Company, Person } from "types/posts";

interface PropType {
  index: Page;
  search: {
    value: string | null;
    target: string | null;
    type: string | null;
    filter: string | null;
  };
  posts?: Matter[] | Resource[] | Company[] | Person[];
}

export const List: React.FC<PropType> = ({ index, posts, search }) => {
  const [list, load, page, hit] = useListScrollFetch(index, search);

  return (
    <div>
      {posts?.length ? (
        <Posts index={index} posts={posts} list={list} />
      ) : (
        <NotFound index={index} list={list} />
      )}
      {posts && posts.length >= 50 && (
        <Load load={load} page={page} hit={hit} />
      )}
    </div>
  );
};
