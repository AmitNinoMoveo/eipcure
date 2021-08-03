import './RestaurantDetails.scss';
import React from "react";
import { useAppSelector } from "../../../state/hooks";
import ClockIcon from '../../../assets/images/icons/clock-icon.svg';

const RestaurantDetails = () => {
  const { picture, name, chef, isOpen } = useAppSelector(
    (state) => state.singleRestaurantPage.restaurant
  );

  return (
    <section className="single-restaurant-details-container">
      <div className="image" style={{ backgroundImage: `url(${picture})`}}/>
      <h2>{name}</h2>
      <h3>{chef}</h3>
      <div className="is-open-container">
        <p>{isOpen ? "Open Now" : "Closed"}</p>
        <img src={ClockIcon} alt="open-closed" />
      </div>
    </section>
  );
};

export default RestaurantDetails;
