import React from "react";
import './Header.scss';
import NavLinks from "../nav-links/NavLinks";
import Search from "../search/Search";
import { mockNavMainItems, mockNavUserItems } from "./mockNavData";

const Header: React.FC = () => {
  return (
    <header className='header-container flex row space-between align-center w-all' >
      <nav className="nav-main-menu">
        {
          
        }
        <NavLinks navItems={mockNavMainItems}/>
      </nav>
      <div className="company-logos"></div>
      <Search onChangeFunc={()=>{}} valueState={''} placeholderTxt={'Search'} type={"icon"}/>
      <nav className="nav-user">
        <NavLinks navItems={mockNavUserItems}/>
      </nav>
    </header>
  );
};

export default Header;
