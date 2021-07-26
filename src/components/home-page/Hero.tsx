import React from 'react'
import Search from '../general/search/Search';

const HeroComponent = () => {
    return (
        <section className="hero-container w-all flex justify-center align-center">
            <div className="hero-box-container">
                <h1></h1>
                <Search onChangeFunc={()=>{}} placeholderTxt={"Restaurants, Chefs, Meals"} valueState={""} type="field" />
            </div>
        </section >
    )
}


export default HeroComponent;
