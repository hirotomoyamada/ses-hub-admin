import { useSelector } from "react-redux";

import * as postSlice from "./features/post/postSlice";

import { Side } from "./layouts/side/Side";
import { Main } from "./layouts/main/Main";

export const Admin = () => {
  const index = useSelector(postSlice.index);

  return (
    <div className="admin">
      <Main index={index} />
      <Side index={index} />
    </div>
  );
};
