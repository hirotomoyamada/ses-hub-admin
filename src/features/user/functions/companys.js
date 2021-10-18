export const defaultValues = (user) => {
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

export const object = (data) => {
  return {
    status: data.status,
    icon: data.icon,
    cover: data.cover,
    name: data.name,
    person: data.person,
    body: data.body,
    tel: data.tel,
    postal: data.postal,
    address: data.address,
    url: data.url,
    more: data.more,
    region: data.region,
    social: data.social,
  };
};
