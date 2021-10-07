import { functions } from "../../../firebase";

export const editUser = (state, action) => {
  const user = state.posts[action.payload.index].find(
    (post) => post?.uid === action.payload.user.uid
  );

  if (action.payload.index === "companys" && user) {
    user.icon = action.payload.user.icon;
    user.cover = action.payload.user.cover;
    user.status = action.payload.user.status;
    user.updateAt = action.payload.user.updateAt;
    user.name = action.payload.user.name;
    user.person = action.payload.user.person;
    user.body = action.payload.user.body;
    user.more = action.payload.user.more;
    user.region = action.payload.user.region;
    user.postal = action.payload.user.postal;
    user.address = action.payload.user.address;
    user.tel = action.payload.user.tel;
    user.url = action.payload.user.url;
    user.social = {
      line: action.payload.user.social.line,
      twitter: action.payload.user.social.twitter,
      instagram: action.payload.user.social.instagram,
      linkedIn: action.payload.user.social.linkedIn,
    };
  }
  if (action.payload.index === "persons" && user) {
    user.icon = action.payload.user.icon;
    user.cover = action.payload.user.cover;
    user.status = action.payload.user.status;
    user.updateAt = action.payload.user.updateAt;
    user.name = action.payload.user.name;
    user.body = action.payload.user.body;
    user.age = action.payload.user.age;
    user.sex = action.payload.user.sex;
    user.position = action.payload.user.position;
    user.location = action.payload.user.location;
    user.handles = action.payload.user.handles;
    user.tools = action.payload.user.tools;
    user.skills = action.payload.user.skills;
    user.urls = action.payload.user.urls;
    user.data = action.payload.user.data;
  }

  state.announce = { success: "編集しました" };
  state.load = false;

  const editUser = functions.httpsCallable("admin-editUser");
  editUser({
    index: action.payload.index,
    user: action.payload.user,
  }).catch((e) => {
  });
};
