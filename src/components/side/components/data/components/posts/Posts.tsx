import styles from "./Posts.module.scss";

import CountUp from "react-countup";
import { Company, Person } from "types/post";
import { Index, Type } from "hooks/useSideFetch";

interface PropType {
  user: Company | Person;
  setType: React.Dispatch<React.SetStateAction<Type>>;
  setIndex: React.Dispatch<React.SetStateAction<Index>>;
}

type PostList =
  | {
      follows: string;
      posts: string;
      likes: string;
      outputs: string;
      entries: string;
    }
  | {
      follows: string;
      likes: string;
      entries: string;
      requests: string;
    }
  | undefined;

export const Posts: React.FC<PropType> = ({ user, setType, setIndex }) => {
  const posts: PostList =
    "posts" in user
      ? {
          follows: "フォロー",
          posts: "投稿",
          likes: "いいね",
          outputs: "出力",
          entries: "問い合わせ",
        }
      : "requests" in user
      ? {
          follows: "フォロー",
          likes: "いいね",
          entries: "問い合わせ",
          requests: "リクエスト",
        }
      : undefined;

  const handleOpen = ({ type, index }: { type: Type; index?: Index }): void => {
    setType(type);
    index ? setIndex(index) : setIndex("companys");
  };

  return (
    <div className={styles.posts}>
      {posts &&
        Object.keys(posts).map((type) => (
          <div className={styles.posts_container} key={type}>
            <span
              className={`${styles.posts_tag} ${styles[`posts_tag_${type}`]}`}
            >
              {posts[type as keyof PostList]}
            </span>

            {("posts" in user && type !== "follows") ||
            ("requests" in user && type === "requests") ? (
              <div className={styles.posts_wrap}>
                {user?.[type as keyof PostList] &&
                  Object.keys(user[type as keyof PostList]).map((index) => (
                    <button
                      type="button"
                      onClick={() =>
                        handleOpen({
                          type: type as keyof PostList,
                          index: index as Index,
                        })
                      }
                      className={styles.posts_item}
                      key={index}
                    >
                      {"posts" in user ? (
                        <span className={styles.posts_item_tag}>
                          {index === "matters"
                            ? "案件"
                            : index === "resources"
                            ? "人材"
                            : index === "persons" && "エンジニア"}
                        </span>
                      ) : "requests" in user ? (
                        <span className={styles.posts_item_tag}>
                          {index === "enable"
                            ? "承認済み"
                            : index === "hold"
                            ? "未承認"
                            : index === "disable" && "ブロック"}
                        </span>
                      ) : (
                        <></>
                      )}

                      {"posts" in user ? (
                        (type === "likes" || type === "entries") &&
                        (index === "matters" ||
                          index === "resources" ||
                          index === "persons") ? (
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
                              件
                            </span>
                          </div>
                        ) : (type === "posts" || type === "outputs") &&
                          (index === "matters" || index === "resources") ? (
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
                              件
                            </span>
                          </div>
                        ) : (
                          <></>
                        )
                      ) : index === "enable" ||
                        index === "hold" ||
                        index === "disable" ? (
                        <div
                          className={`${styles.posts_item_count} ${
                            !user?.requests?.[index]?.length &&
                            styles.posts_item_count_none
                          }`}
                        >
                          <CountUp
                            start={0}
                            end={user?.requests?.[index]?.length}
                            duration={3}
                            useEasing={true}
                          />
                          &nbsp;
                          <span className={styles.posts_item_count_desc}>
                            人
                          </span>
                        </div>
                      ) : (
                        <></>
                      )}
                    </button>
                  ))}
              </div>
            ) : (
              <div className={styles.posts_wrap}>
                <button
                  type="button"
                  onClick={() => handleOpen({ type: type as keyof PostList })}
                  className={styles.posts_item}
                >
                  <span className={styles.posts_item_tag}></span>

                  {"posts" in user ? (
                    <div
                      className={`${styles.posts_item_count} ${
                        !user?.follows?.length && styles.posts_item_count_none
                      }`}
                    >
                      <CountUp
                        start={0}
                        end={user?.follows?.length}
                        duration={3}
                        useEasing={true}
                      />
                      &nbsp;
                      <span className={styles.posts_item_count_desc}>人</span>
                    </div>
                  ) : type === "likes" ||
                    type === "entries" ||
                    type === "follows" ? (
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
                  ) : (
                    <></>
                  )}
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
