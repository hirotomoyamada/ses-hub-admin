import { Cover } from "./components/cover/Cover";
import { Icon } from "./components/icon/Icon";
import { Form } from "./components/form/Form";

export const Main = ({ index, user, icon, setIcon, cover, setCover }) => {
  return cover ? (
    <Cover />
  ) : icon ? (
    <Icon index={index} />
  ) : (
    <Form
      index={index}
      user={user}
      icon={icon}
      cover={cover}
      setIcon={setIcon}
      setCover={setCover}
    />
  );
};
