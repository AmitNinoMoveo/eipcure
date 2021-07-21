import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceNames } from "../names";
import displaySize from '../../utils/interfaces/displaySize';

const initialState: displaySize = {displaySize: 'mobile'};

const displaySizeSlice = createSlice({
    name: SliceNames.DISPLAY_SIZE,
    initialState,
    reducers:{
        setDisplaySizeState: (state, action: PayloadAction<displaySize>)=>{
            state.displaySize = action.payload.displaySize;
        },
    }
});

const displaySizeReducer = displaySizeSlice.reducer
export const { setDisplaySizeState } = displaySizeSlice.actions;
export default displaySizeReducer;