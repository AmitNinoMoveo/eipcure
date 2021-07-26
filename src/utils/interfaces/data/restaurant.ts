import Chef from "./chef";
import Dish from "./dish";
import RestaurantStats from "./restaurantStats";

export default interface Restaurant{
    id: number,
    name: string,
    stats: RestaurantStats
    chef: Chef,
    dishes: Dish[],
    isOpen: boolean
}