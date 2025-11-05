import React, { useState } from "react";
import "../styles.css";

const Home = () => {
  const [color, setColor] = useState("red"); // Estado del color actual

  return (
    <div className="PpalContainer">
      <div id="trafficTop"></div>

      <div id="container">
        
        <div
          className={"light red " + (color === "red" ? "active" : "")}
          onClick={() => setColor("red")}
        ></div>

        <div
          className={"light yellow " + (color === "yellow" ? "active" : "")}
          onClick={() => setColor("yellow")}
        ></div>

        <div
          className={"light green " + (color === "green" ? "active" : "")}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default Home;
