import Dish from "./dish";
export interface PartialRestaurant{
    id: string,
    name: string,
    chef: string,
    picture: string
};
export interface RestaurantStats {
    publishedAt: number,
    numOfLikes: number
};
export interface FullRestaurant extends PartialRestaurant{
    stats: RestaurantStats,
    dishes: Dish[],
    isOpen: boolean
};