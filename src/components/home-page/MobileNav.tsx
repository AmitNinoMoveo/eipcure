import "../../assets/styles/components/home-page/nav-mobile.scss";
import React from "react";
import { mockHomePageMobileNavItems } from "../../utils/constants/navData";
import NavLinks from "../general/NavLinks";

const MobileNavComponent = () => (
  <section className="home-mobile-nav">
    <NavLinks navItems={mockHomePageMobileNavItems} />
  </section>
);

export default MobileNavComponent;
