import React from "react";
import { Link } from "react-router-dom";
import navItem from "../../utils/interfaces/navItem";

type navLinksProps = {
  navItems: navItem[];
};

const NavLinks: React.FC<navLinksProps> = ({ navItems }: navLinksProps) => (
  <ul>
    {navItems.map((navItem, i) => (
      <li key={i}>
        <Link to={navItem.route}>
          {navItem.name ? (
            navItem.name
          ) : navItem.icon ? (
            <img src={navItem.icon} alt={navItem.route} />
          ) : (
            navItem.route
          )}
        </Link>
      </li>
    ))}
  </ul>
);

export default NavLinks;
