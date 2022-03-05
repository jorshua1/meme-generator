import React from "react";

function Navbar() {
  return <div className="bg-violet-800 text-white h-24 w-full flex justify-between items-center font-medium">
      <div className="flex items-center px-10">
          <img src="/Assets/trollface.png" alt="" className="object-cover h-10 w-auto pr-3"/>
          <h2 className="font-medium text-2xl tracking-tight">Meme Generator</h2>
      </div>
      <div className="px-10 text-xl">
          React Course - Project 3
      </div>
  </div>;
}

export default Navbar