
import React, { useEffect } from "react";
import "./assets/styles/layout/app.scss";
import { getHomePageDataAction } from "./features/home-page/actions";
import NavigationComponent from "./navigation/navigation";
import { useAppDispatch } from "./state/hooks";

function App() {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getHomePageDataAction())
    // eslint-disable-next-line
  },[]);

  return (
    <div className="App">
      <NavigationComponent />
    </div>
  );
}

export default App;
