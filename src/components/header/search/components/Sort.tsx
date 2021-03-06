import styles from "../Header.module.scss";
import { Index } from "features/root/initialState";
import { Data } from "types/auth";

interface PropType {
  index?: Index;
  search: {
    value: string | null;
    target: string | null;
    type: string | null;
    filter: string | null;
  };
  data?: { seshub: Data; freelanceDirect: Data };
  handleAttribuleChange: (f: string) => void;
}

export const User: React.FC<PropType> = ({
  index,
  search,
  data,
  handleAttribuleChange,
}) => {
  return (
    <div
      className={`${styles.header_status} ${
        index === "companys" && styles.header_status_user
      }`}
    >
      <button
        type="button"
        className={`${styles.header_status_btn} ${
          search.filter === "all" && styles.header_status_btn_all
        }`}
        onClick={() => handleAttribuleChange("all")}
      >
        すべて
      </button>

      {index === "companys" && (
        <button
          type="button"
          className={`${styles.header_status_btn} ${
            index === "companys" &&
            data?.seshub.application &&
            styles.header_status_btn_notice
          } ${
            search.filter === "application" &&
            styles.header_status_btn_application
          }`}
          onClick={() => handleAttribuleChange("application")}
        >
          申請
        </button>
      )}

      <button
        type="button"
        className={`${styles.header_status_btn} ${
          ((index === "companys" && data?.seshub.hold) ||
            (index === "persons" && data?.freelanceDirect.hold)) &&
          styles.header_status_btn_notice
        } ${search.filter === "status:hold" && styles.header_status_btn_hold}`}
        onClick={() => handleAttribuleChange("status:hold")}
      >
        未認証
      </button>

      <button
        type="button"
        className={`${styles.header_status_btn} ${
          search.filter === "status:disable" && styles.header_status_btn_disable
        }`}
        onClick={() => handleAttribuleChange("status:disable")}
      >
        停止
      </button>
    </div>
  );
};

export const Post: React.FC<PropType> = ({ search, handleAttribuleChange }) => {
  return (
    <div className={styles.header_status}>
      <button
        type="button"
        className={`${styles.header_status_btn} ${
          search.filter === "all" && styles.header_status_btn_all
        }`}
        onClick={() => handleAttribuleChange("all")}
      >
        すべて
      </button>

      <button
        type="button"
        className={`${styles.header_status_btn} ${
          search.filter === "display:public" && styles.header_status_btn_public
        }`}
        onClick={() => handleAttribuleChange("display:public")}
      >
        公開
      </button>

      <button
        type="button"
        className={`${styles.header_status_btn} ${
          search.filter === "display:private" &&
          styles.header_status_btn_private
        }`}
        onClick={() => handleAttribuleChange("display:private")}
      >
        非公開
      </button>
    </div>
  );
};
