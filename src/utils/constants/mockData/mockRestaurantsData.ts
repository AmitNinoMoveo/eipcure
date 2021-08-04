import { getRandomNum } from "../../functions/functions";
import { generateDish, generateDishesArray } from "../../functions/mockDataGenerators";
import { FullRestaurant } from "../../interfaces/data/restaurant";
import dishPics from "./mockDishPics";
import mockChefsData from "./mockChefsData";
import Dish from "../../interfaces/data/dish";

const mockRestaurantsData: FullRestaurant[] = [
  {
    id: "1",
    name: "Claro",
    picture: dishPics[getRandomNum(4)],
    chef: mockChefsData["5"],
    isOpen: true,
    stats: {
      publishedAt: Date.now(),
      numOfLikes: 100,
    },
    dishes: generateDishesArray({ id: "1", name: "Clara" }),
  },
  {
    id: "2",
    name: "Breakfast at Nino's",
    picture: dishPics[getRandomNum(4)],
    chef: mockChefsData[`${getRandomNum(5, 1)}`],
    isOpen: true,
    stats: {
      publishedAt: 1626728400000,
      numOfLikes: 10,
    },
    dishes: generateDishesArray({ id: "2", name: "Breakfast at Nino's" }),
  },
  {
    id: "3",
    name: "Ochel",
    picture: dishPics[getRandomNum(4)],
    chef: mockChefsData[`${getRandomNum(5, 1)}`],
    isOpen: false,
    stats: {
      publishedAt: 1282424400000,
      numOfLikes: 70,
    },
    dishes: generateDishesArray({ id: "3", name: "Ochel" }),
  },
];

export const generateSignatureDishArray = () => {
  const restaurants = mockRestaurantsData.map(({ id, name }) => {
    return { id, name };
  });
  const signatureDishArray: Dish[] = [];
  for (let i = 0; i < restaurants.length; i++) {
    signatureDishArray.push(generateDish(`${i}`, restaurants[i]));
  };
  return signatureDishArray;
};

export default mockRestaurantsData;
