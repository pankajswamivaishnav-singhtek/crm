import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices";
export const store = configureStore({
  reducer: {
    userData: userSlice,
  },
});
