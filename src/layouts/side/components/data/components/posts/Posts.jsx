import styles from "./Posts.module.scss";

import CountUp from "react-countup";

export const Posts = ({ user, setType, setIndex }) => {
  const posts =
    user.index === "companys"
      ? {
          follows: "フォロー",
          posts: "投稿",
          likes: "いいね",
          outputs: "出力",
          entries: "問い合わせ",
        }
      : user.index === "persons" && {
          follows: "フォロー",
          likes: "いいね",
          entries: "問い合わせ",
          requests: "リクエスト",
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

          {(user.index === "companys" && type !== "follows") ||
          (user.index === "persons" && type === "requests") ? (
            <div className={styles.posts_wrap}>
              {user?.[type] &&
                Object.keys(user[type]).map((index) => (
                  <button
                    type="button"
                    onClick={() => handleOpen({ type: type, index: index })}
                    className={styles.posts_item}
                    key={index}
                  >
                    {user.index === "companys" ? (
                      <span className={styles.posts_item_tag}>
                        {index === "matters"
                          ? "案件"
                          : index === "resources"
                          ? "人材"
                          : index === "persons" && "エンジニア"}
                      </span>
                    ) : (
                      <span className={styles.posts_item_tag}>
                        {index === "enable"
                          ? "承認済み"
                          : index === "hold"
                          ? "未承認"
                          : index === "disable" && "ブロック"}
                      </span>
                    )}

                    <div
                      className={`${styles.posts_item_count} ${
                        !user?.[type]?.[index]?.length &&
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
                      <span className={styles.posts_item_count_desc}>
                        {type !== "requests" ? "件" : "人"}
                      </span>
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
                    !user?.[type]?.length && styles.posts_item_count_none
                  }`}
                >
                  <CountUp
                    start={0}
                    end={user?.[type]?.length}
                    duration={3}
                    useEasing={true}
                  />
                  &nbsp;
                  <span className={styles.posts_item_count_desc}>
                    {type !== "follows" ? "件" : "人"}
                  </span>
                </div>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
