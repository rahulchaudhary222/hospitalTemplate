import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar";
import ControlledCarousel from "./component/carosuel/carosuel";
import About from "./component/carosuel/About/about";
import Middle from "./component/middle/middle";
import Service from "./component/service/service";
import Doctor from "./component/doctor/doctor";
import Fotter from "./component/fotter/fotter";
import { useState } from "react";

function App() {
  const [showPage, setShowPage] = useState("home");
  return (
    <div className="App">
      <Navbar showPage={showPage} setShowPage={setShowPage} />
      <ControlledCarousel />
      <About showPage={showPage} setShowPage={setShowPage} />
      <Middle />
      <Service />
      <Doctor />
      <Fotter />
    </div>
  );
}

export default App;
