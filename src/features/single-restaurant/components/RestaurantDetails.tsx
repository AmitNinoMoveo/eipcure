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
      <h2 className="m-mt text-bold">{name}</h2>
      <h3>{chef}</h3>
      <div className="is-open-container m-mt">
        <img src={ClockIcon} alt="open-closed" />
        <p>{isOpen ? "Open now" : "Closed"}</p>
      </div>
    </section>
  );
};

export default RestaurantDetails;
