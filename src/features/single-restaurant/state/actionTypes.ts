import { createAction } from '@reduxjs/toolkit';
import { SliceNames } from '../../../state/names';
import Dish from '../../../utils/interfaces/data/dish';
import { FullRestaurant } from '../../../utils/interfaces/data/restaurant';

export const getRestaurantInfoActionType = createAction<FullRestaurant>(`${SliceNames.SINGLE_RESTAURANTS_PAGE}/GET_INFO`);
export const getRestaurantDishesActionType = createAction<Dish[]>(`${SliceNames.SINGLE_RESTAURANTS_PAGE}/GET_DISHES`);