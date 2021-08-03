import React from "react";
import SingleFilter from "../../../components/SingleFilter";
import { useAppDispatch } from "../../../state/hooks";
import FilterProps from "../../../utils/interfaces/filter";
import { allRestaurantsRepo, newRestaurantsRepo, openRestaurantsRepo, popularRestaurantsRepo } from "../repository/repository";
import { getRestaurantAction } from "../state/actions";
import { setFilterType } from "../state/restaurantsPageReducer";
import "./AllFilters.scss";

const AllFilters = () => {
  const dispatch = useAppDispatch();

  const filters: FilterProps[] = [
    {
      text: "All",
      type: "all",
      onClick: () => {
        dispatch(setFilterType('all'))
        dispatch(getRestaurantAction(allRestaurantsRepo));
      },
    },
    {
      text: "New",
      type: "new",
      onClick: () => {
        dispatch(setFilterType('new'))
        dispatch(getRestaurantAction(newRestaurantsRepo));
      },
    },
    {
      text: "Most Popular",
      type: "popular",
      onClick: () => {
        dispatch(setFilterType('popular'))
        dispatch(getRestaurantAction(popularRestaurantsRepo));
      },
    },
    {
      text: "Open",
      type: "open",
      onClick: () => {
        dispatch(setFilterType('open'))
        dispatch(getRestaurantAction(openRestaurantsRepo));
      },
    },
  ];

  return (
    <section className="s-mt all-filters-container">
      {filters.map(({ text, type, onClick }, i) => (
        <SingleFilter key={i} text={text} type={type} onClick={onClick} />
      ))}
    </section>
  );
};
export default AllFilters;
