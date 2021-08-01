import './AllRestaurants.scss';
import React from 'react';
import { useAppSelector } from "../../../state/hooks";
import CardComponent from "../../../components/general/Card";

const AllRestaurants = () => {
  const restaurants = useAppSelector(
    (state) => state.restaurantsPage.restaurants
  );
  return (
    <section className="s-mt all-restaurants-container">
      {restaurants.map(({ id, chef, name, picture }) => (
        <CardComponent
          key={id}
          type="medium"
          carousel={false}
          id={id}
          title={name}
          subTitle={chef}
          picture={picture}
        />
      ))}
    </section>
  );
};
export default AllRestaurants;
