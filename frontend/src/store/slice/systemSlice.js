import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", // dark or light
};

export const systemSlice = createSlice({
  name: "systemSlice",
  initialState,
  reducers: {
    makeItToDark: (state) => {
      state.mode = "dark";
    },
    makeItToLight: (state) => {
      state.mode = "light";
    },
    incrementByAmount: (state, action) => {
      // state.value += action.payload;
    },
  },
});

export const { makeItToDark, makeItToLight, incrementByAmount } =
  systemSlice.actions;
