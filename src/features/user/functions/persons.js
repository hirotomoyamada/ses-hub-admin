export const defaultValues = (user) => {
  return {
    status: user?.status,
    icon: user?.icon ? user.icon : "icon0",
    cover: user?.cover ? user.cover : "cover0",
    nickName: user?.nickName,
    name: user?.name,
    body: user?.body,
    age: user?.age,
    sex: user?.sex,
    position: user?.position,
    location: user?.location,

    handles: user?.handles?.[0]
      ? user?.handles.map((value) => ({
          handle: value,
        }))
      : [{ handle: "" }, { handle: "" }, { handle: "" }, { handle: "" }],
    tools: user?.tools?.[0]
      ? user?.tools.map((value) => ({
          tool: value,
        }))
      : [{ tool: "" }, { tool: "" }, { tool: "" }, { tool: "" }],
    skills: user?.skills?.[0]
      ? user?.skills.map((value) => ({
          skill: value,
        }))
      : [{ skill: "" }, { skill: "" }, { skill: "" }],
    urls: user?.urls?.[0]
      ? user?.urls.map((value) => ({
          url: value,
        }))
      : [{ url: "" }],

    costs: {
      min: user?.costs?.min,
      max: user?.costs?.max,
      display: user?.costs?.display,
      type: user?.costs?.type,
    },
    working: user?.working,
    resident: user?.resident,
    clothes: user?.clothes,
    period: {
      year: user?.period?.year,
      month: user?.period?.month,
    },
  };
};

export const object = (data) => {
  return {
    status: data.status,
    icon: data.icon,
    cover: data.cover,
    nickName: data.nickName,
    name: data.name,
    body: data.body,
    age: data.age,
    sex: data.sex,
    position: data.position,
    location: data.location,

    handles: data.handles
      .filter((object) => object[Object.keys(object)])
      .map((object) => object[Object.keys(object)]),
    tools: data.tools
      .filter((object) => object[Object.keys(object)])
      .map((object) => object[Object.keys(object)]),
    skills: data.skills
      .filter((object) => object[Object.keys(object)])
      .map((object) => object[Object.keys(object)]),
    urls: data.urls
      .filter((object) => object[Object.keys(object)])
      .map((object) => object[Object.keys(object)]),

    costs: {
      min: data.costs?.min,
      max: data.costs?.max,
      display: data.costs?.display,
      type: data.costs?.type,
    },
    working: data.working,
    resident: data.resident,
    clothes: data.clothes,
    period: {
      year: data.period?.year,
      month: data.period?.month,
    },
  };
};
