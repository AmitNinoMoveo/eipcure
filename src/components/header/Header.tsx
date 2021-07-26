import React from "react";
import "./Header.scss";
import MenuIcon from "../../assets/images/icons/menu-logo.svg";
import DishesIcon from "../../assets/images/icons/dishes-icon.png";
import NavLinks from "../general/nav-links/NavLinks";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../../state/store";
import {
  mockNavMainItems,
  mockNavUserItems,
} from "../../utils/constants/mockData/mockNavData";
import Search from "../general/search/Search";

const Header: React.FC = () => {
  const generalUISettingsState = useAppSelector(
    (state: RootState) => state.generalUISettings.displaySize
  );

  return (
    <header className="w-all">
      <nav className="flex space-between align-center w-all">
        <div className="flex center align-center">
          {generalUISettingsState === "mobile" ? (
            <img src={MenuIcon} alt="menu-icon" />
          ) : (
            <NavLinks
              navItems={mockNavMainItems}
              styleClassNames={""}
            />
          )}
        </div>
        <img id="dishes-icon" src={DishesIcon} alt="dishes-icon" />
        <div className="flex flex-end align-center">
          <Search
            onChangeFunc={() => {}}
            valueState={""}
            placeholderTxt={"Search"}
            type={"icon"}
          />
          <NavLinks
            navItems={mockNavUserItems}
            styleClassNames={"flex flex-end align-center"}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
