import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import FooterComponent from '../components/footer/Footer';
import Header from '../components/header/Header';
import HomePageComponent from '../features/HomePage';

const NavigationComponent = () => {
    return (
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
    )
}

export default NavigationComponent;
