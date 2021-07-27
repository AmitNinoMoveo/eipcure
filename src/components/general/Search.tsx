import "../../assets/styles/components/search.scss";
import React, { FC } from "react";
import magnifyingGlassIcon from "../../assets/images/icons/magnifying-glass.svg";

type Props = {
  type: "icon" | "field";
  placeholderTxt: string;
  valueState: string;
  onChangeFunc: () => void;
};

const SearchBar: FC<Props> = ({
  onChangeFunc,
  placeholderTxt,
  valueState,
  type,
}: Props) => (
  <>
    {type !== "icon" && (
      <input
        onChange={() => onChangeFunc()}
        value={valueState}
        placeholder={placeholderTxt}
        type="text"
      />
    )}
  </>
);

const Search: FC<Props> = ({
  onChangeFunc,
  placeholderTxt,
  valueState,
  type,
}: Props) => (
  <div className={`search-container ${type} flex space-around align-center`}>
    <img src={magnifyingGlassIcon} alt="magnifying-glass" />
    <SearchBar
      onChangeFunc={onChangeFunc}
      placeholderTxt={placeholderTxt}
      valueState={valueState}
      type={type}
    />
  </div>
);

export default Search;
