import React, { FC } from "react";
import noChildrenProps from "../../utils/interfaces/noChildrenComponent";
import AllFilters from "./components/AllFilters";
import RetstaurantsNav from "./navigation/RetstaurantsNav";
import "./Restaurants.scss";

const Header = () => (
  <section className="heading s-mt">
    <h2 className="title-large text-uppercase">Restaurants</h2>
  </section>
);

const Restaurants: FC<noChildrenProps> = () => {
  return (
    <main className="restaurants-page-container">
      <Header />
      <AllFilters />
      <RetstaurantsNav  />
    </main>
  );
};

export default Restaurants;
