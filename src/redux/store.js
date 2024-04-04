import { configureStore } from "@reduxjs/toolkit";
import count from "./count";
import lang from "./lang";

const store = configureStore({
  reducer: {
    count,
    lang,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
