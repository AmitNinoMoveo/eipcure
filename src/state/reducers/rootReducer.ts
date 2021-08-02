import { combineReducers } from "@reduxjs/toolkit";
import RestaurantsPageReducer from "../../features/restaurants/state/restaurantsPageReducer";
import generalUISettingsReducer from "./generalUISettings";
import HomePageReducer from "./homePageReducer";

const rootReducer = combineReducers({
    generalUISettings: generalUISettingsReducer,
    homePage: HomePageReducer,
    restaurantsPage: RestaurantsPageReducer
});

export default rootReducer;