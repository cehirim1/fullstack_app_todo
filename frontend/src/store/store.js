import { configureStore } from "@reduxjs/toolkit";
import { systemSlice } from "./slice/systemSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todoAPI } from "./API/TodoAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserAuthAPI } from "./API/UserAuthAPI";
import { userSlice } from "./slice/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedSystemReducer = persistReducer(
  persistConfig,
  systemSlice.reducer
);

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: {
    system: persistedSystemReducer,
    user: persistedUserReducer,
    [todoAPI.reducerPath]: todoAPI.reducer,
    [UserAuthAPI.reducerPath]: UserAuthAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(todoAPI.middleware, UserAuthAPI.middleware),
});

setupListeners(store.dispatch);

export let persistedStore = persistStore(store);
