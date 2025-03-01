import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./ChatSlice";
const store=configureStore({
    reducer:{
        app:appslice,
        search:searchSlice,
        chat:chatSlice
    }
})
export default store;