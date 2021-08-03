import React, { FC } from "react";
import { setFilterType } from "../features/restaurants/state/restaurantsPageReducer";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import './SingleFilter.scss';

export type FilterProps = {
    text: string;
    type: "all" | "new" | "popular" | "open";
    onClick: () => void;
  };
  const SingleFilter: FC<FilterProps> = ({ text, type, onClick }: FilterProps) => {
    const filterState = useAppSelector(
      (state) => state.restaurantsPage.filterState
    );
    const dispatch = useAppDispatch();
  
    return (
      <button
        className={`filter-btn ${filterState === type ? "text-bold" : ""}`}
        onClick={() =>{
          dispatch(setFilterType(type))
          onClick()
        }}
      >
        {text}
      </button>
    );
  };

  export default SingleFilter;