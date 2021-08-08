import React, { FC } from "react";
import CardComponent from "../../../components/Card";
import CarouselComponent from "../../../components/Carousel";
import { useAppSelector } from "../../../state/hooks";
import { RootState } from "../../../state/store";
import Dish from "../../../utils/interfaces/data/dish";
import noChildrenProps from "../../../utils/interfaces/noChildrenComponent";
import "./SigantureDish.scss";

const SigantureDishComponent = () => {
  const dishes = useAppSelector(
    (state: RootState) => state.homePage.signatureDish
  );
  const displaySize = useAppSelector(
    (state: RootState) => state.generalUISettings.displaySize
  );

  type CardsProps = {
    children?: never;
    dishes: Dish[];
  };

  const Cards: FC<CardsProps & noChildrenProps> = ({ dishes }) => (
    <>
      {dishes.map((dish, i) => {
        const { id, picture, ingredients, name, icons, price,restaurant } = dish;
        return (
          <div className="dish-card-container">
            <h3>{restaurant.name}</h3>
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
            />
          </div>
        );
      })}
    </>
  );

  const Carousel = () => (
    <CarouselComponent>
      <Cards dishes={dishes} />
    </CarouselComponent>
  );

  const ContainerCards = () => (
    <div className="cards-container-web s-mt">
      <Cards dishes={dishes.slice(0, 3)} />
    </div>
  );

  return (
    <section className="signature-dish-container inner-container">
      <h2 className="text-uppercase">Signature dish of: </h2>
      {displaySize !== "web" ? <Carousel /> : <ContainerCards />}
    </section>
  );
};

export default SigantureDishComponent;
