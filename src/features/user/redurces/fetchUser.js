export const fetchUser = (state, action) => {
  if (action.payload) {
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
      matters: action.payload.likes.matters,
      resources: action.payload.likes.resources,
      persons: action.payload.likes.persons,
    };
  }

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
};
