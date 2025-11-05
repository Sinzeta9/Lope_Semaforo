import React, { useState } from "react";

const Semaforo = () => {
  const [color, setColor] = useState("red");

  const alternateColor = () => {
    const colors = ["red", "yellow", "green"];
    const nextIndex = (colors.indexOf(color) + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">

      <div className="background d-flex flex-column align-items-center p-3 rounded-3 mx-auto">
        <button
          onClick={() => setColor("red")}
          type="button"
          className={`btn btn-danger btn-circle ${
            color === "red" ? "glow-red" : ""
          }`}
        ></button>

        <button
          onClick={() => setColor("yellow")}
          type="button"
          className={`btn btn-warning btn-circle ${
            color === "yellow" ? "glow-yellow" : ""
          }`}
        ></button>

        <button
          onClick={() => setColor("green")}
          type="button"
          className={`btn btn-success btn-circle ${
            color === "green" ? "glow-green" : ""
          }`}
        ></button>
      </div>

      <p className="text-center mt-3 fw-semibold">
        Pulsa para cambiar el color del semáforo
      </p>

      
      <button className="btn btn-primary mt-1" onClick={alternateColor}>
        Cambiar color
      </button>
    </div>
  );
};

export default Semaforo;
