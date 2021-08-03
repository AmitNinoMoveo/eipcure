import "./SingleRestaurantFilters.scss";
import React from "react";
import SingleFilter from "../../../components/SingleFilter";
import FilterProps from "../../../utils/interfaces/filter";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { setSingleRestaurantFilterType } from "../state/singleRestaurantReducer";
import { getRestaurantAction } from "../state/actions";

const SingleResaurantFilters = () => {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector(state=>state.singleRestaurantPage.singleRestaurantFilterType)

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
    <section className="single-restaurant-filters-container m-mt">
      {filters.map(({ text, type, onClick }, i) => (
        <SingleFilter key={i} text={text} type={type} onClick={onClick} filterState={filterState} />
      ))}
    </section>
  );
};

export default SingleResaurantFilters;
