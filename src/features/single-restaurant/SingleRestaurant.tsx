import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../state/hooks";
import AllDishes from "./components/AllDishes";
import RestuarantDetails from "./components/RestaurantDetails";
import SingleRestaurantFilters from "./components/SingleRestaurantFilters";
import "./SingleRestaurant.scss";
import { getRestaurantAction } from "./state/actions";

type Params = {
  id: string;
};

const SingleRestaurant = () => {
  const { id } = useParams<Params>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRestaurantAction(id));
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <div className="inner-container">
        <RestuarantDetails />
        <SingleRestaurantFilters />
        <AllDishes />
      </div>
    </main>
  );
};

export default SingleRestaurant;
