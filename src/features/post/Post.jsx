import styles from "./Post.module.scss";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import * as postSlice from "./postSlice";

import { Header } from "./layouts/header/Header";
import { Main } from "./layouts/main/Main";

import * as matters from "./functions/matters";
import * as resources from "./functions/resources";

export const Post = ({ index, handleClose }) => {
  const dispatch = useDispatch();

  const post = useSelector(postSlice.post);

  const methods = useForm({
    defaultValues:
      index === "matters"
        ? matters.defaultValues(post)
        : index === "resources" && resources.defaultValues(post),
  });

  useEffect(() => {
    methods.reset(
      index === "matters"
        ? matters.defaultValues(post)
        : index === "resources" && resources.defaultValues(post)
    );
  }, [index, methods, post]);

  const handleEdit = (data) => {
    const object =
      index === "matters"
        ? {
            ...post,
            ...matters.object(data),
          }
        : index === "resources" && {
            ...post,
            ...resources.object(data),
          };

    dispatch(postSlice.editPost({ index: index, post: object }));
  };

  const handleDelete = () => {
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
