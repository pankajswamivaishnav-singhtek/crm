import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const userSlice = createSlice({
  name: "setUser",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.error = null;
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
