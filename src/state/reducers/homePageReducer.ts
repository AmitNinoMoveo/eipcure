import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getHomePageDataAction } from "../../features/home-page/state/actions";
import { ChefWeek } from "../../features/home-page/interfaces/interface";
import Dish from "../../utils/interfaces/data/dish";
import { PartialRestaurant } from "../../utils/interfaces/data/restaurant";
import { SliceNames } from "../names";

export interface HomePage{
  isLoading: boolean
  popularRestaurants: PartialRestaurant[],
  signatureDish: Dish[],
  chefWeek: ChefWeek
};

const initialState: HomePage = {
  isLoading: false,
  chefWeek: { chefName: "", picture: "", description: "", restaurants: [] },
  popularRestaurants: [],
  signatureDish: [],
};

const homePageBuilder = (builder:ActionReducerMapBuilder<HomePage>) => {
  builder.addCase(
    getHomePageDataAction.pending,
    (state) => {
      state.isLoading = !state.isLoading;
    }
  );
  builder.addCase(
    getHomePageDataAction.fulfilled,
    (state, action: PayloadAction<HomePage>) => {
      state.chefWeek = {...action.payload.chefWeek};
      state.signatureDish = [...action.payload.signatureDish];
      state.popularRestaurants = [...action.payload.popularRestaurants];
      state.isLoading = false;
    }
  );
};

const HomePageSlice = createSlice({
  name: SliceNames.HOME_PAGE,
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setState: (state, action: PayloadAction<HomePage>) => {
      state = action.payload;
    },
  },
  extraReducers: homePageBuilder,
});

const HomePageReducer = HomePageSlice.reducer;
export const { toggleLoading, setState } = HomePageSlice.actions;
export default HomePageReducer;