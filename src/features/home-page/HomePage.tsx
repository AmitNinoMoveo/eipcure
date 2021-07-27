import React from "react";
import { useSelector } from "react-redux";
import "../../assets/styles/layout/home-page.scss";
import HeroComponent from "../../components/home-page/Hero";
import MobileNavComponent from "../../components/home-page/MobileNav";
import { RootState } from "../../state/store";

const HomePageComponent = () => {

    const displaySize = useSelector((state: RootState)=>state.generalUISettings.displaySize);

  const MobileNav = () => <>{
      displaySize === "mobile" && <MobileNavComponent />
  }</>;

  return (
    <main>
      <HeroComponent />
      <MobileNav />
    </main>
  );
};

export default HomePageComponent;
