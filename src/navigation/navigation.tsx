import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import FooterComponent from "../components/Footer";
import Header from "../components/Header";
import HomePageComponent from "../features/home-page/HomePage";
import Restaurants from "../features/restaurants/Restaurants";
import SingleRestaurant from "../features/single-restaurant/SingleRestaurant";

const NavigationComponent = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/restaurants/*">
        <Restaurants />
      </Route>
      <Route path="/r/:id/*">
        <SingleRestaurant />
      </Route>
      <Route path="/">
        <HomePageComponent />
      </Route>
      <Redirect from="/*" to="/" />
    </Switch>
    <FooterComponent />
  </BrowserRouter>
);

export default NavigationComponent;
