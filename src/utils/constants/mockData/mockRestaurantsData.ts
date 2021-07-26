import { getRandomNum } from "../../functions/functions";
import Restaurant from "../../interfaces/data/restaurant";
import mockChefsData from "./mockChefsData";
import MockDishStageCategory from "./mockDishStageCategoryData";

const mockRestaurantsData: Restaurant[] = [
    {
        id: 1,
        name: 'Clara',
        chef: mockChefsData[5],
        isOpen: true,
        stats:{
            publishedAt: new Date(),
            numOfLikes: 100
        },
        dishes:[
            {
               id: 1,
               picture: '',
               name: 'Pad Ki Mao',
               ingredients:  'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: 88
            },
            {
               id: 2,
               picture: '',
               name: 'Ta Ma-La-Ko',
               ingredients:  'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: 89
            },
            {
               id: 3,
               picture: '',
               name: 'Red Farm',
               ingredients:  'Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: 105
            },
            {
               id: 4,
               picture: '',
               name: 'Pad Ki Mao',
               ingredients:  'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: 88
            },
            {
               id: 5,
               picture: '',
               name: 'Ta Ma-La-Ko',
               ingredients:  'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: 89
            },
            {
               id: 6,
               picture: '',
               name: 'Red Farm',
               ingredients:  'Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: 105
            },
        ]
    },
    {
        id: 2,
        name: "Breakfast at Nino's",
        chef: mockChefsData[getRandomNum(5, 1)],
        isOpen: true,
        stats:{
            publishedAt: new Date(1626728400000),
            numOfLikes: 10
        },
        dishes:[
            {
               id: 1,
               picture: '',
               name: 'Pad Ki Mao',
               ingredients:  'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: getRandomNum(110, 50)
            },
            {
               id: 2,
               picture: '',
               name: 'Ta Ma-La-Ko',
               ingredients:  'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: getRandomNum(110, 50)
            },
            {
               id: 3,
               picture: '',
               name: 'Red Farm',
               ingredients:  'Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: getRandomNum(110, 50)
            },
            {
               id: 4,
               picture: '',
               name: 'Pad Ki Mao',
               ingredients:  'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: getRandomNum(110, 50)
            },
            {
               id: 5,
               picture: '',
               name: 'Ta Ma-La-Ko',
               ingredients:  'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: getRandomNum(110, 50)
            },
            {
               id: 6,
               picture: '',
               name: 'Red Farm',
               ingredients:  'Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: getRandomNum(110, 50)
            },
        ]
    },
    {
        id: 3,
        name: 'Ochel',
        chef: mockChefsData[getRandomNum(5, 1)],
        isOpen: false,
        stats:{
            publishedAt: new Date(1282424400000),
            numOfLikes: 70
        },
        dishes:[
            {
               id: 1,
               picture: '',
               name: 'Pad Ki Mao',
               ingredients:  'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: getRandomNum(110, 50)
            },
            {
               id: 2,
               picture: '',
               name: 'Ta Ma-La-Ko',
               ingredients:  'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: getRandomNum(110, 50)
            },
            {
               id: 3,
               picture: '',
               name: 'Red Farm',
               ingredients:  'Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: getRandomNum(110, 50)
            },
            {
               id: 4,
               picture: '',
               name: 'Pad Ki Mao',
               ingredients:  'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: getRandomNum(110, 50)
            },
            {
               id: 5,
               picture: '',
               name: 'Ta Ma-La-Ko',
               ingredients:  'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: getRandomNum(110, 50)
            },
            {
               id: 6,
               picture: '',
               name: 'Red Farm',
               ingredients:  'Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori',
               dishStageCategory: MockDishStageCategory[getRandomNum(3, 1)],
               price: getRandomNum(110, 50)
            },
        ]
    },
];

export default mockRestaurantsData;