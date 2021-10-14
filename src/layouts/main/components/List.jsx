import styles from "../Main.module.scss";

import Loader from "react-loader-spinner";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../../features/post/functions/fetchPosts";
import * as rootSlice from "../../../features/root/rootSlice";
import * as postSlice from "../../../features/post/postSlice";

import { Item } from "./item/Item";

export const List = ({ index, posts, search }) => {
  const dispatch = useDispatch();

  const load = useSelector(rootSlice.load).list;
  const hit = useSelector(postSlice.hit);

  const nextLoad = useRef();
  const list = useRef();

  const [page, setPage] = useState(0);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    setPage(0);
    setIntersecting(false);
  }, [index]);

  useEffect(() => {
    if (
      JSON.stringify(list.current.getBoundingClientRect().height) >
      window.innerHeight + 1
    ) {
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
          rootMargin: `0px 0px ${window.innerHeight}px 0px`,
        }
      );

      const ref = nextLoad.current;
      observer.observe(ref);

      return () => {
        observer.unobserve(ref);
      };
    }
  }, [hit.currentPage, hit.pages, intersecting, page, list, index, posts]);

  useEffect(() => {
    intersecting &&
      hit.pages &&
      page !== hit.pages &&
      dispatch(
        fetchPosts({
          index: index,
          value: search.value,
          target: search.target,
          type: search.type,
          filter: search.filter,
          page: page,
        })
      ).then(() => {
        setIntersecting(!intersecting);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, list]);

  return (
    <div>
      {posts?.[0] ? (
        <div className={styles.main_list} ref={list}>
          {posts?.map((post) => (
            <Item
              key={
                index === "matters" || index === "resources"
                  ? post.objectID
                  : (index === "companys" || index === "persons") && post.uid
              }
              index={index}
              post={post}
            />
          ))}
        </div>
      ) : (
        <div className={styles.main_list_none} ref={list}>
          {load ? (
            <Loader type="Oval" color="#49b757" height={56} width={56} />
          ) : (
            <span className={styles.main_list_none_message}>
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
      {posts?.length >= 50 && (
        <div
          ref={nextLoad}
          className={`${styles.main_list_load} ${
            page === hit.pages && styles.main_list_load_none
          }`}
        >
          {page < hit.pages && (
            <Loader type="Oval" color="#49b757" height={32} width={32} />
          )}
        </div>
      )}
    </div>
  );
};
