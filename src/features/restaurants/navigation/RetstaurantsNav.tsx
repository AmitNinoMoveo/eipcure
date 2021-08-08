import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import noChildrenProps from '../../../utils/interfaces/noChildrenComponent';
import AllRestaurants from '../components/AllRestaurants';


const RetstaurantsNav: FC<noChildrenProps> = () => (
        <BrowserRouter>
        <Switch>
            <Route path='/restaurants/all' >
                <AllRestaurants type='all' />
            </Route>
            <Route path='/restaurants/new'>
                <AllRestaurants type='new' />
            </Route>
            <Route path='/restaurants/open'>
                <AllRestaurants type='open' />
            </Route>
            <Route path='/restaurants/popular'>
                <AllRestaurants type='popular' />
            </Route>
            <Redirect from="/restaurants/*" to="/restaurants/all"/>
        </Switch>
        </BrowserRouter>
    )
export default RetstaurantsNav;
