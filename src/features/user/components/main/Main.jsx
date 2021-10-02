import { Cover } from "./components/cover/Cover";
import { Icon } from "./components/icon/Icon";
import { Form } from "./components/form/Form";

export const Main = ({ index, icon, setIcon, cover, setCover }) => {
  return cover ? (
    <Cover />
  ) : icon ? (
    <Icon />
  ) : (
    <Form
      index={index}
      icon={icon}
      cover={cover}
      setIcon={setIcon}
      setCover={setCover}
    />
  );
};
