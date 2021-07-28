import "../../assets/styles/components/header.scss";
import React from "react";
import MenuIcon from "../../assets/images/icons/menu-logo.svg";
import DishesIcon from "../../assets/images/icons/dishes-icon.png";
import NavLinks from "./NavLinks";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../../state/store";
import {
  mockNavMainItems,
  mockNavUserItems,
} from "../../utils/constants/navData";
import Search from "./Search";

const Header: React.FC = () => {
  const generalUISettingsState = useAppSelector(
    (state: RootState) => state.generalUISettings.displaySize
  );

  return (
    <header>
      <nav>
        <div className="nav-left">
          {generalUISettingsState === "mobile" ? (
            <img src={MenuIcon} alt="menu-icon" />
          ) : (
            <NavLinks
              navItems={mockNavMainItems}
            />
          )}
        </div>
        <img id="dishes-icon" src={DishesIcon} alt="dishes-icon" />
        <div className="nav-right">
          <Search
            onChangeFunc={() => {}}
            valueState=""
            placeholderTxt={"Search"}
            type={"icon"}
          />
          <NavLinks
            navItems={mockNavUserItems}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
