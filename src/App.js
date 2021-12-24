import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useAppState } from "./states/states";

const Test = () => {
  const inc =   useAppState(state => state.greet)
  const countt = useAppState(state => state.counter) 
  return(
    <div>
      <h3>{countt}</h3>
      <button onClick={inc}>increase counter</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
        <Footer /> 
        {/* <Test /> */}
      </Router>
    </div>
  );
}

export default App;
