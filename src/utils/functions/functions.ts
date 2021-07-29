import dishPics from "../constants/dishPics";
import MockDishStageCategory from "../constants/mockData/mockDishStageCategoryData";
import mockIconsDictionaryData from "../constants/mockData/mockIconsDictionaryData";
import Dish from "../interfaces/data/dish";
import IconNameProps from "../interfaces/iconDictionaryItem";

export const getRandomNum = (limit: number, offset: number = 0): number =>
  Math.floor(offset + Math.random() * limit);

export const isTitleTooLong = (title: string, lettersLimit: number): boolean =>
  title.length > lettersLimit;

export const generateIconsArray = () => {
  const numOfIcons = getRandomNum(3, 1);
  const iconsArray: IconNameProps[] = []
  for (let i = 0; i < numOfIcons; i++) {
    iconsArray.push(mockIconsDictionaryData[getRandomNum(3)])
  }
  return iconsArray;
}

export const generateDishesArray = () => {
  const numOfDishes = getRandomNum(10, 4);
  const dishNameStrings = ["Red Farm", "Pad Ki Mao", "Ta Ma-La-Ko"];
  const dishIngrediantStrigns = [
    "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori",
    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
  ];
  const dishesArray: Dish[] = [];
  for (let i = 0; i <= numOfDishes; i++) {
    const dish = {
      id: i,
      picture: dishPics[getRandomNum(4)],
      name: dishNameStrings[getRandomNum(3)],
      ingredients: dishIngrediantStrigns[getRandomNum(3)],
      dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
      price: getRandomNum(110, 50),
      icons: generateIconsArray(),
    };
    dishesArray.push(dish);
  }
  return dishesArray;
};
