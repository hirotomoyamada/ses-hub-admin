import styles from "../Header.module.scss";

import { timestamp } from "../../../../../functions/timestamp";

export const Setting = ({ index, data, edit }) => {
  return (
    <div className={`${styles.header} ${styles.header_setting}`}>
      {index !== "account" && (
        <span>
          {index === "setting" ? "最終更新：" : "最終送信："}
          {index === "mail"
            ? edit === "companys"
              ? data.seshub.mail.updateAt
                ? timestamp(data.seshub.mail.updateAt)
                : "まだ送信がありません"
              : data.freelanceDirect.mail.updateAt
              ? timestamp(data.freelanceDirect.mail.updateAt)
              : "まだ送信がありません"
            : timestamp(
                edit === "companys"
                  ? data.seshub.information.updateAt
                  : data.freelanceDirect.information.updateAt
              )}
        </span>
      )}
    </div>
  );
};
