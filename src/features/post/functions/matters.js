export const defaultValues = (post) => {
  return {
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
  };
};

export const object = (data) => {
  return {
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
  };
};
