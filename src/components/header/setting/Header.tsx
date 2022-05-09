import React from "react";
import styles from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import * as rootSlice from "features/root/rootSlice";
import { Data } from "types/auth";
import * as functions from "functions";
import { Index } from "features/root/initialState";

interface PropType {
  index: Index;
  data?: { seshub: Data; freelanceDirect: Data };
  disable?: boolean;
}

export const Header: React.FC<PropType> = ({ index, data, disable }) => {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname.slice(1);
  const page = pathname.substring(
    0,
    pathname.indexOf("/") >= 0 ? pathname.indexOf("/") : undefined
  );

  const handleIndex = (index: Index) => {
    dispatch(rootSlice.handleIndex(index));
  };

  return (
    <div
      className={`
        ${styles.header} 
      `}
    >
      <div className={`${styles.btn}`}>
        <div className={styles.btn_wrap}>
          <button
            type="button"
            className={`${styles.btn_index} ${
              index === "companys" && styles.btn_index_sh
            } ${disable && styles.btn_index_disable}`}
            onClick={() => handleIndex("companys")}
          >
            SES_HUB
          </button>

          <button
            type="button"
            className={`${styles.btn_index} ${
              index === "persons" && styles.btn_index_fd
            } ${disable && styles.btn_index_disable}`}
            onClick={() => handleIndex("persons")}
          >
            Freelance Direct
          </button>
        </div>

        <button type="submit" form={page} className={styles.btn_submit}>
          {page !== "mail" ? "変更" : "送信"}
        </button>
      </div>

      {(() => {
        switch (page) {
          case "setting":
            return (
              <span>
                {"最終更新："}
                {data &&
                  functions.root.timestamp(
                    index === "companys"
                      ? data.seshub.information.updateAt
                      : data.freelanceDirect.information.updateAt
                  )}
              </span>
            );

          case "mail":
            return (
              <span>
                {"最終送信："}
                {data &&
                  (index === "companys"
                    ? data.seshub.mail?.updateAt
                      ? functions.root.timestamp(data.seshub.mail.updateAt)
                      : "まだ送信がありません"
                    : data.freelanceDirect.mail?.updateAt
                    ? functions.root.timestamp(
                        data.freelanceDirect.mail.updateAt
                      )
                    : "まだ送信がありません")}
              </span>
            );

          default:
            return <></>;
        }
      })()}
    </div>
  );
};
