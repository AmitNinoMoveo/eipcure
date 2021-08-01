import './SingleFilter.scss';
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { setFilterType } from "../state/restaurantsPageReducer";

export type FilterProps = {
    text: string;
    type: "all" | "new" | "popular" | "open";
    cb: () => void;
  };
  const SingleFilter: FC<FilterProps> = ({ text, type, cb }: FilterProps) => {
    const filterState = useAppSelector(
      (state) => state.restaurantsPage.filterState
    );
    const dispatch = useAppDispatch();
  
    return (
      <button
        className={`filter-btn ${filterState === type ? "text-bold" : ""}`}
        onClick={() =>{
          dispatch(setFilterType(type))
          cb()
        }}
      >
        {text}
      </button>
    );
  };

  export default SingleFilter;