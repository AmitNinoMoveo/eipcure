import React from "react";
import "./HomePage.scss";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../../state/store";
import AboutUs from "./compnents/AboutUs";
import ChefOfTheWeekComponent from "./compnents/ChefOfTheWeek";
import HeroComponent from "./compnents/Hero";
import IconDictionaryComponent from "./compnents/IconDictionary";
import MobileNavComponent from "./compnents/MobileNav";
import PopularRestaurantsComponent from "./compnents/PopularRestaurants";
import SigantureDishComponent from "./compnents/SigantureDish";

const HomePageComponent = () => {

    const displaySize = useAppSelector((state: RootState)=>state.generalUISettings.displaySize);

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
