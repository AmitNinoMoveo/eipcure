import mockRestaurantsData from "../../../utils/constants/mockData/mockRestaurantsData";
import { generateDishesArray } from "../../../utils/functions/mockDataGenerators";
import singleDishFilter from "../utils/constants";

export const getRestaurantInfoRepo = async (id: string) => {
  let restaurant = mockRestaurantsData.find(
    (restaurant) => restaurant.id === id
  );
  if (restaurant) {
    restaurant.dishes = [];
    return restaurant;
  } else {
    restaurant = { ...mockRestaurantsData[0], dishes: [] };
    return restaurant;
  }
};

export const getRetaurantDishesRepo = async (
  id: string,
  category: singleDishFilter
) => {
  const restaurant = mockRestaurantsData.find(
    (restaurant) => restaurant.id === id
  );
  if (restaurant) {
    return generateDishesArray({ id: restaurant.id, name: restaurant.name });
  } else {
    return generateDishesArray({
      id: mockRestaurantsData[0].id,
      name: mockRestaurantsData[0].name,
    });
  }
};
