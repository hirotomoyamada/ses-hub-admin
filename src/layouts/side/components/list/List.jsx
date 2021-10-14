import styles from "./List.module.scss";
import root from "../../Side.module.scss";

import Loader from "react-loader-spinner";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { extractPosts } from "../../../../features/user/functions/extractPosts";
import * as rootSlice from "../../../../features/root/rootSlice";
import * as userSlice from "../../../../features/user/userSlice";

import { Header } from "../header/Header";
import { Index } from "./components/index/Index";
import { Item } from "../../../../layouts/main/components/item/Item";

export const List = ({
  type,
  posts,
  user,
  index,
  handleIndex,
  handleOpen,
  target,
}) => {
  const dispatch = useDispatch();

  const load = useSelector(rootSlice.load).list;
  const hit = useSelector(userSlice.hit);

  const nextLoad = useRef();
  const list = useRef();
  const inner = useRef();

  const [page, setPage] = useState(0);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    inner.current && inner.current.scrollTo(0, 0);
  }, [target, type, index, inner]);

  useEffect(() => {
    if (hit.currentPage === 0) {
      setPage(0);
      setIntersecting(false);
    }
  }, [hit.currentPage, hit.pages]);

  useEffect(() => {
    if (JSON.stringify(list.current.getBoundingClientRect().height) > 100) {
      const observer = new IntersectionObserver(
        ([results]) => {
          if (results.isIntersecting && !intersecting) {
            if (page < hit.pages) {
              setIntersecting(results.isIntersecting);
            }
            setPage((prevPage) => prevPage + 1);
          }
        },
        {
          root: list.current,
          rootMargin: `0px`,
        }
      );

      const ref = nextLoad?.current;
      ref && observer.observe(ref);

      return () => {
        ref && observer.unobserve(ref);
      };
    }
  }, [hit.currentPage, hit.pages, intersecting, page, target, type, list]);

  useEffect(() => {
    if (type !== "follows") {
      intersecting &&
        hit.pages &&
        page !== hit.pages &&
        dispatch(
          extractPosts({
            index: index,
            type: type,
            user: user,
            page: page,
          })
        ).then(() => {
          setIntersecting(!intersecting);
        });
    } else {
      intersecting &&
        hit.pages &&
        page !== hit.pages &&
        dispatch(
          extractPosts({
            index: "companys",
            type: type,
            user: user,
            page: page,
          })
        ).then(() => {
          setIntersecting(!intersecting);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, list]);

  const handleIndexScroll = (index) => {
    inner.current && inner.current.scrollTo(0, 0);
    handleIndex(index);
  };

  return (
    <div className={root.side_type} ref={list}>
      <Header type={type} target={target} handleOpen={handleOpen} />

      <div
        className={`${root.side_type_inner} ${
          type === target && root.side_type_inner_current
        }`}
      >
        <div className={styles.list}>
          <Index
            type={type}
            index={index}
            handleIndexScroll={handleIndexScroll}
          />

          {target === "follows" && posts?.[target]?.[0] ? (
            <div
              className={`${styles.list_inner} ${styles.list_inner_follows}`}
              ref={inner}
            >
              {posts?.[target]?.map(
                (post) =>
                  post && (
                    <Item
                      key={post.uid}
                      index={index}
                      post={post}
                      user={user}
                      min
                    />
                  )
              )}
              {((target === "follows" && posts?.[target]?.[0]) ||
                posts?.[target]?.[index]?.[0]) && (
                <div
                  ref={nextLoad}
                  className={`${styles.list_inner_load} ${
                    page === hit.pages && styles.list_inner_load_none
                  }`}
                >
                  {page < hit.pages && (
                    <Loader
                      type="Oval"
                      color="#49b757"
                      height={32}
                      width={32}
                    />
                  )}
                </div>
              )}
            </div>
          ) : posts?.[target]?.[index]?.[0] ? (
            <div className={styles.list_inner} ref={inner}>
              {posts?.[target]?.[index]?.map(
                (post) =>
                  post && (
                    <Item
                      key={
                        index === "matters" || index === "resources"
                          ? post.objectID
                          : index === "persons" && post.uid
                      }
                      index={index}
                      post={post}
                      user={user}
                      min
                    />
                  )
              )}
              {((target === "follows" && posts?.[target]?.[0]) ||
                posts?.[target]?.[index]?.[0]) && (
                <div
                  ref={nextLoad}
                  className={`${styles.list_inner_load} ${
                    page === hit.pages && styles.list_inner_load_none
                  }`}
                >
                  {page < hit.pages && (
                    <Loader
                      type="Oval"
                      color="#49b757"
                      height={32}
                      width={32}
                    />
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className={styles.list_inner_none}>
              {load ? (
                <Loader type="Oval" color="#49b757" height={56} width={56} />
              ) : (
                <span className={styles.list_inner_none_message}>
                  {index === "matters"
                    ? "案件情報がありません"
                    : index === "resources"
                    ? "人材情報がありません"
                    : index === "companys"
                    ? "メンバー情報がありません"
                    : index === "persons" && "エンジニア情報がありません"}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
