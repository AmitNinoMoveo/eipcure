import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceNames } from "../names";
import GeneralUISettings from '../../utils/interfaces/generalUISettings';
import { displaySizeNames } from "../../utils/constants/displaySizeNames";

const initialState: GeneralUISettings = {displaySize: 'web'};

const generalUISettingsSlice = createSlice({
    name: SliceNames.GENERAL_UI_SETTINGS,
    initialState,
    reducers:{
        setDisplaySizeState: (state, {payload}: PayloadAction<displaySizeNames>)=>{
            state.displaySize = payload;
        },
    }
});

const generalUISettingsReducer = generalUISettingsSlice.reducer
export const { setDisplaySizeState } = generalUISettingsSlice.actions;
export default generalUISettingsReducer;