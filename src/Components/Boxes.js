import React from "react";
import boxesData from "../Data/boxesData";

export default function Boxes() {
  const [squares, setSquares] = React.useState(boxesData);

  //no usa llaves para hacer uso implicitamente de la palabra return de la arrow function
  const squareElements = squares.map((square) => (
    <div className="flex items-center justify-center border-2 m-2 border-slate-900 w-32 h-32" key={square.id}>
        <p>{square.on ? "habilitado" : "deshabilitado"}</p>
    </div>
  ));
  return <main className="flex flex-wrap justify-center">{squareElements}</main>;
}
