import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import { SliceNames } from "../../../state/names";
import { isFulfilled, isPending } from "../../../utils/constants/reducerActionMatchers";
import { PartialRestaurant } from "../../../utils/interfaces/data/restaurant";
import { getRestaurantAction } from "./actions";

export type filter = "all" | "new" | "popular" | "open";

export interface RestaurantsPage {
  isLoading: boolean;
  filterState: filter;
  restaurants: PartialRestaurant[];
}

const initialState: RestaurantsPage = {
  isLoading: false,
  filterState: "all",
  restaurants: [],
};

const restaurantsExtraReducers = (
  builder: ActionReducerMapBuilder<RestaurantsPage>
) => {
  builder
    .addCase(getRestaurantAction.fulfilled, (state, {payload}:PayloadAction<PartialRestaurant[]>) => {
      state.restaurants = payload;
    })
    .addMatcher(isPending, (state) => {
      state.isLoading = true;
    })
    .addMatcher(isFulfilled, (state) => {
      state.isLoading = false;
    });
};

const restaurantsPageSlice = createSlice({
  name: SliceNames.RESTAURANTS_PAGE,
  initialState,
  reducers: {
    toggleRestaurantsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setFilterType: (state, { payload }: PayloadAction<filter>) => {
      state.filterState = payload;
    },
    setRestaurants: (
      state,
      { payload }: PayloadAction<PartialRestaurant[]>
    ) => {
      state.restaurants = payload;
    },
  },
  extraReducers: restaurantsExtraReducers,
});

const RestaurantsPageReducer = restaurantsPageSlice.reducer;
export const { setFilterType, setRestaurants, toggleRestaurantsLoading } =
  restaurantsPageSlice.actions;
export default RestaurantsPageReducer;
