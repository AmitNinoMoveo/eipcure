import React from "react";
import "./App.scss";
import NavigationComponent from "./navigation/navigation";

function App() {
  return (
    <div className="App flex column flex-start w-all">
      <NavigationComponent />
    </div>
  );
}

export default App;
