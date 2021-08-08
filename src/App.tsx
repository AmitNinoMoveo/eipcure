
import React, { useEffect } from "react";
import "./App.scss";
import { getHomePageDataAction } from "./features/home-page/state/actions";
import NavigationComponent from "./navigation/navigation";
import { useAppDispatch } from "./state/hooks";
import { setDisplaySizeState } from "./state/reducers/generalUISettings";
import useDisplaySizeListener from "./utils/hooks/useDisplaySizeListener";

function App() {

  const dispatch = useAppDispatch();
  const displaySize = useDisplaySizeListener();  

  useEffect(()=>{
    dispatch(getHomePageDataAction());
    // eslint-disable-next-line
  },[]);

  useEffect(()=>{
    dispatch(setDisplaySizeState(displaySize));
    // eslint-disable-next-line
  },[displaySize])

  return (
    <div className="App">
      <NavigationComponent />
    </div>
  );
}

export default App;
