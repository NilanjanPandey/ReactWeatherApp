import React, { useState,useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import WeatherDetails from "./Components/Weather/WeatherDetails";
//import Spinner from "./Common/Spinner";
import Card from "./Common/Card";
import "./App.css";

function App() {
  const [state, setState] = useState("Kolkata");
  const stateRef=useRef();

  const inputHandler = (e) => {
    //setState(e.target.value);
  };
  const submitHandler = () => {
    setState(stateRef.current.value);
  };

  return (
    <div>
      <Navbar />
      <Card>
        <div className="inputForm">
          <div className="lableDiv">
            <label>
              Enter Location
            </label>
          </div>
          <div className="">
            <input
              type="text"
              id="stateName"
              className=""
              onChange={inputHandler}
              ref={stateRef}
            />
          </div>
          <div className="buttonSearch">
            <button onClick={submitHandler}>Search</button>
          </div>
        </div>
        <WeatherDetails state={state} />
      </Card>
      <Footer />
    </div>
  );
}

export default App;
