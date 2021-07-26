import React from "react";
import "./hero.scss";
import HeroBackgroundImg from "../../assets/images/pictures/hero-background.png";
import Search from "../general/search/Search";

const HeroComponent = () => {
  return (
    <section
      style={{ backgroundImage: `url(${HeroBackgroundImg})` }}
      className="flex justify-center align-stretch"
    >
      <div className="hero-box-container flex justify-center align-center column">
        <h1>Epicure works with the top chef restaurants in Tel Aviv</h1>
        <Search
          onChangeFunc={() => {}}
          placeholderTxt={"Search for restaurant cuisine, chef"}
          valueState={""}
          type="field"
        />
      </div>
    </section>
  );
};

export default HeroComponent;
