import navItem from "../../utils/interfaces/navItem";
import UserIcon from "../../assets/images/icons/user-icon.svg";
import BagIcon from "../../assets/images/icons/bag-icon.svg";

export const mockNavUserItems: navItem[] = [
  {
    icon: UserIcon,
    route: "user",
  },
  {
    icon: BagIcon,
    route: "cart",
  },
];

export const mockNavMainItems: navItem[] = [
  {
    name: "EPICURE",
    route: "home",
  },
  {
    name: "Restaurants",
    route: "restaurants",
  },
  {
    name: "Chefs",
    route: "chefs",
  },
];
