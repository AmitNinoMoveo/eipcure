import { createAsyncThunk } from "@reduxjs/toolkit";
import { SliceNames } from "../../../state/names";
import { HomePage } from "../../../state/reducers/homePageReducer";
import { HomePageActionNames } from "./actionTypes";
import { getHomePageDataRepo } from "../repository/repository";

export const getHomePageDataAction = createAsyncThunk(
  `${SliceNames.HOME_PAGE}/${HomePageActionNames.HOMEPAGE_GET_DATA}`,
  async () => {
    const response: HomePage = getHomePageDataRepo();
    return response;
  }
);