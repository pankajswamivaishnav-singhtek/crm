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

const dropDownState = {
  leadStatus: "",
  leadServices: "",
  leadSources: "",
  status: "idle", // 'idle' | 'loading' |'succeeded' | 'failed'
  error: null,
};

// Set Drop Down state
export const dropDownSlice = createSlice({
  name: "getDropDown",
  initialState: dropDownState,
  reducers: {
    setLeadStatusDropDown: (state, action) => {
      state.error = null;
      state.leadStatus = action.payload;
    },
    setLeadServicesDropDown: (state, action) => {
      state.error = null;
      state.leadServices = action.payload;
    },
    setLeadSourcesDropDown: (state, action) => {
      state.error = null;
      state.leadSources = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions;
export const {
  setLeadStatusDropDown,
  setLeadServicesDropDown,
  setLeadSourcesDropDown,
} = dropDownSlice.actions;

// Export the reducers
export default userSlice.reducer;
export const dropDownReducer = dropDownSlice.reducer;
