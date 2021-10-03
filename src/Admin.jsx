import { useSelector } from "react-redux";

import * as postSlice from "./features/post/postSlice";

import { SideMenu } from "./layouts/sideMenu/SideMenu";
import { Main } from "./layouts/main/Main";

export const Admin = () => {
  const index = useSelector(postSlice.index);

  return (
    <div className="admin">
      <SideMenu index={index} />
      <Main index={index} />
    </div>
  );
};
