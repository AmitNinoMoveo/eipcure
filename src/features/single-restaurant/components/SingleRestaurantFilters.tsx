import React from "react";
import { useParams } from "react-router-dom";
import SingleFilter from "../../../components/SingleFilter";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import FilterProps from "../../../utils/interfaces/filter";
import { setSingleRestaurantFilterType } from "../state/singleRestaurantReducer";
import "./SingleRestaurantFilters.scss";

const SingleResaurantFilters = () => {
  const filterState = useAppSelector(
    (state) => state.singleRestaurantPage.singleRestaurantFilterType
  );
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();

  const filters: FilterProps[] = [
    {
      text: "Breakfast",
      type: "breakfast",
      pathname: `/r/${id}/breakfast`,
      onClick: () => dispatch(setSingleRestaurantFilterType("breakfast")),
    },
    {
      text: "Lunch",
      type: "lunch",
      pathname: `/r/${id}/lunch`,
      onClick: () => dispatch(setSingleRestaurantFilterType("lunch")),
    },
    {
      text: "Dinner",
      type: "dinner",
      pathname: `/r/${id}/dinner`,
      onClick: () => dispatch(setSingleRestaurantFilterType("dinner")),
    },
  ];

  return (
    <section className="single-restaurant-filters-container m-mt">
      {filters.map(({ text, type, pathname, onClick }, i) => (
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

export default SingleResaurantFilters;
