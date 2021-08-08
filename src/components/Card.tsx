import "./Card.scss";
import React, { FC } from "react";
import CardProps from "../utils/interfaces/card";
import noChildrenProps from "../utils/interfaces/noChildrenComponent";

const CardComponent: FC<CardProps & noChildrenProps> = (props: CardProps) => {
  const getCardClassName = () =>
    `card-container ${props.type} ${props.carousel && "carousel-card"}`;

  const Icons: FC<noChildrenProps> = () => (
    <div className="icons-container">
      {props.type === "large" &&
        props.icons.map((icon, i) => (
          <img key={i} src={icon.icon} alt={icon.name} className="icon" />
        ))}
    </div>
  );
  const MediumCard: FC<noChildrenProps> = () => <h3>{props.type === "medium" && props.subTitle}</h3>;
  const LargeCard: FC<noChildrenProps> = () => (
    <>
      <p>{props.type === "large" && props.discription}</p>
      <Icons />
      <div className="price-container">
        <div className="line" />
        <p id="price">&#8362;{props.type === "large" && props.price}</p>
        <div className="line" />
      </div>
    </>
  );

  return (
    <div className={getCardClassName()} onClick={props.onClick}>
      <div id="image" style={{ backgroundImage: `url(${props.picture})` }} />
      <div className="card-text-box">
        <h2 className='text-ellipsis' >{props.title}</h2>
        {props.type === "medium" && <MediumCard />}
        {props.type === "large" && <LargeCard />}
      </div>
    </div>
  );
};

export default CardComponent;
