import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../../../../features/post/functions/fetchPosts";
import * as postSlice from "../../../../../features/post/postSlice";

import { createObserver } from "../../functions/createObserver";

export const useFetch = (index, search) => {
  const dispatch = useDispatch();

  const hit = useSelector(postSlice.hit);

  const load = useRef();
  const list = useRef();

  const [page, setPage] = useState(0);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    setPage(0);
    setIntersecting(false);
  }, [index]);

  useEffect(() => {
    const observer = createObserver(
      list,
      hit,
      page,
      setPage,
      intersecting,
      setIntersecting
    );

    const ref = load.current;
    ref && observer.observe(ref);

    return () => {
      ref && observer.unobserve(ref);
    };
  }, [hit.pages, intersecting, page, list, hit]);

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

  return [list, load, page, hit];
};
