import React, { FC } from "react";
import "./PopularRestaurants.scss";
import { useAppSelector } from "../../../state/hooks";
import CardComponent from "../../../components/Card";
import CarouselComponent from "../../../components/Carousel";
import { Link } from "react-router-dom";

const PopularRestaurantsComponent = () => {
  const restaurants = useAppSelector(
    (state) => state.homePage.popularRestaurants
  );
  const displaySize = useAppSelector(
    (state) => state.generalUISettings.displaySize
  );

  const CarouselCards: FC = () => (
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
      <CarouselCards />
    </CarouselComponent>
  );

  const ContainerCards = () => (
    <>
      <div className="cards-container-web m-mt">
        {restaurants.slice(0, 3).map((restaurant, i) => (
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
      </div>
      <Link className="link m-mt" to="/restaurants">
        All restaurants &gt;&gt;{" "}
      </Link>
    </>
  );

  return (
    <section className="popular-restaurants-container inner-container">
      <h2 className="text-uppercase">The popular restaurants in epicure :</h2>
      {displaySize !== "web" ? <Carousel /> : <ContainerCards />}
    </section>
  );
};

export default PopularRestaurantsComponent;
