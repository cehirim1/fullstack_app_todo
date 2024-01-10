import { configureStore } from "@reduxjs/toolkit";
import { systemSlice } from "./slice/systemSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todoAPI } from "./API/TodoAPI";
import { setupListeners } from "@reduxjs/toolkit/query";

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
    [todoAPI.reducerPath]: todoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoAPI.middleware),
});

setupListeners(store.dispatch);

export let persistedStore = persistStore(store);
