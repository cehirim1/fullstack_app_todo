import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    userToken: (state, action) => {
      state.token = action.payload;
    },
    resetToken: () => initialState,
  },
});

export const { userToken, resetToken } = userSlice.actions;
