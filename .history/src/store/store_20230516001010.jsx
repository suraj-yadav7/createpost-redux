import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./slice/userDetail"

const store = configureStore({
    reducer:{
        users:userDetail
    }
})

export default store;