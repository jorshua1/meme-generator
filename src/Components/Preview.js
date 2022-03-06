import React from "react";
import memesData from "../Data/memesData";

function Preview(props) {
  return (
    <div className="w-screen h-[60vh] mt-10 flex justify-center items-center">
      <img src="meme.jpg" alt="" className="w-11/12 h-full object-scale-down" />
    </div>
  );
}

export default Preview;
