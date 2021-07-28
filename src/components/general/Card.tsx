import "../../assets/styles/components/general/card.scss";
import React, { FC } from "react";
import CardProps from "../../utils/interfaces/card";
import { isTitleTooLong } from "../../utils/functions/functions";

const CardComponent: FC<CardProps> = (props: CardProps) => {
  const changeTitleFontSize = (title: string) =>
    isTitleTooLong(title, 10) ? { fontSize: "2rem" } : {};

  const MediumCard = () => <h3>{props.type === "medium" && props.subTitle}</h3>;
  const LargeCard = () => (
    <>
      <p id="discription">{props.type === "large" && props.discription}</p>
      <img
        src={props.type === "large" ? props.icon : ""}
        alt="icon"
        id="icon"
      />
      <div className="price-container">
        <div className="line" />
        <p>&#8362;{props.type === "large" && props.price}</p>
        <div className="line" />
      </div>
    </>
  );

  return (
    <div
      className={`card-container ${props.type} ${
        props.carousel && "carousel-card"
      }`}
    >
      <div id="image" style={{backgroundImage:`url(${props.picture})`}}/>
      <div className="card-text-box">
        <h2 style={changeTitleFontSize(props.title)}>{props.title}</h2>
        {props.type === "medium" && <MediumCard />}
        {props.type === "large" && <LargeCard />}
      </div>
    </div>
  );
};

export default CardComponent;
