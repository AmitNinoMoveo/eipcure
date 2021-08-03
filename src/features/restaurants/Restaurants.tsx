import React from "react";
import './Restaurants.scss';
import AllFilters from "./components/AllFilters";
import AllRestaurants from "./components/AllRestaurants";
import { useAppSelector } from "../../state/hooks";

const Header = () => (
  <section className="heading s-mt">
    <h2 className="title-large text-uppercase">Restaurants</h2>
  </section>
);

const Restaurants = () => {

  const isLoading = useAppSelector(state=>state.restaurantsPage.isLoading);

  return(
  <main className="s-mt restaurants-page-container">
    <Header />
    <AllFilters />
{
  isLoading ? 
  <h2>No Data</h2> :
  <AllRestaurants /> 
}
  </main>
);}

export default Restaurants;
