import styles from "./Menu.module.scss";

import { Header } from "./components/Header";
import { Nav } from "./components/nav/Nav";
import { Footer } from "./components/Footer";

export const Menu: React.FC = () => {
  return (
    <aside className={styles.menu}>
      <Header />
      <Nav />
      <Footer />
    </aside>
  );
};
