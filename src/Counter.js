import React, { useState } from "react";
import Count from "./Count";

export default function Counter() {
  const [count, setCount] = useState(0);

  function plusCounter() {
    setCount((prevCount) => prevCount + 1);
  }

  function lessCounter() {
    setCount((prevcount) => prevcount - 1);
  }

  /**
   * Challenge:
   * - Create a new component named Count
   *    - It should receive a prop called `number`, whose value
   *      is the current value of our count
   *    - Have the component render the whole div.counter--count
   *      and display the incoming prop `number`
   * - Replace the div.counter--count below with an instance of
   *   the new Count component
   */

  return (
    <div className="bg-neutral-900 text-white w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-center h-96 w-96 text-center">
        <div className="relative">
          <button
            onClick={lessCounter}
            className="h-20 w-20 bg-slate-700 rounded-full text-4xl font-semibold absolute bottom-0 left-0"
          >
            -
          </button>
          <Count number={count} />
          <button
            onClick={plusCounter}
            className="h-20 w-20 bg-slate-700 rounded-full text-4xl font-semibold absolute bottom-0 right-0"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
