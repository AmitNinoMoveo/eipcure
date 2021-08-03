import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRestaurantRepo } from "../repository/repository";
import { getRestaurantActionType } from "./actionTypes";

export const getRestaurantAction = createAsyncThunk(
    getRestaurantActionType.type,
    async (id: string)=> await getRestaurantRepo(id)
);