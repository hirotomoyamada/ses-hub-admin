import styles from "../Menu.module.scss";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.menu_header} onClick={() => navigate("/")}>
      <img
        src={`${process.env.PUBLIC_URL}/img/logo/logo.svg`}
        alt=""
        className={styles.menu_header_logo}
      />
      <span>管理画面</span>
    </button>
  );
};
