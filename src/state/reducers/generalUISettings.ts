import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceNames } from "../names";
import GeneralUISettings from '../../utils/interfaces/generalUISettings';

const initialState: GeneralUISettings = {displaySize: 'mobile'};

const generalUISettingsSlice = createSlice({
    name: SliceNames.GENERAL_UI_SETTINGS,
    initialState,
    reducers:{
        setDisplaySizeState: (state, action: PayloadAction<GeneralUISettings>)=>{
            state.displaySize = action.payload.displaySize;
        },
    }
});

const generalUISettingsReducer = generalUISettingsSlice.reducer
export const { setDisplaySizeState } = generalUISettingsSlice.actions;
export default generalUISettingsReducer;