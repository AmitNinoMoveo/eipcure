import { combineReducers } from "@reduxjs/toolkit";
import RestaurantsPageReducer from "../../features/restaurants/state/restaurantsPageReducer";
import SingleRestaurantReducer from "../../features/single-restaurant/state/singleRestaurantReducer";
import generalUISettingsReducer from "./generalUISettings";
import HomePageReducer from "./homePageReducer";

const rootReducer = combineReducers({
    generalUISettings: generalUISettingsReducer,
    homePage: HomePageReducer,
    restaurantsPage: RestaurantsPageReducer,
    singleRestaurantPage: SingleRestaurantReducer
});

export default rootReducer;