import React, { useState } from "react";
import memesData from "../Data/memesData";
import Preview from "./Preview";

function Form() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const numAleatorio = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[numAleatorio].url);
    console.log(memeImage);
  }

  return (
    <div className="flex flex-col items-center w-screen h-auto">
      <div className="grid grid-cols-2 gap-8 justify-around w-11/12 mt-16 mb-10">
        <input
          type="text"
          className="w-fill border-2 border-gray-300 px-4 h-12 rounded-lg placeholder:text-neutral-600 focus:ring-1 focus:outline-none focus:border-violet-600"
          placeholder="Upper text"
        />
        <input
          type="text"
          className="w-fill border-2 border-gray-300 px-4 h-12 rounded-lg placeholder:text-neutral-600 focus:ring-1 focus:outline-none focus:border-violet-600"
          placeholder="Bottom text"
        />
      </div>
      <button
        onClick={getMemeImage}
        className="bg-violet-700 mx-2 h-12 w-11/12 rounded-lg text-white font-medium text-lg tracking-tight"
      >
        Get a new meme image
      </button>
      <div className="w-screen h-[60vh] mt-10 flex justify-center items-center">
        <img
          src={memeImage}
          alt=""
          className="w-11/12 h-full object-scale-down"
        />
      </div>
    </div>
  );
}

export default Form;
