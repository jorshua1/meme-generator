import React from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Boxes from "./Components/Boxes";

function App(){
  return(
    <div>
      {/* <Navbar /> */}
      {/* <Form /> */}
      {/* <Preview /> */}
      <Boxes darkMode={true} />
    </div>
  )
}

export default App