import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import UserReducer from "./slices/User";

export const store = configureStore({
  reducer: {
    User: UserReducer,
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
