import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import FooterComponent from "../components/general/Footer";
import Header from "../components/general/Header";
import HomePageComponent from "../features/home-page/HomePage";

const NavigationComponent = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/all">
        <HomePageComponent />
      </Route>
      <Redirect from="/*" to="/all" />
    </Switch>
    <FooterComponent />
  </BrowserRouter>
);

export default NavigationComponent;
