import React from "react";
import './Restaurants.scss';
import AllFilters from "./components/AllFilters";
import AllRestaurants from "./components/AllRestaurants";

const Header = () => (
  <section className="heading s-mt">
    <h2 className="title-large text-uppercase">Restaurants</h2>
  </section>
);

const Restaurants = () => (
  <main className="s-mt restaurants-page-container">
    <Header />
    <AllFilters />
    <AllRestaurants />
  </main>
);

export default Restaurants;
