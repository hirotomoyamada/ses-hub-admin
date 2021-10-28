export const fetchUser = (state, action) => {
  if (action.payload.index === "companys") {
    state.user.index = action.payload.index;
    state.user.uid = action.payload.uid;
    state.user.icon = action.payload.icon;
    state.user.cover = action.payload.cover;
    state.user.status = action.payload.status;
    state.user.payment = action.payload.payment;
    state.user.agree = action.payload.agree;
    state.user.provider = action.payload.provider;
    state.user.createAt = action.payload.createAt;
    state.user.updateAt = action.payload.updateAt;
    state.user.lastLogin = action.payload.lastLogin;

    state.user.name = action.payload.name;
    state.user.person = action.payload.person;
    state.user.position = action.payload.position;
    state.user.body = action.payload.body;
    state.user.more = action.payload.more;
    state.user.region = action.payload.region;
    state.user.postal = action.payload.postal;
    state.user.address = action.payload.address;
    state.user.tel = action.payload.tel;
    state.user.email = action.payload.email;
    state.user.social = action.payload.social;

    state.user.follows = action.payload.follows;
    state.user.home = action.payload.home;

    state.user.posts = {
      matters: action.payload.posts.matters,
      resources: action.payload.posts.resources,
    };

    state.user.likes = {
      matters: action.payload.likes.matters,
      resources: action.payload.likes.resources,
      persons: action.payload.likes.persons,
    };

    state.user.outputs = {
      matters: action.payload.outputs.matters,
      resources: action.payload.outputs.resources,
    };

    state.user.entries = {
      matters: action.payload.entries.matters,
      resources: action.payload.entries.resources,
      persons: action.payload.entries.persons,
    };

    state.posts = {
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
  }

  if (action.payload.index === "persons") {
    state.user.index = action.payload.index;
    state.user.uid = action.payload.uid;
    state.user.icon = action.payload.icon;
    state.user.cover = action.payload.cover;
    state.user.status = action.payload.status;
    state.user.agree = action.payload.agree;
    state.user.resume = action.payload.resume;
    state.user.provider = action.payload.provider;
    state.user.createAt = action.payload.createAt;
    state.user.updateAt = action.payload.updateAt;
    state.user.lastLogin = action.payload.lastLogin;

    state.user.state = action.payload.state;
    state.user.nickName = action.payload.nickName;
    state.user.name = action.payload.name;
    state.user.body = action.payload.body;
    state.user.position = action.payload.position;
    state.user.age = action.payload.age;
    state.user.sex = action.payload.sex;
    state.user.location = action.payload.location;
    state.user.handles = action.payload.handles;
    state.user.tools = action.payload.tools;
    state.user.skills = action.payload.skills;
    state.user.urls = action.payload.urls;
    state.user.costs = {
      min: action.payload.costs.min,
      max: action.payload.costs.max,
      display: action.payload.costs.display,
      type: action.payload.costs.type,
    };
    state.user.working = action.payload.working;
    state.user.resident = action.payload.resident;
    state.user.clothes = action.payload.clothes;
    state.user.span = action.payload.span;

    state.user.follows = action.payload.follows;
    state.user.home = action.payload.home;
    state.user.likes = action.payload.likes;
    state.user.entries = action.payload.entries;
    state.user.history = action.payload.history;

    state.user.requests = {
      enable: action.payload.requests.enable,
      hold: action.payload.requests.hold,
      disable: action.payload.requests.disable,
    };

    state.posts = {
      follows: [],
      likes: [],
      entries: [],
      history: [],
      requests: {
        enable: [],
        hold: [],
        disable: [],
      },
    };
  }
};
