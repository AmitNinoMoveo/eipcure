import "../../assets/styles/components/general/carousel.scss";
import React, { FC } from "react";

const CarouselComponent: FC = ({ children }) => (
  <div className="carousel-container">{children}</div>
);

export default CarouselComponent;
