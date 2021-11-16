export const updateUser = (state, action) => {
  for (const user of action.payload) {
    const target = state.posts.companys.find((post) => post?.uid === user.uid);

    if (target) {
      target.payment.status = user.status;

      if (user.option) {
        target.payment.option = {
          freelanceDirect: user.option === "enable" ? true : false,
        };
      }
    }
  }
};
