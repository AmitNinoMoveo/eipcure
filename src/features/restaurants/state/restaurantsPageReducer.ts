import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { SliceNames } from "../../../state/names";
import { PartialRestaurant } from "../../../utils/interfaces/data/restaurant";
import {
  getAllRestaurantsDataAction,
  getNewRestaurantsDataAction,
  getOpenRestaurantsDataAction,
  getPopularRestaurantsDataAction,
} from "./actions";

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

const restaurantsBuilder = (
  builder: ActionReducerMapBuilder<RestaurantsPage>
) => {
  builder.addCase(getAllRestaurantsDataAction.pending, (state) => {
    state.isLoading = !state.isLoading;
  });
  builder.addCase(getNewRestaurantsDataAction.pending, (state) => {
    state.isLoading = !state.isLoading;
  });
  builder.addCase(getPopularRestaurantsDataAction.pending, (state) => {
    state.isLoading = !state.isLoading;
  });
  builder.addCase(getOpenRestaurantsDataAction.pending, (state) => {
    state.isLoading = !state.isLoading;
  });
  builder.addCase(getAllRestaurantsDataAction.fulfilled, (state, action) => {
    state.restaurants = action.payload;
  });
  builder.addCase(getNewRestaurantsDataAction.fulfilled, (state, action) => {
    state.restaurants = action.payload;
  });
  builder.addCase(
    getPopularRestaurantsDataAction.fulfilled,
    (state, action) => {
      state.restaurants = action.payload;
    }
  );
  builder.addCase(getOpenRestaurantsDataAction.fulfilled, (state, action) => {
    state.restaurants = action.payload;
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
  extraReducers: restaurantsBuilder,
});

const RestaurantsPageReducer = restaurantsPageSlice.reducer;
export const { setFilterType, setRestaurants, toggleRestaurantsLoading } =
  restaurantsPageSlice.actions;
export default RestaurantsPageReducer;
