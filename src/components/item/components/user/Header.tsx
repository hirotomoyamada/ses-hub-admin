import { Company, Person } from "types/post";
import styles from "./User.module.scss";

interface PropType {
  index: "companys" | "persons";
  post: Company | Person;
  min?: boolean;
}

export const Header: React.FC<PropType> = ({ index, post, min }) => {
  return (
    <div className={styles.item_main_head}>
      <div className={styles.item_row}>
        <span>{post?.name}</span>

        {(post as Company)?.person ? (
          <span>{(post as Company).person}</span>
        ) : (
          (post as Company)?.type === "child" && (
            <span className={styles.item_none}>未設定</span>
          )
        )}

        {(post as Person)?.nickName && (
          <span>(&nbsp;{(post as Person).nickName}&nbsp;)</span>
        )}

        {!min && (
          <div
            className={`${styles.item_category} ${
              styles.item_category_position
            } ${
              (post as Company)?.type === "parent" &&
              styles.item_category_parent
            } ${
              (post as Company)?.type === "child" && styles.item_category_child
            } ${
              index === "companys" &&
              !(post as Company)?.payment?.price &&
              (post as Company)?.payment?.status !== "canceled" &&
              // ver 2.X.X
              // (post?.payment?.status !== "canceled" ||
              //   post?.payment?.option?.freelanceDirect) &&
              styles.item_category_extra
            }`}
          >
            <span>
              {index === "companys" &&
              !(post as Company)?.payment?.price &&
              (post as Company)?.payment?.status !== "canceled"
                ? // ver 2.X.X
                  // (post?.payment?.status !== "canceled" ||
                  // post?.payment?.option?.freelanceDirect)
                  "エキストラ"
                : (post as Company)?.type !== "parent"
                ? (post as Company)?.type === "child"
                  ? "法人\n(\n子アカウント\n)"
                  : post?.position
                  ? post?.position
                  : "未設定"
                : "法人\n(\n親アカウント\n)"}
            </span>
          </div>
        )}

        {!min && (post as Company)?.payment && (
          <div
            className={`${styles.item_category} ${
              (post as Company)?.payment?.status === "active"
                ? styles.item_category_active
                : (post as Company)?.payment?.status === "trialing" &&
                  styles.item_category_trialing
            }`}
          >
            <span>
              {(post as Company)?.payment?.status === "active"
                ? "レギュラー"
                : (post as Company)?.payment?.status === "trialing"
                ? "フリートライアル"
                : "リミテッド"}
            </span>
          </div>
        )}

        {/* ver 2.X.X */}
        {/* {!min && (post as Company)?.payment?.option?.freelanceDirect && (
          <div
            className={`${styles.item_category} ${styles.item_category_trialing}`}
          >
            <span>Freelance Direct</span>
          </div>
        )} */}

        {!min && (post as Company)?.payment?.option?.analytics && (
          <div
            className={`${styles.item_category} ${styles.item_category_parent}`}
          >
            <span>アナリティクス</span>
          </div>
        )}

        {!min && (post as Person)?.state && (
          <div
            className={`${styles.item_category} ${styles.item_category_state} ${
              ((post as Person)?.state === "確定" ||
                (post as Person)?.state === "商談中" ||
                (post as Person)?.state === "情報収集中") &&
              styles.item_category_disable
            } ${
              (post as Person)?.state === "至急" && styles.item_category_hurry
            }`}
          >
            <span>{(post as Person)?.state}</span>
          </div>
        )}

        {(post as Person)?.handles &&
          (post as Person).handles.slice(0, 3).map((handle, index) => (
            <div
              className={`${styles.item_category} ${styles.item_category_handle}`}
              key={index}
            >
              <span>{handle}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
