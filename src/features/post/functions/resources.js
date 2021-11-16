export const defaultValues = (post) => {
  return {
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
    handles: post.handles?.length
      ? post.handles.map((value) => ({
          handle: value,
        }))
      : [{ handle: "" }],
    tools: post.tools?.length
      ? post.tools.map((value) => ({
          tool: value,
        }))
      : [{ tool: "" }],
    skills: post.skills?.length
      ? post.skills.map((value) => ({
          skill: value,
        }))
      : [{ skill: "" }],
    parallel: post?.parallel,
    note: post?.note,
    status: post?.status,
    memo: post?.memo,
  };
};

export const object = (data) => {
  return {
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
  };
};
