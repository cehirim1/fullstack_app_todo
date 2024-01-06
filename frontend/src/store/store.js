import { configureStore } from "@reduxjs/toolkit";
import { systemSlice } from "./slice/systemSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedSystemReducer = persistReducer(
  persistConfig,
  systemSlice.reducer
);

export const store = configureStore({
  reducer: {
    system: persistedSystemReducer,
    // [x]: nameOftheAPI.reducer,
  },
});

export let persistedStore = persistStore(store);
