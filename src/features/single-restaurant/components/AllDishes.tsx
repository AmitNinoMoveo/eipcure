import React from "react";
import CardComponent from "../../../components/Card";
import { useAppSelector } from "../../../state/hooks";
import "./AllDishes.scss";


const Dishes = () => {
  const { dishes } = useAppSelector(
    (state) => state.singleRestaurantPage.restaurant
  );

  return (
    <section className="single-restaurant-dishes-container">
      {dishes.map(({id, picture, price, icons, ingredients, name }, i) => (
        <CardComponent
        key={i}
        type="large"
        id={id}
        carousel={false}
        picture={picture}
        title={name}
        discription={ingredients}
        icons={icons}
        price={price}
        />
      ))}
    </section>
  );
};

export default Dishes;
