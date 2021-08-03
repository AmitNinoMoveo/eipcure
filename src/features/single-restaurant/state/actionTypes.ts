import { createAction } from '@reduxjs/toolkit';
import { SliceNames } from '../../../state/names';
import { FullRestaurant } from '../../../utils/interfaces/data/restaurant';

export const getRestaurantActionType = createAction<FullRestaurant>(`${SliceNames.SINGLE_RESTAURANTS_PAGE}/GET`);