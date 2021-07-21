import React from "react";
import navItem from "../../utils/interfaces/navItem";

type navLinksProps = {
    navItems: navItem[]
}

const NavLinks: React.FC<navLinksProps> = ({navItems}: navLinksProps) => {

  return (
    <ul>
      {navItems.map((navItem) => (
        <li>
          <a href={navItem.route}>{navItem.name ? navItem.name : (navItem.route && navItem.icon)}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;