import React from "react";



function Box(props) {
  const [on, setOn] = React.useState(props.on);

  function handleClick() {
    setOn(!on);
    console.log("changed");
  }
  const styles = {
    backgroundColor: on ? "#222" : "transparent",
    color: on ? "#fff" : "#222",
  };

  console.log(on);

  return (
    <div
      style={styles}
      className="flex items-center justify-center m-2 w-32 h-32 rounded-lg"
      onClick={handleClick}
    >
      <p>{on ? "habilitado" : "deshabilitado"}</p>
    </div>
  );
}

export default Box;
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

/**
 * Challenge: Create state controlling whether
 * this box is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 *
 * Create an event listener so when the box is clicked,
 * it toggles from "on" to "off".
 *
 * Goal: clicking each box should toggle it on and off.
 */