import React from "react";
import "../../assets/styles/layout/home-page.scss";
import AboutUs from "../../components/home-page/AboutUs";
import ChefOfTheWeekComponent from "../../components/home-page/chefOfTheWeek";
import HeroComponent from "../../components/home-page/Hero";
import IconDictionaryComponent from "../../components/home-page/IconDictionary";
import MobileNavComponent from "../../components/home-page/MobileNav";
import PopularRestaurantsComponent from "../../components/home-page/PopularRestaurants";
import SigantureDishComponent from "../../components/home-page/SigantureDish";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../../state/store";

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
