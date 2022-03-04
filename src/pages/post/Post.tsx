import styles from "./Post.module.scss";
import { useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as postSlice from "features/post/postSlice";
import * as rootSlice from "features/root/rootSlice";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import * as functions from "functions";
import { Edit } from "features/root/initialState";
import { Matter, Resource } from "types/post";

interface PropType {
  index: Edit;
  handleClose: () => void;
}

export type Data = functions.matter.Data | functions.resource.Data;

export const Post: React.FC<PropType> = ({ index, handleClose }) => {
  const dispatch = useDispatch();

  const post = useSelector(postSlice.post);

  const methods = useForm<Data>({
    defaultValues:
      index === "matters"
        ? functions.matter.defaultValues(post as Matter)
        : index === "resources"
        ? functions.resource.defaultValues(post as Resource)
        : undefined,
  });

  useEffect(() => {
    methods.reset(
      index === "matters"
        ? functions.matter.defaultValues(post as Matter)
        : index === "resources"
        ? functions.resource.defaultValues(post as Resource)
        : undefined
    );
  }, [index, methods, post]);

  const handleEdit: SubmitHandler<Data> = (data): void => {
    if (index !== "matters" && index !== "resources") {
      return;
    }

    const edit: Matter | Resource | undefined =
      index === "matters" && "title" in data
        ? {
            ...post,
            ...functions.matter.edit(data),
          }
        : index === "resources" && "roman" in data
        ? {
            ...post,
            ...functions.resource.edit(data),
          }
        : undefined;

    if (!edit) {
      dispatch(
        rootSlice.handleAnnounce({
          error: "プロフィールの編集に失敗しました",
        })
      );

      return;
    }

    dispatch(postSlice.editPost({ index: index, post: edit }));
  };

  const handleDelete = (): void => {
    if (index !== "matters" && index !== "resources") {
      return;
    }

    dispatch(postSlice.deletePost({ index: index, post: post }));
    handleClose();
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.post} onSubmit={methods.handleSubmit(handleEdit)}>
        <Header handleClose={handleClose} handleDelete={handleDelete} />
        <Main index={index} />
      </form>
    </FormProvider>
  );
};
