import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../names";
import displaySize from '../../utils/interfaces/displaySize';

const initialState: displaySize = 'mobile';

const displaySizeSlice = createSlice({
    name: SliceNames.DISPLAY_SIZE,
    initialState,
    reducers:
        setDisplaySizeState:(state, action)=>{

        }
});