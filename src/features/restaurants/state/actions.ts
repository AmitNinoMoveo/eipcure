import { createAsyncThunk } from "@reduxjs/toolkit";
import { restaurantsRepoTypes } from "../repository/repository";
import { restaurantsSetDataAction } from "./actionTypes";

export const getRestaurantAction = createAsyncThunk(
restaurantsSetDataAction.type,
  async (command: restaurantsRepoTypes) => { 
    const response = await command();
    return response;
  }
);