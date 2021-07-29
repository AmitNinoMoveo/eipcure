import IconNameProps from "../iconDictionaryItem";
import DishStageCategory from "./dishStageCategory";

export default interface Dish{
    id: string,
    name: string,
    picture: string,
    restaurant: {id: string, name: string}
    dishStageCategory: DishStageCategory,
    ingredients: string,
    icons:IconNameProps[]
    price: number
};