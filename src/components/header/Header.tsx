import React from "react";
import "./Header.scss";
import MenuIcon from "../../assets/images/icons/menu-logo.svg";
import DishesIcon from "../../assets/images/icons/dishes-icon.png";
import NavLinks from "../general/nav-links/NavLinks";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../../state/store";
import { mockNavMainItems, mockNavUserItems } from "../../utils/constants/mockNavData";
import Search from "../general/search/Search";

const Header: React.FC = () => {
  const generalUISettingsState = useAppSelector(
    (state: RootState) => state.generalUISettings.displaySize
  );

  return (
    <header className="header-container flex row space-between align-center w-all">
      <nav className="nav-main flex space-between align-center">
        <div className="main-links">
          {generalUISettingsState === "mobile" ? (
            <img src={MenuIcon} alt="menu-icon" />
          ) : (
            <NavLinks navItems={mockNavMainItems} styleClassNames={"flex row flex space-around align-center w-all"} />
          )}
        </div>
        <div className="main-company-logo">
          <img src={DishesIcon} alt="dishes-icon" />
        </div>
      </nav>
      <nav className="nav-user-search flex space-around align-center">
        <Search
          onChangeFunc={() => {}}
          valueState={""}
          placeholderTxt={"Search"}
          type={"icon"}
        />
        <NavLinks navItems={mockNavUserItems} styleClassNames={"flex row flex space-evenly space-around w-all"} />
      </nav>
    </header>
  );
};

export default Header;
