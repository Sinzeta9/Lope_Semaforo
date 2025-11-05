import React, { useState } from "react";
import "../../styles/index.css";

const TrafficLight = () => {
  const colors = ["red", "yellow", "green"];
  const [color, setColor] = useState("red");

  const nextColor = () => {
    const i = colors.indexOf(color);
    setColor(colors[(i + 1) % colors.length]);
  };

  return (
    <div className="wrapper">
      <div id="trafficTop"></div>
      <div id="container">
        {colors.map((c) => (
          <div
            key={c}
            className={`${c} light ${color === c ? "active" : ""}`}
            onClick={() => setColor(c)}
          ></div>
        ))}
      </div>
      <div className="controls">
        <button onClick={nextColor}>Siguiente</button>
      </div>
    </div>
  );
};

export default TrafficLight;
