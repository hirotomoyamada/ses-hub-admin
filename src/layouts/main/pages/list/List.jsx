import { useFetch } from "./hook/useFetch";

import { Posts } from "./components/Posts";
import { NotFound } from "./components/NotFound";
import { Load } from "./components/Load";

export const List = ({ index, posts, search }) => {
  const [list, load, page, hit] = useFetch(index, search);

  return (
    <div>
      {posts?.length ? (
        <Posts index={index} posts={posts} list={list} />
      ) : (
        <NotFound index={index} list={list} />
      )}
      {posts?.length >= 50 && <Load load={load} page={page} hit={hit} />}
    </div>
  );
};
