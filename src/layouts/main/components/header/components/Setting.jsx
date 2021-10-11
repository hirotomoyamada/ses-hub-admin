import styles from "../Header.module.scss";

import { timestamp } from "../../../../../functions/timestamp";

export const Setting = ({ index, data, edit }) => {
  return (
    <div className={`${styles.header} ${styles.header_setting}`}>
      <span>
        {index === "setting" ? "最終更新：" : "最終送信："}
        {timestamp(
          index === "mail"
            ? edit === "companys"
              ? data.seshub.mail.updateAt
              : data.freelanceDirect.mail.updateAt
            : edit === "companys"
            ? data.seshub.information.updateAt
            : data.freelanceDirect.information.updateAt
        )}
      </span>
    </div>
  );
};
