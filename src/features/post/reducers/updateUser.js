export const updateUser = (state, action) => {
  if (!action.payload.error) {
    for (const user of action.payload) {
      const target = state.posts.companys.find(
        (post) => post?.uid === user.uid
      );

      if (target) {
        target.payment.status = user.status;

        if (user.option) {
          target.payment.option = {
            freelanceDirect: user.option === "enable" ? true : false,
          };
        }

        target.payment?.children &&
          updateChildren({
            state: state,
            user: user,
            children: target.payment?.children,
          });
      }
    }
  }
};

const updateChildren = ({ state, user, children }) => {
  if (children?.length) {
    for (const child of children) {
      const target = state.posts.companys.find((post) => post?.uid === child);

      if (target) {
        target.payment.status = user.status;

        if (user.option) {
          target.payment.option = {
            freelanceDirect: user.option === "enable" ? true : false,
          };
        }
      }
    }
  }
};
