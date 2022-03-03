import styles from "../Header.module.scss";

import * as functions from "functions";

import { Edit, Page } from "features/root/initialState";
import { Data } from "types/auth";

interface PropType {
  index: Page;
  edit?: Edit;
  data?: { seshub: Data; freelanceDirect: Data };
}

export const Setting: React.FC<PropType> = ({ index, data, edit }) => {
  return data ? (
    <div className={`${styles.header} ${styles.header_setting}`}>
      {index !== "account" && (
        <span>
          {index === "setting" ? "最終更新：" : "最終送信："}
          {index === "mail"
            ? edit === "companys"
              ? data.seshub.mail?.updateAt
                ? functions.root.timestamp(data.seshub.mail.updateAt)
                : "まだ送信がありません"
              : data.freelanceDirect.mail?.updateAt
              ? functions.root.timestamp(data.freelanceDirect.mail.updateAt)
              : "まだ送信がありません"
            : functions.root.timestamp(
                edit === "companys"
                  ? data.seshub.information.updateAt
                  : data.freelanceDirect.information.updateAt
              )}
        </span>
      )}
    </div>
  ) : (
    <></>
  );
};
