import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userLocation, setUserLocation] = useState("");

  return (
    <div className="App">
      <span>{userLocation || "no_data"}</span>
      <button>Get location</button>
    </div>
  );
}

export default App;
