import "../../assets/styles/components/home-page/popular-restaurants.scss";
import React from "react";
import CarouselComponent from "../general/Carousel";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import CardComponent from "../general/Card";

const PopularRestaurantsComponent = () => {
  const restaurants = useSelector((state: RootState) => state.data.restaurants);
  const displaySize = useSelector((state: RootState)=> state.generalUISettings.displaySize);

    const Cards = ()=>
    <>{restaurants.map((restaurant, i) => (
      <CardComponent
        key={i}
        type="medium"
        carousel={displaySize !== 'web'}
        id={restaurant.id}
        picture={restaurant.dishes[0].picture}
        title={restaurant.name}
        subTitle={restaurant.chef}
      />
    ))}</>

  const Carousel = () => (
    <CarouselComponent>
        <Cards />
    </CarouselComponent>
  );

  return <section className="popular-restaurants-container">
    <h2 className="text-uppercase" >The popular restaurants in epicure :</h2>
      {displaySize !== 'web' ? <Carousel /> : <Cards />}
      </section>;
};

export default PopularRestaurantsComponent;
