import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user.slice";
import filterReducer from "./filterSlice";



const store = configureStore({
    reducer: {
        users: userReducer,
        parameters: filterReducer
    }
})


export default store
