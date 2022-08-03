import { createSlice } from "@reduxjs/toolkit";

const dataSlicer = createSlice({
  name: "data",
  initialState: {
    token: "",
    userProfile: {
      name: "",
      wallet: "",
      address: "",
    },
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setToken, setUserProfile } = dataSlicer.actions;
export default dataSlicer.reducer;
