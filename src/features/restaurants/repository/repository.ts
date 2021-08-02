import mockRestaurantsData from "../../../utils/constants/mockData/mockRestaurantsData";
import {
  FullRestaurant,
  PartialRestaurant,
} from "../../../utils/interfaces/data/restaurant";

const mapRestaurantsArr = (
  restaurants: FullRestaurant[]
): PartialRestaurant[] =>
  restaurants.map(({ id, name, chef, picture }) => ({ id, name, chef, picture }));

export const allRestaurantsRepo = async () => mapRestaurantsArr(mockRestaurantsData);

const openSinceInMs = 604800000; // Two weeks in milliseconds
export const newRestaurantsRepo = async () => {
  const newRestaurants = mockRestaurantsData.filter(
    ({ stats }) => stats.publishedAt > new Date(Date.now() - openSinceInMs)
  );
  return mapRestaurantsArr(newRestaurants);
};

export const popularRestaurantsRepo = async () => {
  const popularRestaurants = mockRestaurantsData
    .filter(({ stats }) => stats.numOfLikes > 50)
    .sort((a, b) => b.stats.numOfLikes - a.stats.numOfLikes);
  return mapRestaurantsArr(popularRestaurants);
};

export const openRestaurantsRepo = async () => {
  const openRestaurants = mockRestaurantsData.filter(({ isOpen }) => isOpen);
  return mapRestaurantsArr(openRestaurants);
};

export type restaurantsRepoTypes = 
  | typeof allRestaurantsRepo
  | typeof newRestaurantsRepo
  | typeof popularRestaurantsRepo
  | typeof openRestaurantsRepo
;
