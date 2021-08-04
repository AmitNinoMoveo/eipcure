import "./Hero.scss";
import React from "react";
import HeroBackgroundImg from "../../../assets/images/pictures/hero-background.png";
import Search from "../../../components/Search";

const HeroComponent = () => (
  <section>
    <div
      style={{ backgroundImage: `url(${HeroBackgroundImg})` }}
      className="home-hero-container"
    >
      <div className="hero-box-container">
        <h1>Epicure works with the top chef restaurants in Tel Aviv</h1>
        <Search
          onChangeFunc={() => {}}
          placeholderTxt={"Search for restaurant cuisine, chef"}
          valueState=""
          type="field"
        />
      </div>
    </div>
  </section>
);

export default HeroComponent;
