import React from "react";
import boxesData from "../Data/boxesData";
import Box from "./Box";

/**
 * Challenge: Create a toggle() function that logs
 * "clicked!" to the console
 *
 * Pass that function down to each of the Box components
 * and set it up so when they get clicked it runs the function
 */

export default function Boxes(props) {
  const [squares, setSquares] = React.useState(boxesData);
  console.log(props.darkMode);

  const style = {
    backgroundColor: props.darkMode ? "#222222" : "#CCCCCC",
  };

  //no usa llaves para hacer uso implicitamente de la palabra return de la arrow function
  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on}></Box>
  ));

  /**
   * Challenge part 2:
   * 1. Create a separate component called "Box" and
   *    replace the `div` above with our <Box /> components
   * 2. Pass the Box component a prop called `on` with the
   *    value of the same name from the `boxes` objects
   * 3. In the Box component, apply dynamic styles to determine
   *    the backgroundColor of the box. If it's `on`, set the
   *    backgroundColor to "#222222". If off, set it to "none"
   */

  return (
    <main className="flex flex-wrap justify-center">{squareElements}</main>
  );
}
