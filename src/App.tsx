import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import HomePageComponent from "./features/home-page/HomePage";

function App() {
  return (
    <div className="App flex column flex-start w-all">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/all">
            <HomePageComponent />
          </Route>
          <Redirect from="/*" to="/all" />
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
