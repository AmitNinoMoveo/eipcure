import dishPics from "../constants/mockData/mockDishPics";
import MockDishStageCategory from "../constants/mockData/mockDishStageCategoryData";
import mockIconsDictionaryData from "../constants/mockData/mockIconsDictionaryData";
import Dish from "../interfaces/data/dish";
import IconNameProps from "../interfaces/iconDictionaryItem";
import { getRandomNum } from "./functions";

export const generateIconsArray = () => {
  const numOfIcons = getRandomNum(3, 1);
  const iconsArray: IconNameProps[] = [];
  for (let i = 0; i < numOfIcons; i++) {
    iconsArray.push(mockIconsDictionaryData[getRandomNum(3)]);
  }
  return iconsArray;
};

export const generateDish = (
  dishId: string,
  restaurant: { id: string; name: string }
) => {
  const dishNameStrings = ["Red Farm", "Pad Ki Mao", "Ta Ma-La-Ko"];
  const dishIngrediantStrigns = [
    "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori",
    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
  ];
  const dish = {
    id: dishId,
    picture: dishPics[getRandomNum(4)],
    name: dishNameStrings[getRandomNum(3)],
    restaurant,
    ingredients: dishIngrediantStrigns[getRandomNum(3)],
    dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
    price: getRandomNum(110, 50),
    icons: generateIconsArray(),
  };
  return dish;
};

export const generateDishesArray = (restaurant: {
  id: string;
  name: string;
}) => {
  const numOfDishes = getRandomNum(10, 4);
  const dishesArray: Dish[] = [];
  for (let i = 0; i <= numOfDishes; i++) {
    dishesArray.push(generateDish(`${i}`, restaurant));
  }
  return dishesArray;
};
