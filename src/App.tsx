
import "./assets/styles/layout/app.scss";
import React, { useEffect } from "react";
import NavigationComponent from "./navigation/navigation";
import { setChefWeek } from "./state/reducers/dataReducer";
import { useDispatch } from "react-redux";
import mockChefWeekData from "./utils/constants/mockData/mockChefWeekData";

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setChefWeek(mockChefWeekData));
    // eslint-disable-next-line
  },[]);

  return (
    <div className="App">
      <NavigationComponent />
    </div>
  );
}

export default App;
