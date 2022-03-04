import { Company } from "types/post";
import { NestedPartial } from "types/utils";

export type Data = {
  type: string;
  status: string;
  name: string;
  person: string | null;
  icon: string;
  cover: string;
  body: string | null;
  more: string[];
  region: string[];
  postal: string | null;
  address: string | null;
  tel: string | null;
  url: string | null;
  social: {
    line: string | null;
    twitter: string | null;
    instagram: string | null;
    linkedIn: string | null;
  };
};

export const defaultValues = (user: Company): NestedPartial<Data> => {
  return {
    type: user?.type,
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

export const profile = (
  data: Data
): {
  type: string;
  status: string;
  name: string;
  person: string | null;
  icon: string;
  cover: string;
  body: string | null;
  more: string[];
  region: string[];
  postal: string | null;
  address: string | null;
  tel: string | null;
  url: string | null;
  social: {
    line: string | null;
    twitter: string | null;
    instagram: string | null;
    linkedIn: string | null;
  };
} => {
  return {
    type: data.type,
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
