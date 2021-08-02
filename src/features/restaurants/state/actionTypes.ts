import { createAction } from "@reduxjs/toolkit";
import { SliceNames } from "../../../state/names";
import { PartialRestaurant } from "../../../utils/interfaces/data/restaurant";

export enum RestaurantsPageActionNames {
  SET_DATA = 'SET_DATA',
  SET_FILTER = 'SET_FILTER',
}

export const restaurantsSetDataAction = createAction<PartialRestaurant[]>(`${SliceNames.RESTAURANTS_PAGE}/${RestaurantsPageActionNames.SET_DATA}`);
export const restaurantsSetFilterAction = createAction<PartialRestaurant[]>(`${SliceNames.RESTAURANTS_PAGE}/${RestaurantsPageActionNames.SET_FILTER}`);