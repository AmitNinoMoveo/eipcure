import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AllDishes from "../components/AllDishes";

const SingleRestaurantNav = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/r/:id/breakfast">
        <AllDishes type="breakfast" />
      </Route>
      <Route path="/r/:id/lunch">
        <AllDishes type="lunch" />
      </Route>
      <Route path="/r/:id/dinner">
        <AllDishes type="dinner" />
      </Route>
      <Redirect from="/r/:id/*" to="/r/:id/breakfast" />
    </Switch>
  </BrowserRouter>
);

export default SingleRestaurantNav;
