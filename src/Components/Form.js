import React, { useState } from "react";
import memesData from "../Data/memesData";
import Preview from "./Preview";

function Form() {
  /**
   * Challenge: Update our state to save the meme-related
   * data as an object called `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   *
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   *
   * Next, create a new state variable called `allMemeImages`
   * which will default to `memesData`, which we imported above
   *
   * Lastly, update the `getMemeImage` function and the markup
   * to reflect our newly reformed state object and array in the
   * correct way.
   */

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const numAleatorio = Math.floor(Math.random() * memesArray.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      //con el spread no debemos hacer uso otra vez de la variable de actualizacion
      randomImage: memesArray[numAleatorio].url,
    }));
    console.log(meme);
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
          src={meme.randomImage}
          alt=""
          className="w-11/12 h-full object-scale-down"
        />
      </div>
    </div>
  );
}

export default Form;
