import {  configureStore } from "@reduxjs/toolkit";
import count from "./count";

const store = configureStore({
    reducer:{
        count
    },
    devTools: process.env.NODE_ENV !== "production"
})

export default store