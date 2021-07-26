import { combineReducers } from "@reduxjs/toolkit";
import generalUISettingsReducer from "./generalUISettings";

const rootReducer = combineReducers({
    generalUISettings: generalUISettingsReducer,
    
});

export default rootReducer;