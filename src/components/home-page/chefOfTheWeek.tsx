import React from "react";
import "../../assets/styles/components/home-page/chef-week.scss";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../../state/store";
import CardComponent from "../general/Card";
import CarouselComponent from "../general/Carousel";

const ChefOfTheWeekComponent = () => {
  const chef = useAppSelector((state) => state.homePage.chefWeek);
  const displaySize = useAppSelector(
    (state: RootState) => state.generalUISettings.displaySize
  );

  const ChefPortrait = () => (
    <div
      className="chef-portrait"
      style={{ backgroundImage: `url(${chef.picture})` }}
    >
      <h2 className="title-large" >{chef.chefName}</h2>
    </div>
  );

  const Carousel = () => (
    <CarouselComponent>
      {chef.restaurants.map((restaurant) => (
        <CardComponent
          key={restaurant.id}
          id={restaurant.id}
          type="small"
          title={restaurant.name}
          carousel={true}
          picture={restaurant.picture}
        />
      ))}
    </CarouselComponent>
  );

  return (
    <section className="chef-week-container">
      <h3 className="text-uppercase">chef of the week:</h3>
      <ChefPortrait />
      <p>{chef.description}</p>
      <h3 className="self-start" >{chef.chefName}'s restaurants:</h3>
      {displaySize !== "web" ? <Carousel /> : <></>}
    </section>
  );
};

export default ChefOfTheWeekComponent;
