import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getRestaurantInfoRepo,
  getRetaurantDishesRepo,
} from "../repository/repository";
import singleDishFilter from "../utils/constants";
import {
  getRestaurantDishesActionType,
  getRestaurantInfoActionType,
} from "./actionTypes";

export const getRestaurantInfoAction = createAsyncThunk(
  getRestaurantInfoActionType.type,
  async (id: string) => await getRestaurantInfoRepo(id)
);

export const getRestaurantDishesAction = createAsyncThunk(
  getRestaurantDishesActionType.type,
  async ({id, type}:{id: string, type: singleDishFilter}) => {
    const response = await getRetaurantDishesRepo(id, type);
    return response;
  }
);
