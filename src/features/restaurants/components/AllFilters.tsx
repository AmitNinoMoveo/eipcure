import React from "react";
import SingleFilter from "../../../components/SingleFilter";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import FilterProps from "../../../utils/interfaces/filter";
import { setFilterType } from "../state/restaurantsPageReducer";
import "./AllFilters.scss";

const AllFilters = () => {
  const filterState = useAppSelector(
    (state) => state.restaurantsPage.filterState
  );
  const dispatch = useAppDispatch();

  const filters: FilterProps[] = [
    {
      text: "All",
      type: "all",
      pathname: "/restaurants/all",
      onClick: () => dispatch(setFilterType("all")),
    },
    {
      text: "New",
      type: "new",
      pathname: "/restaurants/new",
      onClick: () => dispatch(setFilterType("new")),
    },
    {
      text: "Most Popular",
      type: "popular",
      pathname: "/restaurants/popular",
      onClick: () => dispatch(setFilterType("popular")),
    },
    {
      text: "Open",
      type: "open",
      pathname: "/restaurants/open",
      onClick: () => dispatch(setFilterType("open")),
    },
  ];

  return (
    <section className="m-mt all-filters-container ">
      {filters.map(({ text, type, pathname, onClick }: FilterProps, i) => (
        <SingleFilter
          key={i}
          text={text}
          type={type}
          pathname={pathname}
          filterState={filterState}
          onClick={onClick}
        />
      ))}
    </section>
  );
};
export default AllFilters;
