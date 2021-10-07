export const persons = (user) => {
  return {
    status: user?.status,
    icon: user?.icon ? user.icon : "icon0",
    cover: user?.cover ? user.cover : "cover0",
    name: user?.name,
    body: user?.body,
    age: user?.age,
    sex: user?.sex,
    position: user?.position,
    location: user?.location,
    handles: user?.handles,
    tools: user?.tools,
    skills: user?.skills,
    urls: user?.urls,
    data: user?.data,
  };
};
