import styles from "./User.module.scss";
import { useEffect, useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as userSlice from "features/user/userSlice";
import * as rootSlice from "features/root/rootSlice";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import * as functions from "functions";
import { Edit } from "features/root/initialState";
import { Company, Person } from "types/posts";

interface PropType {
  index: Edit;
  handleClose: () => void;
}

export type Data = functions.company.Data | functions.person.Data;

export const User: React.FC<PropType> = ({ index, handleClose }) => {
  const dispatch = useDispatch();

  const user = useSelector(userSlice.user);
  const filter = useSelector(rootSlice.search).filter;

  const [cover, setCover] = useState(false);
  const [icon, setIcon] = useState(false);

  const methods = useForm<Data>({
    defaultValues:
      index === "companys"
        ? functions.company.defaultValues(user as Company)
        : index === "persons"
        ? functions.person.defaultValues(user as Person)
        : undefined,
  });

  useEffect(() => {
    methods.reset(
      index === "companys"
        ? functions.company.defaultValues(user as Company)
        : functions.person.defaultValues(user as Person)
    );
  }, [index, methods, user]);

  const handleBack = () => {
    setCover(false);
    setIcon(false);
  };

  const handleEdit: SubmitHandler<Data> = (data): void => {
    if (index !== "companys" && index !== "persons") {
      return;
    }

    if (
      index === "companys" &&
      "payment" in user &&
      "type" in data &&
      user.type !== data.type &&
      user.payment.price
    ) {
      dispatch(
        rootSlice.handleAnnounce({
          error:
            "このアカウントは、現在プランまたはオプションを契約中のため、個人・法人の編集できません。",
        })
      );

      return;
    }

    if (
      index === "companys" &&
      "payment" in user &&
      "type" in data &&
      user.type !== data.type &&
      user.payment?.children?.length
    ) {
      dispatch(
        rootSlice.handleAnnounce({
          error:
            "このアカウントは、グループアカウントを保有しているため、個人・法人の編集できません。",
        })
      );

      return;
    }

    const profile: Company | Person | undefined =
      index === "companys" && "type" in data
        ? {
            ...user,
            ...functions.company.profile(data),
          }
        : index === "persons" && "state" in data
        ? {
            ...user,
            ...functions.person.profile(data),
          }
        : undefined;

    if (!profile) {
      dispatch(
        rootSlice.handleAnnounce({
          error: "プロフィールの編集に失敗しました",
        })
      );

      return;
    }

    dispatch(
      userSlice.editUser({ index: index, user: profile, filter: filter })
    );
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.user} onSubmit={methods.handleSubmit(handleEdit)}>
        <Header
          user={user}
          icon={icon}
          cover={cover}
          handleBack={handleBack}
          handleClose={handleClose}
        />

        <Main
          index={index}
          user={user}
          icon={icon}
          setIcon={setIcon}
          cover={cover}
          setCover={setCover}
        />
      </form>
    </FormProvider>
  );
};
