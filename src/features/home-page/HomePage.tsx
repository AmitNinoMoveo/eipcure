import React from "react";
import { useAppSelector } from "../../state/hooks";
import AboutUs from "./compnents/AboutUs";
import ChefOfTheWeekComponent from "./compnents/ChefOfTheWeek";
import HeroComponent from "./compnents/Hero";
import IconDictionaryComponent from "./compnents/IconDictionary";
import MobileNavComponent from "./compnents/MobileNav";
import PopularRestaurantsComponent from "./compnents/PopularRestaurants";
import SigantureDishComponent from "./compnents/SigantureDish";
import "./HomePage.scss";

const HomePageComponent = () => {

    const displaySize = useAppSelector(state=>state.generalUISettings.displaySize);

  const MobileNav = () => <>{
      displaySize === "mobile" && <MobileNavComponent />
  }</>;

  return (
    <main>
      <HeroComponent />
      <MobileNav />
      <PopularRestaurantsComponent />
      <SigantureDishComponent />
      <IconDictionaryComponent />
      <ChefOfTheWeekComponent />
      <AboutUs />
    </main>
  );
};

export default HomePageComponent;
