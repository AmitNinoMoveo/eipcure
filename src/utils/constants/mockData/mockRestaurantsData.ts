import { generateDishesArray, getRandomNum } from "../../functions/functions";
import Restaurant from "../../interfaces/data/restaurant";
import mockChefsData from "./mockChefsData";

const mockRestaurantsData: Restaurant[] = [
  {
    id: 1,
    name: "Clara",
    chef: mockChefsData[5],
    isOpen: true,
    stats: {
      publishedAt: new Date(),
      numOfLikes: 100,
    },
    dishes: generateDishesArray()
  },
  {
    id: 2,
    name: "Breakfast at Nino's",
    chef: mockChefsData[getRandomNum(5, 1)],
    isOpen: true,
    stats: {
      publishedAt: new Date(1626728400000),
      numOfLikes: 10,
    },
    dishes: generateDishesArray()
  },
  {
    id: 3,
    name: "Ochel",
    chef: mockChefsData[getRandomNum(5, 1)],
    isOpen: false,
    stats: {
      publishedAt: new Date(1282424400000),
      numOfLikes: 70,
    },
    dishes: generateDishesArray()
  },
];

export default mockRestaurantsData;
