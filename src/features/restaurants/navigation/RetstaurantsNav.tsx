import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import noChildrenProps from "../../../utils/interfaces/noChildrenComponent";
import AllRestaurants from "../components/AllRestaurants";

const RetstaurantsNav: FC<noChildrenProps> = () => (
  <>
    <Route path="/restaurants/all">
      <AllRestaurants type="all" />
    </Route>
    <Route path="/restaurants/new">
      <AllRestaurants type="new" />
    </Route>
    <Route path="/restaurants/open">
      <AllRestaurants type="open" />
    </Route>
    <Route path="/restaurants/popular">
      <AllRestaurants type="popular" />
    </Route>
    {/* <Redirect from="/restaurants/*" to="/restaurants/all" /> */}
  </>
);
export default RetstaurantsNav;
