import { combineReducers } from "@reduxjs/toolkit";
import generalUISettingsReducer from "./generalUISettings";
import HomePageReducer from "./homePageReducer";

const rootReducer = combineReducers({
    generalUISettings: generalUISettingsReducer,
    homePage: HomePageReducer,
});

export default rootReducer;