import styles from "../Data.module.scss";

import { timestamp } from "../../../../../functions/timestamp";

export const Payment = ({ user }) => {
  return (
    <div className={styles.data_col}>
      <div className={styles.data_item}>
        <span className={styles.data_item_tag}>タイプ</span>
        <span className={styles.data_item_text}>
          {user?.type === "individual"
            ? "個人"
            : user?.type === "parent"
            ? "法人\n(\n親アカウント\n)"
            : "法人\n(\n子アカウント\n)"}
        </span>
      </div>

      <div className={styles.data_item}>
        <span className={styles.data_item_tag}>プラン</span>
        <span className={styles.data_item_text}>
          {user?.payment?.status === "active"
            ? "レギュラー"
            : user?.payment?.status === "trialing"
            ? "フリートライアル"
            : "リミテッド"}
          {user?.type === "parent" &&
            user?.payment?.price &&
            `\n(\n${user?.payment?.account}人\n)\n`}
        </span>
      </div>

      {user?.payment?.start && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>開始</span>
          <span className={styles.data_item_text}>
            {timestamp(user?.payment?.start)}
          </span>
        </div>
      )}

      {user?.payment?.end && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>終了</span>
          <span className={styles.data_item_text}>
            {timestamp(user?.payment?.end)}
          </span>
        </div>
      )}

      <div className={styles.data_item}>
        <span className={styles.data_item_tag}>フリートライアル</span>
        <span className={styles.data_item_text}>
          {!user?.payment?.trial ? "済" : "未"}
        </span>
      </div>

      <div className={styles.data_item}>
        <span className={styles.data_item_tag}>オプション</span>
        <span className={styles.data_item_text}>
          {user?.payment?.option?.freelanceDirect ? "済" : "未"}
        </span>
      </div>
    </div>
  );
};
