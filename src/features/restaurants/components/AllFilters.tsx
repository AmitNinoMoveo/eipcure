import React from "react";
import SingleFilter, { FilterProps } from "../../../components/SingleFilter";
import { useAppDispatch } from "../../../state/hooks";
import { allRestaurantsRepo, newRestaurantsRepo, openRestaurantsRepo, popularRestaurantsRepo } from "../repository/repository";
import { getRestaurantAction } from "../state/actions";
import "./AllFilters.scss";

const AllFilters = () => {
  const dispatch = useAppDispatch();

  const filters: FilterProps[] = [
    {
      text: "All",
      type: "all",
      onClick: () => {
        dispatch(getRestaurantAction(allRestaurantsRepo));
      },
    },
    {
      text: "New",
      type: "new",
      onClick: () => {
        dispatch(getRestaurantAction(newRestaurantsRepo));
      },
    },
    {
      text: "Most Popular",
      type: "popular",
      onClick: () => {
        dispatch(getRestaurantAction(popularRestaurantsRepo));
      },
    },
    {
      text: "Open",
      type: "open",
      onClick: () => {
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
