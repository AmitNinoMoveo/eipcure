import "./AllFilters.scss";
import React from "react";
import { useAppDispatch } from "../../../state/hooks";
import { getAllRestaurantsDataAction, getNewRestaurantsDataAction, getOpenRestaurantsDataAction, getPopularRestaurantsDataAction } from "../state/actions";
import SingleFilter, { FilterProps } from "./SingleFilter";

const AllFilters = () => {
  const dispatch = useAppDispatch();

  const filters: FilterProps[] = [
    {
      text: "All",
      type: "all",
      cb: () => {
        dispatch(getAllRestaurantsDataAction());
      },
    },
    {
      text: "New",
      type: "new",
      cb: () => {
        dispatch(getNewRestaurantsDataAction());
      },
    },
    {
      text: "Most Popular",
      type: "popular",
      cb: () => {
        dispatch(getPopularRestaurantsDataAction());
      },
    },
    {
      text: "Open",
      type: "open",
      cb: () => {
        dispatch(getOpenRestaurantsDataAction());
      },
    },
  ];

  return (
    <section className="s-mt all-filters-container">
      {filters.map(({ text, type, cb }: FilterProps) => (
        <SingleFilter text={text} type={type} cb={cb} />
      ))}
    </section>
  );
};
export default AllFilters;
