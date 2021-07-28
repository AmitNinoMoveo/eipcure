
import "./assets/styles/layout/app.scss";
import React, { useEffect } from "react";
import NavigationComponent from "./navigation/navigation";
import { setChefWeek, setRestaurants } from "./state/reducers/dataReducer";
import { useDispatch } from "react-redux";
import mockChefWeekData from "./utils/constants/mockData/mockChefWeekData";
import mockRestaurantsData from "./utils/constants/mockData/mockRestaurantsData";

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setChefWeek(mockChefWeekData));
    dispatch(setRestaurants(mockRestaurantsData));
    // eslint-disable-next-line
  },[]);

  return (
    <div className="App">
      <NavigationComponent />
    </div>
  );
}

export default App;
