import styles from "./Header.module.scss";

export const Header = ({ target, type, handleOpen }) => {
  return (
    <button
      type="button"
      onClick={() => handleOpen(target)}
      className={`${styles.header} ${type === target && styles.header_current}`}
    >
      {target === "data"
        ? "ユーザー情報"
        : target === "posts"
        ? "投稿"
        : target === "follows"
        ? "フォロー"
        : target === "likes"
        ? "気になる"
        : target === "outputs"
        ? "出力"
        : target === "requests"
        ? "リクエスト"
        : target === "history"
        ? "履歴"
        : target === "entries" && "問い合わせ"}
    </button>
  );
};
