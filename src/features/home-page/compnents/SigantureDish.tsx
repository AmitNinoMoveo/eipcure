import React from "react";
import "./SigantureDish.scss";
import { useAppSelector } from "../../../state/hooks";
import { RootState } from "../../../state/store";
import CardComponent from "../../../components/Card";
import CarouselComponent from "../../../components/Carousel";

const SigantureDishComponent = () => {
  const dishes = useAppSelector((state: RootState) => state.homePage.signatureDish);
  const displaySize = useAppSelector(
    (state: RootState) => state.generalUISettings.displaySize
  );

  const Cards = () => (
    <>
      {dishes.map((dish, i) => {
        const {
          id,
          picture,
          ingredients,
          name,
          icons,
          price
        }= dish;
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
    <section className="signature-dish-container inner-container">
      <h2 className="text-uppercase">Signature dish of: </h2>
      <h3>Tiger Claw</h3>
      {displaySize !== "web" ? <Carousel /> : <Cards />}
    </section>
  );
};

export default SigantureDishComponent;
