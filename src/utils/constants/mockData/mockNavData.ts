import UserIcon from "../../../assets/images/icons/user-icon.svg";
import BagIcon from "../../../assets/images/icons/bag-icon.svg";
import navItem from "../../interfaces/navItem";

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

export const mockNavFooterItems: navItem[] = [
  {
    name: "Contact Us",
    route: "contact"
  },
  {
    name: "Terms of Use",
    route: "terms"
  },
  {
    name: "Privacy Policy",
    route: "privacy"
  },
];