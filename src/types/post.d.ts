export interface Company {
  uid: string;
  type: string;
  icon: string;
  cover: string;
  provider: string[];
  agree: string;
  status: string;
  name: string;
  person: string | null;
  body: string | null;
  invoice: { type: string; no: string | undefined } | null;
  position: string | null;
  postal: string | null;
  address: string | null;
  email: string;
  tel: string | null;
  more: string[];
  region: string[];
  url: string | null;
  social: {
    twitter: string | null;
    instagram: string | null;
    line: string | null;
    linkedIn: string | null;
  };
  posts: { matters: string[]; resources: string[] };
  entries: {
    matters: string[];
    resources: string[];
    persons: string[];
  };
  likes: {
    matters: string[];
    resources: string[];
    persons: string[];
  };
  outputs: { matters: string[]; resources: string[] };
  follows: string[];
  home: string[];
  payment: {
    status: string;
    trial: boolean;
    limit: number;
    notice: boolean;

    id?: string;
    option?: { [key: string]: boolean };
    link?: string;
    cancel?: boolean;
    load?: boolean;
    parent?: string;
    account?: number | null;
    children?: string[];
    start?: number | null;
    end?: number | null;
    price?: string | null;
  };
  createAt: number;
  updateAt?: number;
  lastLogin?: number;
  application?: boolean;
  parent?: Company;
}

export interface Person {
  uid: string;
  icon: string;
  cover: string;
  provider: string[];
  status: string;
  agree: string;
  nickName: string | null;
  name: string;
  state: string;
  position: string;
  body: string | null;
  age: number;
  sex: string;
  email: string;
  location: string;
  period: {
    year: number | null;
    month: number | null;
  };
  costs: {
    display: 'public' | 'private';
    type: string;
    min: number | null;
    max: number | null;
  };
  handles: string[];
  tools: string[];
  skills: string[];
  urls: string[];
  clothes: string | null;
  working: number | null;
  resident: string | null;
  likes: string[];
  entries: string[];
  histories: string[];
  follows: string[];
  requests: {
    enable: string[];
    hold: string[];
    disable: string[];
  };
  home: string[];
  resume: {
    key: string | null;
    url: string | null;
  };
  createAt: number;
  updateAt?: number;
  lastLogin?: number;
}

export interface Matter {
  objectID: string;
  title: string;
  industry: string;
  position: string;
  body: string;
  location: {
    area: string;
    place: string;
  };
  period: {
    year: number;
    month: number;
  };
  costs: {
    display: 'public' | 'private';
    type: string;
    min: number | null;
    max: number | null;
    contract: number | null;
  };
  adjustment: string;
  times: {
    start: string;
    end: string;
  };
  handles: string[];
  tools: string[];
  requires: string[];
  prefers: string[];
  interviews: {
    type: string;
    count: string;
    setting: string;
  };
  remote: string;
  distribution: string;
  span: string;
  note: string;
  uid: string;
  createAt: number;
  updateAt?: number;
  status: string;
  display: 'public' | 'private';
  memo: string;
  approval?: string;
  user?: {
    uid: string;
    name: string;
    person: string;
    status: string;
    profile: {
      email: string;
      social: {
        line: string;
        twitter: string;
        instagram: string;
        linkedIn: string;
      };
    };
  };
}

export interface Resource {
  objectID: string;
  roman: {
    firstName: string;
    lastName: string;
  };
  position: string;
  sex: string;
  age: number;
  body: string;
  belong: string;
  station: string;
  period: {
    year: number;
    month: number;
  };
  costs: {
    display: 'public' | 'private';
    type: string;
    min: number | null;
    max: number | null;
    contract: number | null;
  };
  handles: string[];
  tools: string[];
  skills: string[];
  parallel: string;
  note: string;
  uid: string;
  createAt: number;
  updateAt?: number;
  display: 'public' | 'private';
  status: string;
  memo: {
    name: string;
    tel: string;
    address: string;
  };
  user?: {
    uid: string;
    name: string;
    person: string;
    status: string;
    profile: {
      email: string;
      social: {
        line: string;
        twitter: string;
        instagram: string;
        linkedIn: string;
      };
    };
  };
}
