import { Cover } from "./components/cover/Cover";
import { Icon } from "./components/icon/Icon";
import { Form } from "./components/form/Form";
import { Edit } from "features/root/initialState";
import { Company, Person } from "types/post";

interface PropType {
  index: Edit;
  user: Company | Person;
  icon: boolean;
  cover: boolean;
  setIcon: React.Dispatch<React.SetStateAction<boolean>>;
  setCover: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Main: React.FC<PropType> = ({
  index,
  user,
  icon,
  setIcon,
  cover,
  setCover,
}) => {
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
