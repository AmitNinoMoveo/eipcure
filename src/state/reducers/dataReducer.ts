import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceNames } from "../names";
import Data from "../../utils/interfaces/data";
import ChefWeek from "../../utils/interfaces/data/chefWeek";

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
  },
});

const dataReducer = dataSlice.reducer;
export const { setChefWeek } = dataSlice.actions;
export default dataReducer;
