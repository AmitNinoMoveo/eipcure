import React, { useEffect } from 'react';
import CardComponent from "../../../components/Card";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { allRestaurantsRepo } from '../repository/repository';
import { getRestaurantAction } from '../state/actions';
import './AllRestaurants.scss';

const AllRestaurants = () => {
  const restaurants = useAppSelector(
    (state) => state.restaurantsPage.restaurants
  );
  const dispatch = useAppDispatch()

  useEffect(()=>{
    if(!restaurants.length){
      dispatch(getRestaurantAction(allRestaurantsRepo));
    };
    //eslint-disable-next-line
  },[]);

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
