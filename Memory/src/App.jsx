import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Grid from "./components/Grid";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className="body">
      <Stopwatch />
      <Grid />
    </div>
  );
}

export default App;
