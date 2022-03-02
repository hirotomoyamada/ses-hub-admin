import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer from "features/root/rootSlice";
import postReducer from "features/post/postSlice";
import userReducer from "features/user/userSlice";

export const store = configureStore({
  reducer: {
    root: rootReducer,
    post: postReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
