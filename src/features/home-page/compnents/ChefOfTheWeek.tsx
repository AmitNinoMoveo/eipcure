import React, { FC } from "react";
import "./ChefOfTheWeek.scss";
import { useAppSelector } from "../../../state/hooks";
import { RootState } from "../../../state/store";
import CardComponent from "../../../components/Card";
import CarouselComponent from "../../../components/Carousel";
import noChildrenProps from "../../../utils/interfaces/noChildrenComponent";

const ChefOfTheWeekComponent: FC<noChildrenProps> = () => {
  const chef = useAppSelector((state) => state.homePage.chefWeek);
  const displaySize = useAppSelector(
    (state: RootState) => state.generalUISettings.displaySize
  );

  const ChefPortrait: FC<noChildrenProps> = () => (
    <div
      className="chef-portrait"
      style={{ backgroundImage: `url(${chef.picture})` }}
    >
      <h2 className="title-large">{chef.chefName}</h2>
    </div>
  );

  const Carousel: FC<noChildrenProps> = () => (
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

  const CardsContainer: FC<noChildrenProps> = () => (
    <div className="chef-week-card-container m-mt">
      {chef.restaurants.slice(0, 3).map((restaurant) => (
        <CardComponent
          key={restaurant.id}
          id={restaurant.id}
          type="small"
          title={restaurant.name}
          carousel={true}
          picture={restaurant.picture}
        />
      ))}
    </div>
  );

  return (
    <section className="m-mt">
      <div className="chef-week-container inner-container">
        <h3 className="text-uppercase">chef of the week:</h3>
        <div className="picture-description-contianer">
          <ChefPortrait />
          <p>{chef.description}</p>
        </div>
        <h3 className="self-start">{chef.chefName}'s restaurants:</h3>
        {displaySize !== "web" ? <Carousel /> : <CardsContainer />}
      </div>
    </section>
  );
};

export default ChefOfTheWeekComponent;
