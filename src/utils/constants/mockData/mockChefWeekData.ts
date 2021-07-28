import ChefWeek, { ChefWeekRestaurant } from "../../interfaces/data/chefWeek";
import mockChefsData from "./mockChefsData";
import ChefPortraitImg from "../../../assets/images/pictures/yossi-shitrit-portrait.png";
import mockRestaurantsData from "./mockRestaurantsData";

const mockChefWeekRestaurantData: ChefWeekRestaurant[] =
  mockRestaurantsData.map((restaurant) => {
    const chefWeekRestaurant: ChefWeekRestaurant = {
      id: restaurant.id,
      name: restaurant.name,
      picture: restaurant.dishes[0].picture,
    };
    return chefWeekRestaurant;
  });

const mockChefWeekData: ChefWeek = {
  chefName: mockChefsData[2],
  description: `Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including  running the kitchen in his first restaurant, the fondly-remembered  Violet, located in Moshav Udim.  Shitrit's creativity and culinary acumen  born of long experience are expressed in the every detail of each and 
    every dish.`,
  picture: ChefPortraitImg,
  restaurants: mockChefWeekRestaurantData,
};

export default mockChefWeekData;