import React, { useState } from "react";
import "./App.css";

import { GetStartedContext } from "./components/context/GetStartedContext";

import GetStartedBox from "./components/GetStartedBox/GetStartedBox";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const [isStarted, updateStarted] = useState(false);

  return (
    <div className="App">
      <GetStartedContext.Provider value={{ isStarted, updateStarted }}>
        {isStarted ? <GetStartedBox /> : <LandingPage />}
      </GetStartedContext.Provider>
    </div>
  );
}

export default App;
