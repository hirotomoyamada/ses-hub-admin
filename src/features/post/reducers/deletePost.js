import { functions } from "../../../firebase";

export const deletePost = (state, action) => {
  state.posts[action.payload.index] = state.posts[action.payload.index].filter(
    (post) => post?.objectID !== action.payload.post.objectID
  );

  state.announce = { success: "削除しました" };
  state.load = false;

  const deletePost = functions.httpsCallable("admin-deletePost");
  deletePost({
    index: action.payload.index,
    post: action.payload.post,
  }).catch((e) => {});
};
