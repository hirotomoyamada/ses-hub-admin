import { useEffect } from "react";
import { usePosts } from "hooks/usePosts";
import { useDispatch, useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";
import * as userSlice from "features/user/userSlice";
import { useListScrollFetch } from "hooks/useListScrollFetch";
import { Posts } from "./components/Posts";
import { NotFound } from "./components/NotFound";
import { Load } from "./components/Load";
import { useParams } from "react-router-dom";
import { PageProvider } from "components/provider/page/PageProvider";
import { Header } from "components/header/search/Header";

export const List: React.FC = () => {
  const dispatch = useDispatch();
  const search = useSelector(rootSlice.search);
  const user = useSelector(userSlice.user);
  const rootIndex = useSelector(rootSlice.index);
  const { index } =
    useParams<{ index: "matters" | "resources" | "companys" | "persons" }>();
  const posts = usePosts(index, search);
  const [list, load, page, hit] = useListScrollFetch(index, search);

  useEffect(() => {
    if (!index) return;
    if (index !== rootIndex) dispatch(rootSlice.handleIndex(index));

    if ("uid" in user) dispatch(userSlice.resetUser());
  }, [index]);

  return index ? (
    <PageProvider header={<Header index={index} />}>
      {posts?.length ? (
        <Posts index={index} posts={posts} list={list} />
      ) : (
        <NotFound index={index} list={list} />
      )}

      {posts && posts.length >= 50 && (
        <Load load={load} page={page} hit={hit} />
      )}
    </PageProvider>
  ) : (
    <></>
  );
};
