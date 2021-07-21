import React from "react";
import "./Header.scss";
import MenuIcon from "../../assets/images/icons/menu-logo.svg";
import NavLinks from "../nav-links/NavLinks";
import Search from "../search/Search";
import { mockNavMainItems, mockNavUserItems } from "./mockNavData";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../../state/store";

const Header: React.FC = () => {
  const displaySizeState = useAppSelector(
    (state: RootState) => state.displaySize.displaySize
  );

  return (
    <header className="header-container flex row space-between align-center w-all">
      <nav className="nav-main-menu">
        {displaySizeState === "mobile" ? (
          <img src={MenuIcon} alt="menu-icon" />
        ) : (
          <NavLinks navItems={mockNavMainItems} />
        )}
      </nav>
      <div className="company-logos"></div>
      <Search
        onChangeFunc={() => {}}
        valueState={""}
        placeholderTxt={"Search"}
        type={"icon"}
      />
      <nav className="nav-user">
        <NavLinks navItems={mockNavUserItems} />
      </nav>
    </header>
  );
};

export default Header;
