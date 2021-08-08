import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import CardComponent from "../../../components/Card";
import CarouselComponent from "../../../components/Carousel";
import { generateRestaurantPathName, onClickCard } from "../../../navigation/functions";
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

  const history = useHistory();

  const Cards: FC<CardsProps & noChildrenProps> = ({ dishes }) => (
    <>
      {dishes.map(({ id, picture, ingredients, name, icons, price, restaurant }: Dish, i) => {
        return (
          <div key={i} className="dish-card-container">
            <h3>{restaurant.name}</h3>
            <CardComponent
              type="large"
              carousel={displaySize !== "web"}
              id={id}
              picture={picture}
              title={name}
              discription={ingredients}
              icons={icons}
              price={price}
              onClick={()=>onClickCard(generateRestaurantPathName(restaurant.id), history)}
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
