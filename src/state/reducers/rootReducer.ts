import { combineReducers } from "@reduxjs/toolkit";
import displaySizeReducer from "./displaySizeReducer";

const rootReducer = combineReducers({
    displaySize: displaySizeReducer,
    
});

export default rootReducer;