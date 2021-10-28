export const createObserver = (
  list,
  hit,
  page,
  setPage,
  intersecting,
  setIntersecting
) => {
  const listHeight = JSON.stringify(
    list?.current?.getBoundingClientRect().height
  );

  if (listHeight > 100) {
    return new IntersectionObserver(
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
  }
};
