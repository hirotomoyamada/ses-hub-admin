import algoliasearch from "algoliasearch";

export const algolia = algoliasearch(
  process.env.REACT_APP_APPLICATION_ID as string,
  process.env.REACT_APP_ADMIN_API_KEY as string
);
