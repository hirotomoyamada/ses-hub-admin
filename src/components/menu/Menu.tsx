import styles from "./Menu.module.scss";

import { Header } from "./components/Header";
import { Nav } from "./components/nav/Nav";
import { Footer } from "./components/Footer";
import { Edit, Page } from "features/root/initialState";

interface PropType {
  index: {
    page: Page;
    edit: Edit;
  };
}

export const Menu: React.FC<PropType> = ({ index }) => {
  return (
    <aside className={styles.menu}>
      <Header />
      <Nav index={index} />
      <Footer />
    </aside>
  );
};
