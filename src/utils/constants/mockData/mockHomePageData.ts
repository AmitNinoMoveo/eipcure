import { HomePage } from "../../../state/reducers/homePageReducer";
import { PartialRestaurant } from "../../interfaces/data/restaurant";
import mockChefWeekData from "./mockChefWeekData";
import mockRestaurantsData, { generateSignatureDishArray } from "./mockRestaurantsData";


const mockHomePageData: HomePage = {
    isLoading:false,
    chefWeek: mockChefWeekData,
    popularRestaurants: mockRestaurantsData.map(({id, picture, name, chef}): PartialRestaurant=>{return{id, picture, name, chef}}),
    signatureDish: generateSignatureDishArray()
};

export default mockHomePageData