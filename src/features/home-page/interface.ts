import Dish from "../../utils/interfaces/data/dish";
import { PartialRestaurant } from "../../utils/interfaces/data/restaurant";

export interface ChefWeek{
    chefName: string,
    picture: string,
    description: string,
    restaurants: PartialRestaurant[]
};