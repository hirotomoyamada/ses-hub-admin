import { functions } from "../../../firebase";

export const editUser = (state, action) => {
  if (action.payload.index === "companys") {
    state.user.icon = action.payload.user.icon;
    state.user.cover = action.payload.user.cover;
    state.user.status = action.payload.user.status;
    state.user.updateAt = action.payload.user.updateAt;
    state.user.name = action.payload.user.name;
    state.user.person = action.payload.user.person;
    state.user.body = action.payload.user.body;
    state.user.more = action.payload.user.more;
    state.user.region = action.payload.user.region;
    state.user.postal = action.payload.user.postal;
    state.user.address = action.payload.user.address;
    state.user.tel = action.payload.user.tel;
    state.user.url = action.payload.user.url;
    state.user.social = {
      line: action.payload.user.social.line,
      twitter: action.payload.user.social.twitter,
      instagram: action.payload.user.social.instagram,
      linkedIn: action.payload.user.social.linkedIn,
    };
  }
  if (action.payload.index === "persons") {
    state.user.icon = action.payload.user.icon;
    state.user.cover = action.payload.user.cover;
    state.user.status = action.payload.user.status;
    state.user.updateAt = action.payload.user.updateAt;
    state.user.name = action.payload.user.name;
    state.user.body = action.payload.user.body;
    state.user.age = action.payload.user.age;
    state.user.sex = action.payload.user.sex;
    state.user.position = action.payload.user.position;
    state.user.location = action.payload.user.location;
    state.user.handles = action.payload.user.handles;
    state.user.tools = action.payload.user.tools;
    state.user.skills = action.payload.user.skills;
    state.user.urls = action.payload.user.urls;
    state.user.data = action.payload.user.data;
    state.user.costs = action.payload.user.costs;
    state.user.working = action.payload.user.working;
    state.user.resident = action.payload.user.resident;
    state.user.clothes = action.payload.user.clothes;
    state.user.span = action.payload.user.span;
  }

  const editUser = functions.httpsCallable("admin-editUser");
  editUser({
    index: action.payload.index,
    user: action.payload.user,
  }).catch((e) => {});
};
