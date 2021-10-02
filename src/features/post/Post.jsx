import styles from "./Post.module.scss";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import * as postSlice from "./postSlice";

import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

export const Post = ({ index, handleClose }) => {
  const dispatch = useDispatch();

  const post = useSelector(postSlice.post);

  const methods = useForm({
    defaultValues:
      index === "matters"
        ? {
            display: post?.display,
            title: post?.title,
            body: post?.body,
            position: post?.position,
            location: post?.location,
            period: {
              year: post?.period?.year,
              month: post?.period?.month,
            },
            costs: {
              min: post?.costs?.min,
              max: post?.costs?.max,
              contract: post?.costs?.contract,
              display: post?.costs?.display,
              type: post?.costs?.type,
            },
            handles: post.handles?.[0]
              ? post.handles.map((value) => ({
                  handle: value,
                }))
              : [{ handle: "" }],
            tools: post.tools?.[0]
              ? post.tools.map((value) => ({
                  tool: value,
                }))
              : [{ tool: "" }],
            requires: post.requires?.[0]
              ? post.requires.map((value) => ({
                  require: value,
                }))
              : [{ require: "" }],
            prefers: post.prefers?.[0]
              ? post.prefers.map((value) => ({
                  prefer: value,
                }))
              : [{ prefer: "" }],
            adjustment: post?.adjustment,
            interviews: post?.interviews,
            times: post?.times,
            remote: post?.remote,
            distribution: post?.distribution,
            span: post?.span,
            note: post?.note,
            status: post?.status,
            memo: post?.memo,
          }
        : index === "resources" && {
            display: post?.display,
            name: post?.name,
            roman: post?.roman,
            position: post?.position,
            sex: post?.sex,
            age: post?.age,
            body: post?.body,
            belong: post?.belong,
            station: post?.station,
            period: {
              year: post?.period?.year,
              month: post?.period?.month,
            },
            costs: {
              min: post?.costs?.min,
              max: post?.costs?.max,
              contract: post?.costs?.contract,
              display: post?.costs?.display,
              type: post?.costs?.type,
            },
            handles: post.handles?.[0]
              ? post.handles.map((value) => ({
                  handle: value,
                }))
              : [{ handle: "" }],
            tools: post.tools?.[0]
              ? post.tools.map((value) => ({
                  tool: value,
                }))
              : [{ tool: "" }],
            skills: post.skills?.[0]
              ? post.skills.map((value) => ({
                  skill: value,
                }))
              : [{ skill: "" }],
            parallel: post?.parallel,
            note: post?.note,
            status: post?.status,
            memo: post?.memo,
          },
  });

  useEffect(() => {
    methods.reset(
      index === "matters"
        ? {
            display: post?.display,
            title: post?.title,
            body: post?.body,
            position: post?.position,
            location: post?.location,
            period: {
              year: post?.period?.year,
              month: post?.period?.month,
            },
            costs: {
              min: post?.costs?.min,
              max: post?.costs?.max,
              contract: post?.costs?.contract,
              display: post?.costs?.display,
              type: post?.costs?.type,
            },
            handles: post.handles?.[0]
              ? post.handles.map((value) => ({
                  handle: value,
                }))
              : [{ handle: "" }],
            tools: post.tools?.[0]
              ? post.tools.map((value) => ({
                  tool: value,
                }))
              : [{ tool: "" }],
            requires: post.requires?.[0]
              ? post.requires.map((value) => ({
                  require: value,
                }))
              : [{ require: "" }],
            prefers: post.prefers?.[0]
              ? post.prefers.map((value) => ({
                  prefer: value,
                }))
              : [{ prefer: "" }],
            adjustment: post?.adjustment,
            interviews: post?.interviews,
            times: post?.times,
            remote: post?.remote,
            distribution: post?.distribution,
            span: post?.span,
            note: post?.note,
            status: post?.status,
            memo: post?.memo,
          }
        : index === "resources" && {
            display: post?.display,
            name: post?.name,
            roman: post?.roman,
            position: post?.position,
            sex: post?.sex,
            age: post?.age,
            body: post?.body,
            belong: post?.belong,
            station: post?.station,
            period: {
              year: post?.period?.year,
              month: post?.period?.month,
            },
            costs: {
              min: post?.costs?.min,
              max: post?.costs?.max,
              contract: post?.costs?.contract,
              display: post?.costs?.display,
              type: post?.costs?.type,
            },
            handles: post.handles?.[0]
              ? post.handles.map((value) => ({
                  handle: value,
                }))
              : [{ handle: "" }],
            tools: post.tools?.[0]
              ? post.tools.map((value) => ({
                  tool: value,
                }))
              : [{ tool: "" }],
            skills: post.skills?.[0]
              ? post.skills.map((value) => ({
                  skill: value,
                }))
              : [{ skill: "" }],
            parallel: post?.parallel,
            note: post?.note,
            status: post?.status,
            memo: post?.memo,
          }
    );
  }, [index, methods, post]);

  const handleEdit = (data) => {
    const object =
      index === "matters"
        ? {
            ...post,
            ...{
              display: data.display,
              title: data.title,
              position: data.position,
              body: data.body,
              location: data.location,
              period: data.period,
              costs: data.costs,
              adjustment: data.adjustment,
              times: data.times,
              handles: data.handles
                .filter((object) => object[Object.keys(object)])
                .map((object) => object[Object.keys(object)]),
              tools: data.tools
                .filter((object) => object[Object.keys(object)])
                .map((object) => object[Object.keys(object)]),
              requires: data.requires
                .filter((object) => object[Object.keys(object)])
                .map((object) => object[Object.keys(object)]),
              prefers: data.prefers
                .filter((object) => object[Object.keys(object)])
                .map((object) => object[Object.keys(object)]),
              interviews: data.interviews,
              remote: data.remote,
              distribution: data.distribution,
              span: data.span,
              note: data.note,
              status: data.status,
              memo: data.memo,
            },
          }
        : index === "resources" && {
            ...post,
            ...{
              display: data.display,
              roman: data.roman,
              sex: data.sex,
              age: data.age,
              body: data.body,
              belong: data.belong,
              station: data.station,
              period: data.period,
              costs: data.costs,
              position: data.position,
              handles: data.handles
                .filter((object) => object[Object.keys(object)])
                .map((object) => object[Object.keys(object)]),
              tools: data.tools
                .filter((object) => object[Object.keys(object)])
                .map((object) => object[Object.keys(object)]),
              skills: data.skills
                .filter((object) => object[Object.keys(object)])
                .map((object) => object[Object.keys(object)]),
              parallel: data.parallel,
              note: data.note,
              status: data.status,
              memo: data.memo,
            },
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
