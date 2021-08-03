import { AllRestaurantsFilter } from "../../features/restaurants/utils/contstants";
import singleDishFilter from "../../features/single-restaurant/utils/constants";


type FilterProps = {
    text: string;
    type: AllRestaurantsFilter | singleDishFilter
    onClick: () => void;
  };

  export default FilterProps;