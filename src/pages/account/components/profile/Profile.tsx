import styles from "./Profile.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Accounts } from "features/user/initialState";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface PropType {
  account: Accounts[number];
}

export const Profile: React.FC<PropType> = ({ account }) => {
  return account ? (
    account.uid ? (
      <div
        className={`
        ${styles.profile} 
        ${account?.type === "parent" && styles.profile_parent} 
        ${
          (account?.type === "child" || account?.payment?.price) &&
          styles.profile_error
        }
      `}
      >
        {(account?.type === "child" || account?.payment?.price) && (
          <div className={styles.profile_wrap}>
            <FontAwesomeIcon
              icon={faExclamationCircle as IconProp}
              className={`${styles.profile_icon} ${
                (account?.type === "child" || account?.payment?.price) &&
                styles.profile_icon_error
              }`}
            />
            <span
              className={
                account?.type === "child" || account?.payment?.price
                  ? styles.profile_error_desc
                  : undefined
              }
            >
              {account?.type !== "child"
                ? "このアカウントは、現在プランを契約中のためプランやオプションの編集できません。"
                : "このアカウントは、子アカウントのため編集できません"}
            </span>
          </div>
        )}

        {account?.type === "parent" && !account?.payment?.price && (
          <div className={styles.profile_wrap}>
            <FontAwesomeIcon
              icon={faExclamationCircle as IconProp}
              className={`${styles.profile_icon}`}
            />

            <span>このアカウントは、法人アカウントです</span>

            {account?.payment?.children?.length ? (
              <span>
                ※&nbsp;このアカウントを含め &nbsp;
                <span className={styles.profile_parent_account}>
                  {!account?.payment?.children
                    ? 1
                    : account?.payment?.children?.length + 1}
                </span>
                &nbsp;アカウントを保有しています
              </span>
            ) : (
              <></>
            )}
          </div>
        )}

        {account?.type === "parent" && !account?.payment?.price && (
          <div className={styles.profile_wrap}>
            <FontAwesomeIcon
              icon={faExclamationCircle as IconProp}
              className={`${styles.profile_icon} ${styles.profile_icon_error}`}
            />
            <span className={styles.profile_error_desc}>
              {account?.payment?.children?.length
                ? "このアカウントを編集すると、保有するグループアカウントも反映されます"
                : "このアカウントは、グループアカウントを保有していません"}
            </span>
          </div>
        )}

        <div className={styles.profile_container}>
          <div className={styles.profile_wrap}>
            <FontAwesomeIcon
              icon={faUser as IconProp}
              className={`${styles.profile_icon} ${
                account?.type === "child" || account?.payment?.price
                  ? styles.profile_icon_error
                  : undefined
              }`}
            />
            <span
              className={
                account?.type === "child" || account?.payment?.price
                  ? styles.profile_error_desc
                  : undefined
              }
            >
              {account?.name}&nbsp;{account?.person}
            </span>
          </div>

          <div className={styles.profile_wrap}>
            <FontAwesomeIcon
              icon={faEnvelope as IconProp}
              className={`${styles.profile_icon} ${
                (account?.type === "child" || account?.payment?.price) &&
                styles.profile_icon_error
              }`}
            />
            <span
              className={
                account?.type === "child" || account?.payment?.price
                  ? styles.profile_error_desc
                  : undefined
              }
            >
              {account?.email}
            </span>
          </div>

          {account?.tel && (
            <div className={styles.profile_wrap}>
              <FontAwesomeIcon
                icon={faPhoneAlt as IconProp}
                className={`${styles.profile_icon} ${
                  (account?.type === "child" || account?.payment?.price) &&
                  styles.profile_icon_error
                }`}
              />
              <span
                className={
                  account?.type === "child" || account?.payment?.price
                    ? styles.profile_error_desc
                    : undefined
                }
              >
                {account?.tel}
              </span>
            </div>
          )}
        </div>
      </div>
    ) : (
      <div className={`${styles.profile} ${styles.profile_notFound}`}>
        <div className={styles.profile_wrap}>
          <FontAwesomeIcon
            icon={faExclamationCircle as IconProp}
            className={`${styles.profile_icon} ${styles.profile_icon_error}`}
          />
          <span className={styles.profile_error_desc}>
            ユーザーが存在しません&nbsp;※&nbsp;UIDを確認し、再度検索をしてください
          </span>
        </div>
      </div>
    )
  ) : (
    <></>
  );
};
