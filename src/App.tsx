import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import HomePage from "./features/home-page/HomePage";

function App() {
  return (
    <div className="App flex column flex-start w-all">
      <BrowserRouter>
        <Switch>
          <Header />
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
