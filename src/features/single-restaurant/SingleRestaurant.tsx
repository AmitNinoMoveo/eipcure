import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../state/hooks";
import RestuarantDetails from "./components/RestaurantDetails";
import SingleRestaurantFilters from "./components/SingleRestaurantFilters";
import SingleRestaurantNav from "./navigation/SingleRestaurantNav";
import "./SingleRestaurant.scss";
import { getRestaurantInfoAction } from "./state/actions";

type Params = {
  id: string;
};

const SingleRestaurant = () => {
  const { id } = useParams<Params>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRestaurantInfoAction(id));
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <div className="inner-container">
        <RestuarantDetails />
        <SingleRestaurantFilters />
        <SingleRestaurantNav />
      </div>
    </main>
  );
};

export default SingleRestaurant;
