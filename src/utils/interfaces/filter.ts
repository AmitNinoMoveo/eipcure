import { AllRestaurantsFilter } from "../../features/restaurants/utils/interface";
import singleDishFilter from "../../features/single-restaurant/utils/constants";

type FilterProps = {
  text: string;
  type: AllRestaurantsFilter | singleDishFilter;
  pathname: string;
  onClick: ()=>void
};

export default FilterProps;
