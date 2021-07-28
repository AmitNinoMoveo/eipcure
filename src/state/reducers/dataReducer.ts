import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceNames } from "../names";
import Data from "../../utils/interfaces/data";
import ChefWeek from "../../utils/interfaces/data/chefWeek";
import Restaurant from "../../utils/interfaces/data/restaurant";

const initialState: Data = {
  chefWeek: { chefName: "", picture: "", description: "", restaurants: [] },
  restaurants: [],
  chefs: [],
};

const dataSlice = createSlice({
  name: SliceNames.DATA,
  initialState,
  reducers: {
    setChefWeek: (state, action: PayloadAction<ChefWeek>) => {
      state.chefWeek = action.payload;
    },
    setRestaurants: (state, action: PayloadAction<Restaurant[]>)=>{
      state.restaurants = action.payload
    }
  },
});

const dataReducer = dataSlice.reducer;
export const { setChefWeek, setRestaurants } = dataSlice.actions;
export default dataReducer;
