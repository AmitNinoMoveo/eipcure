import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import FilterProps from "../utils/interfaces/filter";
import './SingleFilter.scss';

  const SingleFilter: FC<FilterProps> = ({ text, type, onClick }) => {
    const filterState = useAppSelector(
      (state) => state.restaurantsPage.filterState
    );
    const dispatch = useAppDispatch();
  
    return (
      <button
        className={`filter-btn ${filterState === type ? "active" : ""}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };

  export default SingleFilter;