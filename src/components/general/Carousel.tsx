import '../../assets/styles/components/carousel.scss';
import React, { FC } from 'react';

const CarouselComponent: FC= ({children}) => {
    return (
        <div className="carousel-container">
            {children}
        </div>
    )
}

export default CarouselComponent;
