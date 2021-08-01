import { createAsyncThunk } from "@reduxjs/toolkit";
import { SliceNames } from "../../../state/names";
import { PartialRestaurant } from "../../../utils/interfaces/data/restaurant";
import { allRestaurantsRepo, newRestaurantsRepo, openRestaurantsRepo, popularRestaurantsRepo } from "../repository/repository";
import { RestaurantsPageActionNames } from "./actionTypes";

export const getAllRestaurantsDataAction = createAsyncThunk(
  `${SliceNames.RESTAURANTS_PAGE}/${RestaurantsPageActionNames.RESTAURANTS_GET_ALL}`,
  async () => {
    const response: PartialRestaurant[] = await allRestaurantsRepo();
    return response;
  }
);
export const getPopularRestaurantsDataAction = createAsyncThunk(
  `${SliceNames.RESTAURANTS_PAGE}/${RestaurantsPageActionNames.RESTAURANTS_GET_POPULAR}`,
  async () => {
    const response: PartialRestaurant[] = await popularRestaurantsRepo();
    return response;
  }
);
export const getNewRestaurantsDataAction = createAsyncThunk(
  `${SliceNames.RESTAURANTS_PAGE}/${RestaurantsPageActionNames.RESTAURANTS_GET_NEW}`,
  async () => {
    const response: PartialRestaurant[] = await newRestaurantsRepo();
    return response;
  }
);
export const getOpenRestaurantsDataAction = createAsyncThunk(
  `${SliceNames.RESTAURANTS_PAGE}/${RestaurantsPageActionNames.RESTAURANTS_GET_OPEN}`,
  async () => {
    const response: PartialRestaurant[] = await openRestaurantsRepo();
    return response;
  }
);
