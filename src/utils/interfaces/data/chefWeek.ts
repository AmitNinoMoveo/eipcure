import Restaurant from "./restaurant";

export interface ChefWeekRestaurant{
    id: number,
    name: string,
    picture: string
}

export default interface ChefWeek{
    chefName: string,
    picture: string,
    description: string,
    restaurants: ChefWeekRestaurant[]
}