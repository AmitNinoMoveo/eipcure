import React, { FC } from "react";
import FilterProps from "../utils/interfaces/filter";
import "./SingleFilter.scss";

const SingleFilter: FC<FilterProps & {filterState: string}> = ({
  text,
  type,
  onClick,
  filterState,
}) => {
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
