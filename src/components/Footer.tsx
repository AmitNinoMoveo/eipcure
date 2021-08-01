import "./Footer.scss";
import React from "react";
import { mockNavFooterItems } from "../utils/constants/navData";
import NavLinks from "./NavLinks";

const FooterComponent = () => (
  <footer>
    <NavLinks navItems={mockNavFooterItems} />
  </footer>
);

export default FooterComponent;
