import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices";
import { dropDownReducer } from "./slices";
export const store = configureStore({
  reducer: {
    userData: userSlice,
    dropDown: dropDownReducer,
  },
});
