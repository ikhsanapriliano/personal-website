import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./slice/ToggleSlice";

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
