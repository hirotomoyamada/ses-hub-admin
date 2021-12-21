import { functions } from "../../../firebase";

export const editPost = (state, action) => {
  const post = state.posts[action.payload.index].find(
    (post) => post?.objectID === action.payload.post.objectID
  );

  if (action.payload.index === "matters" && post) {
    post.display = action.payload.post.display;
    post.title = action.payload.post.title;
    post.position = action.payload.post.position;
    post.body = action.payload.post.body;
    post.location = action.payload.post.location;
    post.period = {
      year: action.payload.post.period.year,
      month: action.payload.post.period.month,
    };
    post.costs = action.payload.post.costs;
    post.adjustment = action.payload.post.adjustment;
    post.times = action.payload.post.times;
    post.handles = action.payload.post.handles;
    post.tools = action.payload.post.tools;
    post.requires = action.payload.post.requires;
    post.prefers = action.payload.post.prefers;
    post.interviews = action.payload.post.interviews;
    post.remote = action.payload.post.remote;
    post.distribution = action.payload.post.distribution;
    post.span = action.payload.post.span;
    post.approval = action.payload.post.approval;
    post.note = action.payload.post.note;
    post.status = action.payload.post.status;
    post.memo = action.payload.post.memo;
    post.updateAt = action.payload.post.updateAt;
  }
  if (action.payload.index === "resources" && post) {
    post.display = action.payload.post.display;
    post.roman = action.payload.post.roman;
    post.position = action.payload.post.position;
    post.sex = action.payload.post.sex;
    post.age = action.payload.post.age;
    post.body = action.payload.post.body;
    post.belong = action.payload.post.belong;
    post.station = action.payload.post.station;
    post.period = {
      year: action.payload.post.period.year,
      month: action.payload.post.period.month,
    };
    post.costs = action.payload.post.costs;
    post.handles = action.payload.post.handles;
    post.tools = action.payload.post.tools;
    post.skills = action.payload.post.skills;
    post.parallel = action.payload.post.parallel;
    post.note = action.payload.post.note;
    post.status = action.payload.post.status;
    post.memo = action.payload.post.memo;
    post.updateAt = action.payload.post.updateAt;
  }

  const editPost = functions.httpsCallable("admin-editPost");
  editPost({
    index: action.payload.index,
    post: action.payload.post,
  }).catch((e) => {});
};
