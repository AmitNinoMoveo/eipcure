import React, { FC } from "react";
import { Link } from "react-router-dom";
import FilterProps from "../utils/interfaces/filter";
import "./SingleFilter.scss";

const SingleFilter: FC<FilterProps & { filterState: string }> = ({
  text,
  type,
  pathname,
  filterState,
  onClick
}) => {
  return (
    <Link
      className={`filter-btn ${filterState === type ? "active" : ""}`}
      onClick={onClick}
      to={`${pathname}`}
    >
      {text}
    </Link>
  );
};

export default SingleFilter;
