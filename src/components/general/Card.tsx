import "../../assets/styles/components/card.scss";
import React, { FC } from "react";
import CardProps from "../../utils/interfaces/card";

const CardComponent: FC<CardProps> = (props: CardProps) => {
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
      <img src={props.picture} alt="props.title" />
      <h2>{props.title}</h2>
      {props.type === "medium" && <MediumCard />}
      {props.type === "large" && <LargeCard />}
    </div>
  );
};

export default CardComponent;
