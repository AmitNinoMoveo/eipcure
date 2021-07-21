import React from "react";
import navItem from "../../utils/interfaces/navItem";

type navLinksProps = {
  navItems: navItem[],
  styleClassNames: string
};

const NavLinks: React.FC<navLinksProps> = ({ navItems, styleClassNames }: navLinksProps) => {
  return (
    <ul className={styleClassNames}>
      {navItems.map((navItem) => (
        <li>
          <a href={navItem.route}>
            {navItem.name ? (
              navItem.name
            ) : navItem.icon ? (
              <img src={navItem.icon} alt={navItem.route} />
            ) : (
              navItem.route
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
