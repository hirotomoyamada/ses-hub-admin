import styles from "./Posts.module.scss";

import CountUp from "react-countup";

export const Posts = ({ user, setType, setIndex }) => {
  const posts = {
    follows: "フォロー",
    posts: "投稿",
    likes: "いいね",
    outputs: "出力",
    entries: "問い合わせ",
  };

  const handleOpen = ({ type, index }) => {
    setType(type);
    index ? setIndex(index) : setIndex("companys");
  };

  return (
    <div className={styles.posts}>
      {Object.keys(posts).map((type) => (
        <div className={styles.posts_container} key={type}>
          <span
            className={`${styles.posts_tag} ${styles[`posts_tag_${type}`]}`}
          >
            {posts[type]}
          </span>

          {type !== "follows" ? (
            <div className={styles.posts_wrap}>
              {user?.[type] &&
                Object.keys(user[type]).map((index) => (
                  <button
                    type="button"
                    onClick={() => handleOpen({ type: type, index: index })}
                    className={styles.posts_item}
                    key={index}
                  >
                    <span className={styles.posts_item_tag}>
                      {index === "matters"
                        ? "案件"
                        : index === "resources"
                        ? "人材"
                        : index === "persons" && "エンジニア"}
                    </span>

                    <div
                      className={`${styles.posts_item_count} ${
                        !user?.[type]?.[index]?.[0] &&
                        styles.posts_item_count_none
                      }`}
                    >
                      <CountUp
                        start={0}
                        end={user?.[type]?.[index]?.length}
                        duration={3}
                        useEasing={true}
                      />
                      &nbsp;
                      <span className={styles.posts_item_count_desc}>件</span>
                    </div>
                  </button>
                ))}
            </div>
          ) : (
            <div className={styles.posts_wrap}>
              <button
                type="button"
                onClick={() => handleOpen({ type: type })}
                className={styles.posts_item}
              >
                <span className={styles.posts_item_tag}></span>

                <div
                  className={`${styles.posts_item_count} ${
                    !user?.[type]?.[0] && styles.posts_item_count_none
                  }`}
                >
                  <CountUp
                    start={0}
                    end={user?.[type]?.length}
                    duration={3}
                    useEasing={true}
                  />
                  &nbsp;
                  <span className={styles.posts_item_count_desc}>人</span>
                </div>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
