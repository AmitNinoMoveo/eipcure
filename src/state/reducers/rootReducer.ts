import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./dataReducer";
import generalUISettingsReducer from "./generalUISettings";

const rootReducer = combineReducers({
    generalUISettings: generalUISettingsReducer,
    data: dataReducer
});

export default rootReducer;