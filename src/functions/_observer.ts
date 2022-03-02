export const createObserver = (
  list: React.RefObject<HTMLDivElement>,
  hit:
    | {
        posts: number;
        pages: number;
        currentPage: number;
      }
    | undefined,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  intersecting: boolean,
  setIntersecting: React.Dispatch<React.SetStateAction<boolean>>,
  target?: string
): IntersectionObserver | undefined => {
  const side = target === "side";

  const listHeight = Number(
    JSON.stringify(list?.current?.getBoundingClientRect().height)
  );

  const innerHeight = side ? 100 : window.innerHeight + 100;

  if (listHeight > innerHeight) {
    return new IntersectionObserver(
      ([results]) => {
        if (results.isIntersecting && !intersecting) {
          if (hit && page < hit.pages) {
            setIntersecting(results.isIntersecting);
          }
          setPage((prevPage) => prevPage + 1);
        }
      },
      side
        ? {
            root: list.current,
            rootMargin: `0px`,
          }
        : {
            rootMargin: `0px 0px ${innerHeight}px 0px`,
          }
    );
  }
};
