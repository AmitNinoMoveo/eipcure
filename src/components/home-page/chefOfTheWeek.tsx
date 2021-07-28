import "../../assets/styles/components/home-page/chef-week.scss";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import CarouselComponent from "../general/Carousel";
import CardComponent from "../general/Card";
import { useAppSelector } from "../../state/hooks";

const ChefOfTheWeekComponent = () => {
  const chef = useSelector((state: RootState) => state.data.chefWeek);
  const displaySize = useAppSelector(
    (state: RootState) => state.generalUISettings.displaySize
  );

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
