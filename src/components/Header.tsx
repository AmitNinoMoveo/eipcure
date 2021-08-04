import "./Header.scss";
import React, { FC } from "react";
import MenuIcon from "../assets/images/icons/menu-logo.svg";
import DishesIcon from "../assets/images/icons/dishes-icon.png";
import NavLinks from "./NavLinks";
import { useAppSelector } from "../state/hooks";
import { RootState } from "../state/store";
import { mockNavMainItems, mockNavUserItems } from "../utils/constants/navData";
import Search from "./Search";

const Header: React.FC = () => {
  const displaySize = useAppSelector(
    (state: RootState) => state.generalUISettings.displaySize
  );

  const NavLeft: FC = () => (
    <div className="nav-left">
      {displaySize === "mobile" ? (
        <img src={MenuIcon} alt="menu-icon" />
      ) : (
        <>
          <img src={DishesIcon} alt="dishes-icon" />
          <NavLinks navItems={mockNavMainItems} />
        </>
      )}
    </div>
  );

  const RightNav: FC = () => (
    <div className="nav-right">
      <Search
        onChangeFunc={() => {}}
        valueState=""
        placeholderTxt={"Search for restaurant cuisine, chef"}
        type={displaySize === 'mobile' ? "icon" : 'field'}
      />
      <NavLinks navItems={mockNavUserItems} />
    </div>
  );

  const MiddleMobileLogo: FC = () => (
    <>
      {displaySize === "mobile" && (
        <img id="dishes-icon" src={DishesIcon} alt="dishes-icon" />
      )}
    </>
  );

  return (
    <header>
      <nav>
        <NavLeft />
        <MiddleMobileLogo />
        <RightNav />
      </nav>
    </header>
  );
};

export default Header;
