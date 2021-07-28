import DishStageCategory from "./dishStageCategory";

export default interface Dish{
    id: number,
    name: string,
    picture: string
    dishStageCategory: DishStageCategory,
    ingredients: string,
    isSpicy: boolean,
    isVegan: boolean,
    isVegiterian: boolean,
    price: number
};
