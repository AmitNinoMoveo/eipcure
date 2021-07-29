import { createAsyncThunk } from "@reduxjs/toolkit";
import { SliceNames } from "../../state/names";
import { HomePage } from "../../state/reducers/homePageReducer";
import { ActionNames } from "./actionTypes";
import { getHomePageDataRepo } from "./repository";

export const getHomePageDataAction = createAsyncThunk(
  `${SliceNames.HOME_PAGE}/${ActionNames.HOMEPAGE_GET_DATA}`,
  async () => {
    const response: HomePage = getHomePageDataRepo();
    return response;
  }
);