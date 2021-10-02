export const companys = (user) => {
  return {
    status: user?.status,
    icon: user?.icon ? user.icon : "icon0",
    cover: user?.cover ? user.cover : "cover0",
    name: user?.name,
    person: user?.person,
    body: user?.body,
    tel: user?.tel,
    postal: user?.postal,
    address: user?.address,
    url: user?.url,
    more: user?.more,
    region: user?.region,
    social: user?.social,
  };
};
