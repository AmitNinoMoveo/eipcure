import "../../assets/styles/components/home-page/chef-week.scss";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import CarouselComponent from "../general/Carousel";
import CardComponent from "../general/Card";

const ChefOfTheWeekComponent = () => {
  const chef = useSelector((state: RootState) => state.data.chefWeek);

  const ChefPortrait = () => (
    <div
      className="chef-portrait"
      style={{ backgroundImage: `url(${chef.picture})` }}
    >
      <h2>{chef.chefName}</h2>
    </div>
  );

  const Carousel = () => (
    <CarouselComponent>
      {chef.restaurants.map((restaurant) => (
        <CardComponent key={restaurant.id} />
      ))}
    </CarouselComponent>
  );

  return (
    <section className="chef-week-container">
      <h3>chef of the week:</h3>
      <ChefPortrait />
      <p>{chef.description}</p>
      <h3>{chef.chefName}'s restaurants:</h3>
      <Carousel />
    </section>
  );
};

export default ChefOfTheWeekComponent;
