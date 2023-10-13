import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./postReducer";

const globalState = configureStore({
    reducer: {
        postReducer
    }
})

export default globalState
