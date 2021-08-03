import "./SingleRestaurantFilters.scss";
import React from "react";
import SingleFilter from "../../../components/SingleFilter";
import FilterProps from "../../../utils/interfaces/filter";
import { useAppDispatch } from "../../../state/hooks";
import { setSingleRestaurantFilterType } from "../state/singleRestaurantReducer";
import { getRestaurantAction } from "../state/actions";

const SingleResaurantFilters = () => {
  const dispatch = useAppDispatch();

  const filters: FilterProps[] = [
    {
      text: "Breakfast",
      type: "breakfast",
      onClick: () => {
        dispatch(setSingleRestaurantFilterType("breakfast"));
        dispatch(getRestaurantAction(""));
      },
    },
    {
      text: "Lunch",
      type: "lunch",
      onClick: () => {
        dispatch(setSingleRestaurantFilterType("lunch"));
        dispatch(getRestaurantAction(""));
      },
    },
    {
      text: "Dinner",
      type: "dinner",
      onClick: () => {
        dispatch(setSingleRestaurantFilterType("dinner"));
        dispatch(getRestaurantAction(""));
      },
    },
  ];

  return (
    <section className="single-restaurant-filters-container">
      {filters.map(({ text, type, onClick }, i) => (
        <SingleFilter key={i} text={text} type={type} onClick={onClick} />
      ))}
    </section>
  );
};

export default SingleResaurantFilters;
