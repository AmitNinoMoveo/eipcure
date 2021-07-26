import DishStageCategory from "./dishStageCategory";

export default interface Dish{
    id: number,
    name: string,
    picture: string
    dishStageCategory: DishStageCategory,
    ingredients: string,
    price: number
};
