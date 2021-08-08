import React, { FC, useEffect } from "react";
import CardComponent from "../../../components/Card";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import Dish from "../../../utils/interfaces/data/dish";
import noChildrenProps from "../../../utils/interfaces/noChildrenComponent";
import { getRestaurantDishesAction } from "../state/actions";
import { setSingleRestaurantFilterType } from "../state/singleRestaurantReducer";
import singleDishFilter from "../utils/constants";
import "./AllDishes.scss";

type DishesProps = noChildrenProps & {
  dishes: Dish[];
};
const Dishes: FC<DishesProps> = ({ dishes }: DishesProps) => {
  return (
    <>
      {dishes.map(
        ({ id, picture, price, icons, ingredients, name }: Dish, i) => (
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
            onClick={() => {}}
          />
        )
      )}
    </>
  );
};
type AllDishesProps = noChildrenProps & {
  type: singleDishFilter;
};
const AllDishes: FC<AllDishesProps> = ({ type }: AllDishesProps) => {
  const dispatch = useAppDispatch();
  const { singleRestaurantFilterType, restaurant } = useAppSelector(
    (state) => state.singleRestaurantPage
  );
  useEffect(() => {
    dispatch(setSingleRestaurantFilterType(type));
    if (!restaurant.dishes.length) {
      dispatch(
        getRestaurantDishesAction({
          id: restaurant.id,
          type: singleRestaurantFilterType,
        })
      );
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    dispatch(
      getRestaurantDishesAction({
        id: restaurant.id,
        type: singleRestaurantFilterType,
      })
    );
    // eslint-disable-next-line
  }, [singleRestaurantFilterType]);
  return (
    <section className="single-restaurant-dishes-container m-mt">
      <Dishes dishes={restaurant.dishes} />;
    </section>
  );
};

export default AllDishes;
