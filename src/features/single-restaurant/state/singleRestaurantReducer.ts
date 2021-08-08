import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import { isPending } from "../../../utils/constants/reducerActionMatchers";
import Dish from "../../../utils/interfaces/data/dish";
import { FullRestaurant } from "../../../utils/interfaces/data/restaurant";
import singleDishFilterType from "../utils/constants";
import { SliceNames } from "./../../../state/names";
import { isFulfilled } from "./../../../utils/constants/reducerActionMatchers";
import { getRestaurantDishesAction, getRestaurantInfoAction } from "./actions";

export type SingleRestaurantPage = {
  isLoading: boolean;
  singleRestaurantFilterType: singleDishFilterType;
  restaurant: FullRestaurant;
};

const initialState: SingleRestaurantPage = {
  isLoading: false,
  singleRestaurantFilterType: "breakfast",
  restaurant: {
    id: "",
    name: "",
    picture: "",
    chef: "",
    isOpen: false,
    stats: {
      numOfLikes: 0,
      publishedAt: Date.now(),
    },
    dishes: [],
  },
};

const singleRestaurantExtraReducers = (
  builder: ActionReducerMapBuilder<SingleRestaurantPage>
) => {
  builder
    .addCase(
      getRestaurantInfoAction.fulfilled,
      (state, { payload }: PayloadAction<FullRestaurant>) => {
        state.restaurant = payload;
      }
    )
    .addCase(
      getRestaurantDishesAction.fulfilled,
      (state, { payload }: PayloadAction<Dish[]>) => {
        state.restaurant.dishes = payload;
      }
    )
    .addMatcher(isPending, (state) => {
      state.isLoading = true;
    })
    .addMatcher(isFulfilled, (state) => {
      state.isLoading = false;
    });
};

const singleRestaurantSlice = createSlice({
  name: SliceNames.SINGLE_RESTAURANTS_PAGE,
  initialState,
  reducers: {
    setSingleRestaurantFilterType: (
      state,
      action: PayloadAction<singleDishFilterType>
    ) => {
      state.singleRestaurantFilterType = action.payload;
    },
  },
  extraReducers: singleRestaurantExtraReducers,
});

const SingleRestaurantReducer = singleRestaurantSlice.reducer;
export const { setSingleRestaurantFilterType } = singleRestaurantSlice.actions;
export default SingleRestaurantReducer;
