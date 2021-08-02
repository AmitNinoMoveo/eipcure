import React from "react";
import "./PopularRestaurants.scss";
import { useAppSelector } from "../../../state/hooks";
import CardComponent from "../../../components/Card";
import CarouselComponent from "../../../components/Carousel";

const PopularRestaurantsComponent = () => {
  const restaurants = useAppSelector((state) => state.homePage.popularRestaurants);
  const displaySize = useAppSelector((state) => state.generalUISettings.displaySize
  );

  const Cards = () => (
    <>
      {restaurants.map((restaurant, i) => (
        <CardComponent
          key={i}
          type="medium"
          carousel={displaySize !== "web"}
          id={restaurant.id}
          picture={restaurant.picture}
          title={restaurant.name}
          subTitle={restaurant.chef}
        />
      ))}
    </>
  );

  const Carousel = () => (
    <CarouselComponent>
      <Cards />
    </CarouselComponent>
  );

  return (
    <section className="popular-restaurants-container">
      <h2 className="text-uppercase">The popular restaurants in epicure :</h2>
      {displaySize !== "web" ? <Carousel /> : <Cards />}
    </section>
  );
};

export default PopularRestaurantsComponent;
