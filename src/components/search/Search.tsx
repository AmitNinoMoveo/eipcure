import React from "react";
import magnifyingGlassIcon from '../../assets/images/icons/magnifying-glass.svg';
type Props = {
  type: "icon" | "field";
  placeholderTxt: string;
  valueState: string;
  onChangeFunc: () => void;
};

const Search = ({ onChangeFunc, placeholderTxt, valueState, type }: Props) => {
  return (
    <div className={`search-container-${type}`}>
      <img
        src={magnifyingGlassIcon}
        alt="magnifying-glass"
      />
      {type === "icon" ? (
        <></>
      ) : (
        <>
          <input
            onChange={() => onChangeFunc()}
            value={valueState}
            placeholder={placeholderTxt}
            type="text"
          />
        </>
      )}
    </div>
  );
};

export default Search;
