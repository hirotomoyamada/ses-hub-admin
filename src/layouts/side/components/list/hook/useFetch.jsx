import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { extractPosts } from "../../../../../features/user/actions/extractPosts";
import * as userSlice from "../../../../../features/user/userSlice";

import { createObserver } from "../../functions/createObserver";

export const useFetch = (index, user, type, target) => {
  const dispatch = useDispatch();

  const hit = useSelector(userSlice.hit);

  const load = useRef();
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
    const observer = createObserver(
      list,
      hit,
      page,
      setPage,
      intersecting,
      setIntersecting
    );

    const ref = load?.current;
    ref && observer.observe(ref);

    return () => {
      ref && observer.unobserve(ref);
    };
  }, [hit, intersecting, page]);

  useEffect(() => {
    intersecting &&
      hit.pages &&
      page !== hit.pages &&
      dispatch(
        extractPosts({
          index: type !== "follows" ? index : "companys",
          type: type,
          user: user,
          page: page,
        })
      ).then(() => {
        setIntersecting(!intersecting);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, list]);

  return [list, inner, load, page, hit];
};
