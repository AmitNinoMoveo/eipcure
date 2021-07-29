import "../../assets/styles/components/home-page/signature-dish.scss";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import CardComponent from "../general/Card";
import CarouselComponent from "../general/Carousel";

const SigantureDishComponent = () => {
  const restaurants = useSelector((state: RootState) => state.data.restaurants);
  const displaySize = useSelector(
    (state: RootState) => state.generalUISettings.displaySize
  );

  const Cards = () => (
    <>
      {restaurants.map((restaurant, i) => {
        const {
          id,
          picture,
          ingredients,
          name,
          icons,
          price
        }= restaurant.dishes[0];
        return(
        <CardComponent
          key={i}
          type="large"
          carousel={displaySize !== "web"}
          id={id}
          picture={picture}
          title={name}
          discription={ingredients}
          icons={icons}
          price={price}
        />)
      })}
    </>
  );

  const Carousel = () => (
    <CarouselComponent>
      <Cards />
    </CarouselComponent>
  );

  return (
    <section className="signature-dish-container">
      <h2 className="text-uppercase">Signature dish of: </h2>
      <h3>Tiger Claw</h3>
      {displaySize !== "web" ? <Carousel /> : <Cards />}
    </section>
  );
};

export default SigantureDishComponent;
