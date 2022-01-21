export const fetchUser = (state, action) => {
  if (action.payload.type !== "users") {
    action.payload.user.index === "companys"
      ? companys(state, action)
      : action.payload.user.index === "persons" && persons(state, action);
  } else {
    if (action.payload.user) {
      state.users[action.payload.i] = action.payload.user;
    } else {
      state.users[action.payload.i] = { error: true };
    }
  }
};

const companys = (state, action) => {
  state.user.index = action.payload.user.index;
  state.user.uid = action.payload.user.uid;
  state.user.icon = action.payload.user.icon;
  state.user.cover = action.payload.user.cover;
  state.user.status = action.payload.user.status;
  state.user.payment = action.payload.user.payment;
  state.user.agree = action.payload.user.agree;
  state.user.provider = action.payload.user.provider;
  state.user.createAt = action.payload.user.createAt;
  state.user.updateAt = action.payload.user.updateAt;
  state.user.lastLogin = action.payload.user.lastLogin;

  state.user.name = action.payload.user.name;
  state.user.person = action.payload.user.person;
  state.user.position = action.payload.user.position;
  state.user.body = action.payload.user.body;
  state.user.more = action.payload.user.more;
  state.user.region = action.payload.user.region;
  state.user.postal = action.payload.user.postal;
  state.user.address = action.payload.user.address;
  state.user.tel = action.payload.user.tel;
  state.user.email = action.payload.user.email;
  state.user.social = action.payload.user.social;

  state.user.parent = action.payload.user.parent;

  state.user.follows = action.payload.user.follows;
  state.user.home = action.payload.user.home;

  state.user.posts = {
    matters: action.payload.user.posts.matters,
    resources: action.payload.user.posts.resources,
  };

  state.user.likes = {
    matters: action.payload.user.likes.matters,
    resources: action.payload.user.likes.resources,
    persons: action.payload.user.likes.persons,
  };

  state.user.outputs = {
    matters: action.payload.user.outputs.matters,
    resources: action.payload.user.outputs.resources,
  };

  state.user.entries = {
    matters: action.payload.user.entries.matters,
    resources: action.payload.user.entries.resources,
    persons: action.payload.user.entries.persons,
  };

  state.posts = {
    children: [],
    follows: [],

    posts: {
      matters: [],
      resources: [],
    },
    likes: {
      matters: [],
      resources: [],
      persons: [],
    },
    outputs: {
      matters: [],
      resources: [],
    },
    entries: {
      matters: [],
      resources: [],
      persons: [],
    },
  };

  return;
};

const persons = (state, action) => {
  state.user.index = action.payload.user.index;
  state.user.uid = action.payload.user.uid;
  state.user.icon = action.payload.user.icon;
  state.user.cover = action.payload.user.cover;
  state.user.status = action.payload.user.status;
  state.user.agree = action.payload.user.agree;
  state.user.resume = action.payload.user.resume;
  state.user.provider = action.payload.user.provider;
  state.user.createAt = action.payload.user.createAt;
  state.user.updateAt = action.payload.user.updateAt;
  state.user.lastLogin = action.payload.user.lastLogin;

  state.user.state = action.payload.user.state;
  state.user.nickName = action.payload.user.nickName;
  state.user.name = action.payload.user.name;
  state.user.body = action.payload.user.body;
  state.user.position = action.payload.user.position;
  state.user.age = action.payload.user.age;
  state.user.sex = action.payload.user.sex;
  state.user.location = action.payload.user.location;
  state.user.handles = action.payload.user.handles;
  state.user.tools = action.payload.user.tools;
  state.user.skills = action.payload.user.skills;
  state.user.urls = action.payload.user.urls;
  state.user.costs = {
    min: action.payload.user.costs.min,
    max: action.payload.user.costs.max,
    display: action.payload.user.costs.display,
    type: action.payload.user.costs.type,
  };
  state.user.working = action.payload.user.working;
  state.user.resident = action.payload.user.resident;
  state.user.clothes = action.payload.user.clothes;
  state.user.span = action.payload.user.span;

  state.user.follows = action.payload.user.follows;
  state.user.home = action.payload.user.home;
  state.user.likes = action.payload.user.likes;
  state.user.entries = action.payload.user.entries;
  state.user.histories = action.payload.user.histories;

  state.user.requests = {
    enable: action.payload.user.requests.enable,
    hold: action.payload.user.requests.hold,
    disable: action.payload.user.requests.disable,
  };

  state.posts = {
    follows: [],
    likes: [],
    entries: [],
    histories: [],
    requests: {
      enable: [],
      hold: [],
      disable: [],
    },
  };

  return;
};
