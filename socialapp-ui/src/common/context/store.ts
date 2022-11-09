import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appFilterReducer } from "./slices/appFilterSlice";

const store = configureStore({
  reducer: {
    appFilter: appFilterReducer,
  },
});

setupListeners(store.dispatch);