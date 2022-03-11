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
  /**
   * Challenge: use setSquares to update the
   * correct square in the array.
   *
   * Make sure not to directly modify state!
   *
   * Hint: look back at the lesson on updating arrays
   * in state if you need a reminder on how to do this
   */

  /* 
  //recibe un parametro, en este caso
  function toggle(id) {
    //Actualizo el estado creando una funcion la cual recibe el estado anterior devolviendo un nuevo array
    setSquares((prevSquares) => {
      //estamos creando un nuevo array sin modificar el original, tiene el mismo tamaño y contenido del original
      return prevSquares.map((square) => {
        //en cada ciclo de la funcion map verificamos si el id de square(nuevo array) es igual al id que se esta pasando
        //el id del arreglo original, si es verdadero, reemplaza el contenido del estado anterior al nuevo, sino lo 
        //deja igual (usa destructuracion para acceder al contenido implicito del objeto )
        return square.id === id ? { ...square, on: !square.on } : square;
        //es decir, crea un nuevo array con el tamaño del array anterior(prevSquares)
        //map hace una especie de foreach y empieza a comparar antiguo con nuevo
      });
    });
  } */

  const [squares, setSquares] = React.useState(boxesData);

  function toggle(id) {
    setSquares((prevSquare) => {
      //creo un nuevo arreglo para actualizar el estado por medio de map
      //recorro las posiciones por medio de la variable square, todo lo que haga dentro de esa funcion se guardara en dicha posicion
      return prevSquare.map((square) => {
        //verifico si el valor pasado por medio de la funcion del componente hijo es identico a la posicion actual de la actualizacion
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  //no usa llaves para hacer uso implicitamente de la palabra return de la arrow function
  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
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
