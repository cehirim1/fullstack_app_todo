import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    userToken: (state, action) => {
     state.userToken = action.payload;
    },
   
   
  },
});

export const { userToken } =
  userSlice.actions;
