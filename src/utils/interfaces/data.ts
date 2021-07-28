import Chef from "./data/chef";
import ChefWeek from "./data/chefWeek";
import Restaurant from "./data/restaurant";

export default interface Data{
    chefWeek: ChefWeek,
    restaurants: Restaurant[],
    chefs: Chef[]
};